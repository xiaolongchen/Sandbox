<?php

namespace Jca\BlogBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Jca\BlogBundle\Repository\BlogRepository;

class DefaultController extends Controller
{
    /**
     * @Route("/blog")
     * @Template()
     */
    public function listAction()
    {
        $em = $this->getDoctrine()->getManager();
        $list = $em->getRepository('JcaBlogBundle:Post')->listBlog();
        return array('list' => $list);
    }
}
