<?php

namespace Jca\UserBundle;

use Symfony\Component\HttpKernel\Bundle\Bundle;

class JcaUserBundle extends Bundle
{
    public function getParent() {
        return 'FOSUserBundle';
    }
}
