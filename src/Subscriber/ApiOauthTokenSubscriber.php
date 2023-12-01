<?php declare(strict_types=1);

namespace Kind2AdminTwoFactorAuth\Subscriber;

use League\OAuth2\Server\Exception\OAuthServerException;
use Kind2AdminTwoFactorAuth\Service\TimebasedOneTimePasswordServiceInterface;
use Shopware\Core\Framework\Context;
use Shopware\Core\Framework\DataAbstractionLayer\EntityRepository;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Criteria;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Filter\EqualsFilter;
use Shopware\Core\System\User\UserEntity;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\Event\ResponseEvent;
use Symfony\Component\HttpKernel\KernelEvents;

class ApiOauthTokenSubscriber implements EventSubscriberInterface
{
    /**
     * @var EntityRepository
     */
    private $userRepository;

    /**
     * @var TimebasedOneTimePasswordServiceInterface
     */
    private $oneTimePasswordService;

    public function __construct(
        EntityRepository $userRepository,
        TimebasedOneTimePasswordServiceInterface $oneTimePasswordService
    ) {
        $this->userRepository = $userRepository;
        $this->oneTimePasswordService = $oneTimePasswordService;
    }

    public static function getSubscribedEvents()
    {
        return [
            KernelEvents::RESPONSE => 'onResponse',
        ];
    }

    public function onResponse(ResponseEvent $event): void
    {
        if ($event->getRequest()->attributes->get('_route') !== 'api.oauth.token') {
            return;
        }

        if ($event->getRequest()->request->get('scope') === 'user-verified'
            || $event->getResponse()->getStatusCode() !== 200) {
            return;
        }

        $username = $event->getRequest()->request->get('username');
        /** @var UserEntity $user */
        $user = $this->userRepository->search(
            (new Criteria())->addFilter(new EqualsFilter('username', $username)),
            Context::createDefaultContext()
        )->first();

        if (!$user || !$user->getCustomFields() || empty($user->getCustomFields()['kind2_2fa_secret'])) {
            return;
        }

        $otp = $event->getRequest()->request->get('kind2_2fa_otp', null);
        if ($otp && $this->checkOtp($user->getCustomFields()['kind2_2fa_secret'], $otp)) {
            return;
        }

        throw new OAuthServerException('This user needs an extra OTP', 1010, 'request-otp', 401, 'request-otp');
    }

    /**
     * @returns true if OTP is correct
     *
     * @throws OAuthServerException when the OTP is incorrect
     */
    private function checkOtp($secret, $code): bool
    {
        try {
            if (!$this->oneTimePasswordService->verifyCode($secret, $code)) {
                throw new \Exception();
            }
        } catch (\Exception $exception) {
            throw new OAuthServerException('Wrong OTP', 1011, 'wrong-otp', 401, null, null, $exception);
        }

        return true;
    }
}
