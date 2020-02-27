define([
    'uiComponent',
    'Magento_Checkout/js/view/summary/grand-total'
], function (Component,total) {
    'use strict';

    return Component.extend({
        defaults: {
            template: 'Magenest_Chapter10/grand-total.html'
        },

        /**
         * @return {*|String}
         */
        getValue: function () {
            return total.prototype.getValue();
        },


    });
});