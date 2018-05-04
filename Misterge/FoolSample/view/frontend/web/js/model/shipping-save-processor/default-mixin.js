define([
   'mage/utils/wrapper',
   'jquery',
   'ko',
   'Magento_Checkout/js/model/quote',
   'Magento_Checkout/js/action/select-billing-address',
   'Misterge_FoolSample/js/action/get-default-billing-address'
], function (wrapper, $, ko, quote, selectBillingAddressAction, getDefaultBillingAddressAction) {
'use strict';

    var extender = {

        saveShippingInformation: function (_super) {

            if (!quote.billingAddress()) {
                var defaultBillingAddress;
                defaultBillingAddress = getDefaultBillingAddressAction();
                if (defaultBillingAddress) {
                    selectBillingAddressAction(defaultBillingAddress);
                } else {
                    selectBillingAddressAction(quote.shippingAddress());
                }
            }
            return _super();

        }
    };

    return function (target) {
        return wrapper.extend(target, extender);
    };
});