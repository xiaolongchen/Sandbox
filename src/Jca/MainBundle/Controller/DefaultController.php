<?php

namespace Jca\MainBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

class DefaultController extends Controller
{
    /**
     * @Route("/")
     * @Template()
     */
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();
        //$list = $em->getRepository('JcaBlogBundle:Post')->listBlog();
        return $this->render('JcaMainBundle:Default:index.html.twig');
        //return array('list' => $list);
    }
}
