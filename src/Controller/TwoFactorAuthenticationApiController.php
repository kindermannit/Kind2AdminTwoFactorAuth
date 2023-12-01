<?php declare(strict_types=1);

namespace Kind2AdminTwoFactorAuth\Controller;

use BaconQrCode\Renderer\Image\SvgImageBackEnd;
use BaconQrCode\Renderer\ImageRenderer;
use BaconQrCode\Renderer\RendererStyle\RendererStyle;
use BaconQrCode\Writer;
use Kind2AdminTwoFactorAuth\Service\ConfigurationService;
use Kind2AdminTwoFactorAuth\Service\TimebasedOneTimePasswordServiceInterface;
use Shopware\Core\Framework\Context;
//use Shopware\Core\Framework\Routing\Annotation\RouteScope;
use Shopware\Core\Framework\Routing\RouteScope;
use Shopware\Core\PlatformRequest;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Routing\RouterInterface;

/**
 * @Route(defaults={"_routeScope"={"api"}})
 */
class TwoFactorAuthenticationApiController extends AbstractController
{
    /**
     * @var TimebasedOneTimePasswordServiceInterface
     */
    private $totpService;

    /**
     * @var RouterInterface
     */
    private $router;

    /**
     * @var ConfigurationService
     */
    private $configurationService;

    public function __construct(
        TimebasedOneTimePasswordServiceInterface $totpService,
        RouterInterface $router,
        ConfigurationService $configurationService
    ) {
        $this->totpService = $totpService;
        $this->router = $router;
        $this->configurationService = $configurationService;
    }

    /**
     * @Route("/api/kind2-2fa/generate-secret", name="api.action.kind2-2fa.generate-secret", methods={"GET"})
     */
    public function generateSecret(Request $request, Context $context): JsonResponse
    {
        $company = $this->configurationService->getAdministrationCompany(
            $request->attributes->get(PlatformRequest::ATTRIBUTE_SALES_CHANNEL_ID)
        );

        $secret = $this->totpService->createSecret();
        $qrUrl = $this->totpService->getQrCodeUrl(
            $company,
            $request->get('holder', ''),
            $secret
        );

        return new JsonResponse([
            'secret' => $secret,
            'qrUrl' => $this->router->generate(
                'api.action.kind2-2fa.secret',
                [
                    'qrUrl' => $qrUrl,
                ],
                UrlGeneratorInterface::ABSOLUTE_URL
            ),
        ]);
    }

    /**
     * @Route("/api/kind2-2fa/validate-secret", name="api.action.kind2-2fa.validate-secret", methods={"POST"})
     */
    public function validateSecret(Request $request, Context $context): JsonResponse
    {
        if (empty($request->get('secret')) || empty($request->get('code'))) {
            return new JsonResponse([
                'status' => 'error',
                'error' => 'Secret or code empty',
            ], 400);
        }

        $verified = $this->totpService->verifyCode(
            (string) $request->get('secret'),
            (string) $request->get('code')
        );

        if ($verified) {
            return new JsonResponse([
                'status' => 'OK',
            ]);
        }

        return new JsonResponse([
            'status' => 'error',
            'error' => 'Secret and code not correct',
        ], 400);
    }

    /**
     * @Route("/api/kind2-2fa/secret", defaults={"auth_required"=false}, name="api.action.kind2-2fa.secret", methods={"GET"})
     */
    public function qrCode(Request $request): Response
    {
        $qrUrl = $request->get('qrUrl', '');

        $renderer = new ImageRenderer(
            new RendererStyle(400),
            new SvgImageBackEnd()
        );

        $qrCode = (new Writer($renderer))
            ->writeString($qrUrl);

        return new Response(
            $qrCode,
            Response::HTTP_OK,
            [
                'Content-Type' => 'image/svg+xml',
            ]
        );
    }
}
