define([
    'uiComponent',
    'Magento_Checkout/js/model/step-navigator'
], function (Component, stepNavigator) {
    'use strict';

    return Component.extend({
        defaults: {
            template: 'Magenest_Chapter10/behind-button.html'
        },

        /**
         * Back step.
         */
        goToBehindStep: function () {
            stepNavigator.back();
        }
    });
});