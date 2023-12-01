import template from './kind2-user-otp.html.twig';
import './kind2-user-otp.scss';

const { Component } = Shopware;

/**
 * @component-example
 * <kind2-user-otp :user="user" :isLoading="isLoading" :onSave="onSave"></kind2-user-otp>
 */
Component.register('kind2-user-otp', {
    template,

    props: [
        'user',
        'isLoading',
        'onSave'
    ],

    data() {
        return {
            httpClient: null,
            isLoading2Fa: false,
            generatedSecret: null,
            generatedSecretUrl: null,
            oneTimePassword: '',
            oneTimePasswordError: ''
        };
    },

    created() {
        this.syncService = Shopware.Service('syncService');
        this.httpClient = this.syncService.httpClient;
    },

    methods: {
        generateSecret() {
            this.isLoading2Fa = true;
            this.httpClient.get('kind2-2fa/generate-secret', {
                params: {
                    holder: this.user.username
                }
            })
                .then((response) => {
                    this.isLoading2Fa = false;
                    this.generatedSecret = response.data.secret;
                    this.generatedSecretUrl = response.data.qrUrl;
                });
        },

        validateAndSaveOneTimePassword() {
            this.isLoading2Fa = true;
            this.httpClient.post('kind2-2fa/validate-secret', {
                secret: this.generatedSecret,
                code: this.oneTimePassword
            }).then((response) => {
                this.isLoading2Fa = false;
                if (response.data.status === 'OK') {
                    this.saveOneTimePassword();
                }
            }).catch((error) => {
                this.isLoading2Fa = false;
                this.oneTimePasswordError = error.response.data.error;
            });
        },

        saveOneTimePassword() {
            if (!this.user.customFields) {
                this.$set(this.user, 'customFields', {});
            }

            this.user.customFields.kind2_2fa_secret = this.generatedSecret;
            this.onSave();
        },

        disable2FA() {
            if (!this.user.customFields) {
                this.$set(this.user, 'customFields', {});
            }

            this.user.customFields.kind2_2fa_secret = '';
            this.onSave();
        }
    }
});
