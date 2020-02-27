define([
    'jquery',
    'uiComponent',
    'mage/translate',
    'Magento_Checkout/js/model/step-navigator',
    'Magento_Customer/js/model/customer',
], function ($, Component, $t, stepNavigator, customer) {
    'use strict';

    return Component.extend({
        defaults: {
            template: 'Magenest_Chapter10/next-button'
        },


        /**
         * Next step.
         */
        goToNextStep: function () {
            var index = stepNavigator.getActiveItemIndex();
            switch (index) {
                case 1:
                    $('.button.action.continue.primary').click();
                    break;
                case 2:
                    $('.action.primary.checkout').click();
                    break;
                default:
                    if (this.checkEmailValidation())
                        stepNavigator.next();
                    break;
            }
        },

        checkEmailValidation: function (){
            var loginFormSelector = 'form[data-role=email-with-possible-login]';
            $(loginFormSelector).validation();
            return customer.isLoggedIn() ? true : Boolean($(loginFormSelector + ' input[name=username]').valid());
        },

        checkIndexIsPayment: function () {
            var index = stepNavigator.getActiveItemIndex();
            var result = '';
            switch (index) {
                case 2:
                    result = $t('PAY NOW');
                    break;
                default:
                    result = $t('CONTINUE');
                    break;
            }
            return result;
        },
    });
});