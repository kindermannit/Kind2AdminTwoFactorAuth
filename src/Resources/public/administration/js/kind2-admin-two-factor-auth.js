!function(e){var n={};function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(i,r,function(n){return e[n]}.bind(null,r));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p=(window.__sw__.assetPath + '/bundles/kind2admintwofactorauth/'),t(t.s="nFh9")}({"92uX":function(e){e.exports=JSON.parse('{"kind2-2fa":{"sw-login":{"index":{"labelOtp":"2FA-Token"},"error":{"title":"Authentifizierung fehlgeschlagen","message":"2FA Code ist ungültig"}},"settings":{"user-detail":{"title":"Zwei-Faktor-Authentifizierung","enabled":{"title":"Zwei-Faktor-Authentifizierung ist aktiv","description":"Glückwunsch, dein Account ist sicher! Um 2FA zu deaktivieren klicke auf den nachstehenden Button.","disable":"2FA deaktivieren"},"not-enabled":{"title":"Zwei-Faktor-Authentifizierung ist inaktiv","description":"Zwei-Faktor-Authentifizierung ist inaktiv! Zum Aktivieren klicke auf den nachstehenden Button.","get-started":"2FA aktivieren"},"generating":{"scan-code":"Scanne den Code in deiner 2FA-App.","description":"Trage dein Einmal-Passwort ein und klicke auf Validieren & Speichern um 2FA für deinen Account zu aktivieren.","error-title":"Es ist ein Fehler aufgetreten","validate-save":"Validieren & Speichern"},"image":{"qr":"QR-Code"}}}},"global":{"default":{"error":"Fehler"}}}')},P8hj:function(e,n,t){"use strict";function i(e,n){for(var t=[],i={},r=0;r<n.length;r++){var s=n[r],o=s[0],a={id:e+":"+r,css:s[1],media:s[2],sourceMap:s[3]};i[o]?i[o].parts.push(a):t.push(i[o]={id:o,parts:[a]})}return t}t.r(n),t.d(n,"default",(function(){return p}));var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var s={},o=r&&(document.head||document.getElementsByTagName("head")[0]),a=null,l=0,d=!1,c=function(){},u=null,g="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(e,n,t,r){d=t,u=r||{};var o=i(e,n);return h(o),function(n){for(var t=[],r=0;r<o.length;r++){var a=o[r];(l=s[a.id]).refs--,t.push(l)}n?h(o=i(e,n)):o=[];for(r=0;r<t.length;r++){var l;if(0===(l=t[r]).refs){for(var d=0;d<l.parts.length;d++)l.parts[d]();delete s[l.id]}}}}function h(e){for(var n=0;n<e.length;n++){var t=e[n],i=s[t.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](t.parts[r]);for(;r<t.parts.length;r++)i.parts.push(m(t.parts[r]));i.parts.length>t.parts.length&&(i.parts.length=t.parts.length)}else{var o=[];for(r=0;r<t.parts.length;r++)o.push(m(t.parts[r]));s[t.id]={id:t.id,refs:1,parts:o}}}}function w(){var e=document.createElement("style");return e.type="text/css",o.appendChild(e),e}function m(e){var n,t,i=document.querySelector("style["+g+'~="'+e.id+'"]');if(i){if(d)return c;i.parentNode.removeChild(i)}if(f){var r=l++;i=a||(a=w()),n=k.bind(null,i,r,!1),t=k.bind(null,i,r,!0)}else i=w(),n=_.bind(null,i),t=function(){i.parentNode.removeChild(i)};return n(e),function(i){if(i){if(i.css===e.css&&i.media===e.media&&i.sourceMap===e.sourceMap)return;n(e=i)}else t()}}var v,b=(v=[],function(e,n){return v[e]=n,v.filter(Boolean).join("\n")});function k(e,n,t,i){var r=t?"":i.css;if(e.styleSheet)e.styleSheet.cssText=b(n,r);else{var s=document.createTextNode(r),o=e.childNodes;o[n]&&e.removeChild(o[n]),o.length?e.insertBefore(s,o[n]):e.appendChild(s)}}function _(e,n){var t=n.css,i=n.media,r=n.sourceMap;if(i&&e.setAttribute("media",i),u.ssrId&&e.setAttribute(g,n.id),r&&(t+="\n/*# sourceURL="+r.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},Z1E5:function(e,n,t){},Zl4Q:function(e,n,t){var i=t("Z1E5");i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,t("P8hj").default)("65fd2ce2",i,!0,{})},ZlGn:function(e){e.exports=JSON.parse('{"kind2-2fa":{"sw-login":{"index":{"labelOtp":"2FA Token"},"error":{"title":"Authentication failed","message":"2FA Code is invalid"}},"settings":{"user-detail":{"title":"Two factor authentication","enabled":{"title":"Two factor authentication is enabled","description":"Congrats! You\'re secure! To disable 2FA for your account, click the button below.","disable":"Disable 2FA"},"not-enabled":{"title":"Two factor authentication is not enabled","description":"Two factor authentication is not enabled for your account. Click the button below to set it up.","get-started":"Click me to get started"},"generating":{"scan-code":"Scan the code on the left with your 2FA app.","description":"Fill in your One Time Password and click \'Validate & enable\' to check the code and enable 2FA for your admin account.","error-title":"Something went wrong","validate-save":"Validate & save"},"image":{"qr":"QR-Code"}}}},"global":{"default":{"error":"Error"}}}')},nFh9:function(e,n,t){"use strict";t.r(n);var i=t("ZlGn"),r=t("92uX");t("Zl4Q");Shopware.Component.register("kind2-user-otp",{template:'{% block kind2_user_otp_user_card %}\n    <sw-card :title="$tc(\'kind2-2fa.settings.user-detail.title\')"\n             :is-loading="isLoading || isLoading2Fa">\n        <div v-if="user && user.customFields && user.customFields.kind2_2fa_secret">\n\n            <sw-alert variant="success"\n                      :title="$tc(\'kind2-2fa.settings.user-detail.enabled.title\')"\n                      style="margin-bottom: 0"\n                      :showIcon="true"\n                      :closable="false">\n                {{ $tc(\'kind2-2fa.settings.user-detail.enabled.description\') }}\n\n                <template v-slot:actions>\n                    <sw-button @click="disable2FA">{{ $tc(\'kind2-2fa.settings.user-detail.enabled.disable\') }}</sw-button>\n                </template>\n            </sw-alert>\n        </div>\n        <div v-else-if="!generatedSecretUrl">\n            <sw-alert variant="warning"\n                      :title="$tc(\'kind2-2fa.settings.user-detail.not-enabled.title\')"\n                      style="margin-bottom: 0"\n                      :showIcon="true"\n                      :closable="false">\n                {{ $tc(\'kind2-2fa.settings.user-detail.not-enabled.description\') }}\n\n                <template v-slot:actions>\n                    <sw-button @click="generateSecret">{{ $tc(\'kind2-2fa.settings.user-detail.not-enabled.get-started\') }}</sw-button>\n                </template>\n            </sw-alert>\n        </div>\n        <div v-else-if="generatedSecretUrl">\n            <sw-container columns="1fr 1fr">\n                <div class="kind2-2fa-qr-code">\n                    <img :src="generatedSecretUrl" :alt="$tc(\'kind2-2fa.settings.user-detail.image.qr\')"/>\n                    <span class="kind2-2fa-qr-code--secret">{{ generatedSecret }}</span>\n                </div>\n                <div>\n                    <b>{{ $tc(\'kind2-2fa.settings.user-detail.generating.scan-code\') }}</b><br />\n                    <br />\n                    {{ $tc(\'kind2-2fa.settings.user-detail.generating.description\') }}<br />\n                    <br />\n                    <sw-alert variant="error"\n                              :title="$tc(\'kind2-2fa.settings.user-detail.generating.error-title\')"\n                              :showIcon="true"\n                              v-if="oneTimePasswordError.length > 0">\n                        {{ oneTimePasswordError }}\n                    </sw-alert>\n\n                    <sw-text-field label="One-time Password"\n                                   :isInvalid="oneTimePasswordError.length > 0"\n                                   v-model="oneTimePassword"\n                                   autocomplete="one-time-code"></sw-text-field>\n\n                    <sw-button @click="validateAndSaveOneTimePassword">\n                        {{ $tc(\'kind2-2fa.settings.user-detail.generating.validate-save\') }}\n                    </sw-button>\n                </div>\n            </sw-container>\n        </div>\n    </sw-card>\n{% endblock %}\n',props:["user","isLoading","onSave"],data:function(){return{httpClient:null,isLoading2Fa:!1,generatedSecret:null,generatedSecretUrl:null,oneTimePassword:"",oneTimePasswordError:""}},created:function(){this.syncService=Shopware.Service("syncService"),this.httpClient=this.syncService.httpClient},methods:{generateSecret:function(){var e=this;this.isLoading2Fa=!0,this.httpClient.get("kind2-2fa/generate-secret",{params:{holder:this.user.username}}).then((function(n){e.isLoading2Fa=!1,e.generatedSecret=n.data.secret,e.generatedSecretUrl=n.data.qrUrl}))},validateAndSaveOneTimePassword:function(){var e=this;this.isLoading2Fa=!0,this.httpClient.post("kind2-2fa/validate-secret",{secret:this.generatedSecret,code:this.oneTimePassword}).then((function(n){e.isLoading2Fa=!1,"OK"===n.data.status&&e.saveOneTimePassword()})).catch((function(n){e.isLoading2Fa=!1,e.oneTimePasswordError=n.response.data.error}))},saveOneTimePassword:function(){this.user.customFields||this.$set(this.user,"customFields",{}),this.user.customFields.kind2_2fa_secret=this.generatedSecret,this.onSave()},disable2FA:function(){this.user.customFields||this.$set(this.user,"customFields",{}),this.user.customFields.kind2_2fa_secret="",this.onSave()}}});var s=Shopware,o=s.Component,a=s.Context,l=s.Application,d=s.Mixin;o.override("sw-login-login",{template:'{% block sw_login_login %}\n\n    <div v-if="!showOtpForm">\n        <form\n            class="sw-login-login"\n            @submit.prevent="loginUserWithPassword"\n        >\n            {% block sw_login_login_form_headline %}\n                <h2 class="sw-login__content-headline">\n                    {{ $tc(\'sw-login.index.headlineForm\') }}\n                </h2>\n            {% endblock %}\n\n            {% block sw_login_login_alert %}\n{#                <sw-alert#}\n{#                        v-if="showLoginAlert"#}\n{#                        variant="info"#}\n{#                        appearance="default"#}\n{#                        :show-icon="true"#}\n{#                        :closable="false"#}\n{#                >#}\n{#                    {{ loginAlertMessage }}#}\n{#                </sw-alert>#}\n            {% endblock %}\n\n            {% block sw_login_login_user_field %}\n                <sw-text-field\n                        v-model="username"\n                        v-autofocus\n                        :label="$tc(\'sw-login.index.labelUsername\')"\n                        :placeholder="$tc(\'sw-login.index.placeholderUsername\')"\n                        :disabled="showLoginAlert"\n                        required\n                />\n            {% endblock %}\n\n            {% block sw_login_login_password_field %}\n                <sw-password-field\n                        v-model="password"\n                        :label="$tc(\'sw-login.index.labelPassword\')"\n                        :placeholder="$tc(\'sw-login.index.placeholderPassword\')"\n                        :disabled="showLoginAlert"\n                        required\n                />\n            {% endblock %}\n\n            {% block sw_login_login_submit %}\n                <div class="sw-login__submit">\n                    {% block sw_login_login_forgot_password %}\n                        <router-link\n                                :to="{ name: \'sw.login.index.recovery\' }"\n                                class="sw-login__forgot-password-action"\n                        >\n                            {{ $tc(\'sw-login.index.forgottenPasswordLink\') }}\n                        </router-link>\n                    {% endblock %}\n\n                    {% block sw_login_login_submit_button %}\n                        <sw-button\n                                :disabled="password.length <= 0 || username.length <= 0 || showLoginAlert"\n                                class="sw-login__login-action"\n                                variant="primary"\n                        >\n                            {{ $tc(\'sw-login.index.buttonLogin\') }}\n                        </sw-button>\n                    {% endblock %}\n                </div>\n            {% endblock %}\n        </form>\n    </div>\n    <div v-else>\n        <form class="sw-login-login sw-login-login-otp" @submit.prevent="loginUserWithPasswordAndOtp">\n            <h2 class="sw-login__content-headline">{{ $tc(\'sw-login.index.headlineForm\') }}</h2>\n\n            <sw-text-field\n                v-autofocus\n                v-model="otp"\n                :label="$tc(\'kind2-2fa.sw-login.index.labelOtp\')"\n                required>\n            </sw-text-field>\n\n            <div class="sw-login__submit">\n                <sw-button :disabled="otp.length != 6 || password.length <= 0 || username.length <= 0"\n                           class="sw-login__login-action"\n                           variant="primary">\n                    {{ $tc(\'sw-login.index.buttonLogin\') }}\n                </sw-button>\n            </div>\n        </form>\n    </div>\n{% endblock %}\n',data:function(){return{rememberOtpPassword:"",showOtpForm:!1,otp:""}},mixins:[d.getByName("notification")],methods:{loginUserWithPasswordAndOtp:function(){var e=this;return this.$emit("is-loading"),this.loginWithOtp(this.username,this.password,this.otp).then((function(){e.handleLoginSuccess(),e.$emit("is-not-loading")})).catch((function(n){e.password="",e.showOtpForm=!1,e.handleLoginError(n),e.$emit("is-not-loading")}))},loginWithOtp:function(e,n,t){var i=this;return l.getContainer("init").httpClient.post("/oauth/token",{grant_type:"password",client_id:"administration",scopes:"write",username:e,password:n,kind2_2fa_otp:t},{baseURL:a.api.apiPath}).then((function(e){var n=i.loginService.setBearerAuthentication({access:e.data.access_token,refresh:e.data.refresh_token,expiry:e.data.expires_in});return window.localStorage.setItem("redirectFromLogin","true"),n}))},loginUserWithPassword:function(){this.rememberOtpPassword=this.password,this.$super("loginUserWithPassword")},handleLoginError:function(e){if("request-otp"!==e.response.data.errors[0].detail)return"Wrong OTP"==e.response.data.errors[0].title&&this.createNotificationError({title:this.$tc("kind2-2fa.sw-login.error.title"),message:this.$tc("kind2-2fa.sw-login.error.message")}),void this.$super("handleLoginError",e);this.password=this.rememberOtpPassword,this.showOtpForm=!0}}});var c=Shopware.Component;c.getComponentRegistry().has("sw-profile-index")&&c.override("sw-profile-index",{template:'{% block sw_profile_index_info_card %}\n    {% parent %}\n    <kind2-user-otp :user="user" :isLoading="isLoading" :onSave="onSave"></kind2-user-otp>\n{% endblock %}\n'});var u=Shopware.Component;u.getComponentRegistry().has("sw-users-permissions-user-detail")&&u.override("sw-users-permissions-user-detail",{template:'{% block sw_setting_user_detail_card_integrations %}\n    <kind2-user-otp :user="user" :isLoading="isLoading" :onSave="onSave"></kind2-user-otp>\n    {% parent %}\n{% endblock %}\n'}),Shopware.Locale.extend("en-GB",i),Shopware.Locale.extend("de-DE",r)}});