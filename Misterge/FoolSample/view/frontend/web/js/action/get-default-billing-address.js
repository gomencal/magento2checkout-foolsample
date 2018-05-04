define([
    'jquery',
    'Magento_Customer/js/model/customer'
], function ($, customer) {
    'use strict';

    return function () {
        var defaultBillingAddress = false;

        $.each(customer.getBillingAddressList(), function (key, address) {
            if (address.isDefaultBilling()) {
                defaultBillingAddress = address;
            }
        });

        return defaultBillingAddress;
    };
});
