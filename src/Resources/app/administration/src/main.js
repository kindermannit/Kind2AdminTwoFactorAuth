import enGB from './snippet/en-GB.json';
import deDE from './snippet/de-DE.json'

import './component/kind2-user-otp';
import './override/sw-login/view/sw-login-login';
import './override/sw-profile/page/sw-profile-index';
import './override/sw-users-permissions/page/sw-users-permissions-user-detail';

Shopware.Locale.extend('en-GB', enGB);
Shopware.Locale.extend('de-DE', deDE);