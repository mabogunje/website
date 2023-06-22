<?php
return [
    '@class' => 'Grav\\Common\\File\\CompiledYamlFile',
    'filename' => '/Users/damola/Sites/www/user/config/plugins/email.yaml',
    'modified' => 1627860770,
    'size' => 242,
    'data' => [
        'enabled' => true,
        'from' => 'joe@test.com',
        'from_name' => 'Joe',
        'to' => 'joe@test.com',
        'to_name' => 'Joe',
        'mailer' => [
            'engine' => 'mail',
            'smtp' => [
                'server' => 'localhost',
                'port' => 25,
                'encryption' => 'none'
            ],
            'sendmail' => [
                'bin' => '/usr/sbin/sendmail'
            ]
        ],
        'content_type' => 'text/html',
        'debug' => false
    ]
];
