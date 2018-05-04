define([
    'jquery',
    'uiComponent',
    'Magento_Checkout/js/model/quote',
    'Magento_Checkout/js/model/step-navigator'
], function ($, Component, quote) {
    'use strict';

    /**
     * Grabs the grand total from quote
     * @return {Number}
     */
    var getTotal = function () {
        return quote.totals()['grand_total'];
    };

    var getQuote = function() {
        return quote;
    };

    return Component.extend({

        defaults: {
            template: 'Misterge_FoolSample/checkout/foolsample'
        },
        /**
         * Init component
         */
        initialize: function () {
            this._super();
            this.config = window.checkoutConfig.foolsample;
        },

        getTitle: function () {
            return this.title;
        },

        getImage: function () {
            if (getQuote().shippingAddress()) {
                if (getQuote().shippingAddress().regionCode
                    && getQuote().shippingAddress().regionCode.toLowerCase() === 'albacete') {
                    return require.toUrl(this.config.image2);
                }
            }

            if (getTotal() >= this.config.amount_edge) {
                return require.toUrl(this.config.image3);
            }
            return false;
        },

        isVisible: function () {
            return (getTotal() >= this.config.minimum_amount);
        }
    })
});
