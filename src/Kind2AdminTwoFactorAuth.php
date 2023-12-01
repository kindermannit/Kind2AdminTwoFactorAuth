<?php declare(strict_types=1);

namespace Kind2AdminTwoFactorAuth;

use Shopware\Core\Framework\Plugin;

if (file_exists(dirname(__DIR__) . '/vendor/autoload.php')) {
    $loader = require_once dirname(__DIR__) . '/vendor/autoload.php';
    if ($loader !== true) {
        spl_autoload_unregister([$loader, 'loadClass']);
        $loader->register(false);
    }
}

class Kind2AdminTwoFactorAuth extends Plugin
{
}
