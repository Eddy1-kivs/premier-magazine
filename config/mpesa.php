<?php

return [

     //Specify the environment mpesa is running, sandbox or production
     'mpesa_env' => 'sandbox',
    /*-----------------------------------------
    |The App consumer key
    |------------------------------------------
    */
    'consumer_key'   => 'nWDPQ03KYvTAKYvQX6VYaF3IGfHjCccj',

    /*-----------------------------------------
    |The App consumer Secret
    |------------------------------------------
    */
    'consumer_secret' =>'xwa7G9xcjqoimVCj',

    /*-----------------------------------------
    |The paybill number
    |------------------------------------------
    */
    'paybill'         => 601380,

    /*-----------------------------------------
    |Lipa Na Mpesa Online Shortcode
    |------------------------------------------
    */
    'lipa_na_mpesa'  => '174379',

    /*-----------------------------------------
    |Lipa Na Mpesa Online Passkey
    |------------------------------------------
    */
    'lipa_na_mpesa_passkey' => 'bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919',

    /*-----------------------------------------
    |Initiator Username.
    |------------------------------------------
    */
    'initiator_username' => '',

    /*-----------------------------------------
    |Initiator Password
    |------------------------------------------
    */
    'initiator_password' => '',

    /*-----------------------------------------
    |Test phone Number
    |------------------------------------------
    */
    'test_msisdn ' => '',

    /*-----------------------------------------
    |Lipa na Mpesa Online callback url
    |------------------------------------------
    */
    'lnmocallback' => '',

     /*-----------------------------------------
    |C2B  Validation url
    |------------------------------------------
    */
    'c2b_validate_callback' => 'https://webhook.site/a3e7b11e-c8c2-4041-9d98-3965c2d6cfa2',

    /*-----------------------------------------
    |C2B confirmation url
    |------------------------------------------
    */
    'c2b_confirm_callback' => 'https://webhook.site/a3e7b11e-c8c2-4041-9d98-3965c2d6cfa2',

    /*-----------------------------------------
    |B2C timeout url
    |------------------------------------------
    */
    'b2c_timeout' => '',

    /*-----------------------------------------
    |B2C results url
    |------------------------------------------
    */
    'b2c_result' => ''


];
