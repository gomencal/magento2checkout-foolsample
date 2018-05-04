var config = {
    map: {
        '*': {
            "Magento_Checkout/template/sidebar.html": "Misterge_FoolSample/template/checkout/sidebar.html"
        }
    },
    config: {
        mixins: {
            'Magento_Checkout/js/model/shipping-save-processor/default': {
                'Misterge_FoolSample/js/model/shipping-save-processor/default-mixin': true
            }
        }
    }
};
