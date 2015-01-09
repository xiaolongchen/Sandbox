<?php
/**
 * This file is part of the <name> project.
 *
 * (c) <yourname> <youremail>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Jca\BlogBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Sonata\NewsBundle\Entity\BasePost as BasePost;
use Gedmo\Mapping\Annotation as Gedmo;
use Symfony\Component\Config\Definition\Exception\Exception;

class Post extends BasePost
{

    /**
     * @var integer $id
     */
    protected $id;

    /**
     * Get id
     *
     * @return integer $id
     */
    public function getId()
    {
        return $this->id;
    }
    /**
     * @var string
     */
    private $locale;


    /**
     * Set locale
     *
     * @param string $locale
     * @return Post
     */
    public function setLocale($locale)
    {
        $this->locale = $locale;

        return $this;
    }

    /**
     * Get locale
     *
     * @return string 
     */
    public function getLocale()
    {
        return $this->locale;
    }

    public function setTitle($title)
    {
        $this->title = $title;
        if($this->getLocale() == 'zh') $this->setSlug($this->slugifycn($title));
        else $this->setSlug($this->slugify($title));
    }

    public function slugify($text)
    {
        $text = preg_replace('~[^\\pL\d]+~u', '-', $text);
        $text = trim($text, '-');
        if (function_exists('iconv')) {
            $text = iconv('utf-8', 'us-ascii//TRANSLIT', $text);
        }
        $text = strtolower($text);
        $text = preg_replace('~[^-\w]+~', '', $text);
        if (empty($text)) {
            return 'n-a';
        }
        return $text;
    }

    public function slugifycn($text)
    {
        $text = preg_replace('~[^\\pL\d]+~u', '-', $text);
        $text = trim($text, '-');
        if (empty($text)) {
            return 'n-a';
        }
        return $text;
    }

}
