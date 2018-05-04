<?php
namespace Misterge\FoolSample\Model\Checkout;

use Magento\Checkout\Model\ConfigProviderInterface;

/**
 * Class BasicConfigProvider
 */
class BasicConfigProvider implements ConfigProviderInterface
{
    const MINIMUM_AMOUNT = 10;
    const AMOUNT_EDGE = 100;
    const IMAGE = 'Misterge_FoolSample/images/foolsample2.gif';
    const IMAGE2 = 'Misterge_FoolSample/images/foolsample3.gif';

    /**
     * {@inheritdoc}
     */
    public function getConfig()
    {

        $config = [
            'foolsample' => [
                'minimum_amount' => self::MINIMUM_AMOUNT,
                'amount_edge' => self::AMOUNT_EDGE,
                'image' => self::IMAGE,
                'image2' => self::IMAGE2,
            ]
        ];

        return $config;
    }
}
