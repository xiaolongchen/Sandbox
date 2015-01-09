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

    /**
     * @Route("/blog/{slug}")
     * @Template()
     */
    public function showAction($slug){
        $em = $this->getDoctrine()->getManager();
        $blog = $em->getRepository('JcaBlogBundle:Post')->showBlog($slug);

        $map = $this->get('ivory_google_map.map');
        $lng = 50.848249;
        $lat = 4.369661;

        if(isset($lng)){
            $marker = new \Ivory\GoogleMap\Overlays\Marker();
            $marker->setPosition($lng,$lat);
            $map->addMarker($marker);
            $map->setCenter($lng, $lat, true);
            $map->setMapOption('zoom', 14);
        }

        return array('blog' => $blog, 'map' => $map);
    }
}
