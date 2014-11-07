<?php

/**
 * @author Xiaolong CHEN <webmaster@xiaolongchen.com>
 * @file: UserAdmin
 */

namespace Jca\UserBundle\Admin;

use Sonata\AdminBundle\Admin\Admin as Admin;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Show\ShowMapper;
use Sonata\AdminBundle\Datagrid\DatagridMapper;

class UserAdmin extends Admin{

    protected function configureListFields(ListMapper $listMapper) {
        $listMapper
            ->add('id')
            ->addIdentifier('username')
            ->add('email')
            ->add('enabled')
            ->add('lastLogin')
            ->add('locked')
            ->add('expired')
            ->add('_action', 'actions', array(
                'actions' => array(
                    'show' => array(),
                    'edit' => array(),
                    'delete' =>array(),
                )));
    }

    protected function configureFormFields(FormMapper $form) {

        $form->with('Général', array('class' => 'col-md-8'));
        $form->add('username');
        $form->add('email');
        //$form->add('plainPassword', '', array('required' => false));
        //$form->add('plainPassword', 'sizannia_generate_password_type', array('required' => false));
        $form->end();
        $form->with('Published', array('class' => 'col-md-4'));
        $form->add('enabled', "checkbox", array('required' => false));
        $form->add('locked', "checkbox", array('required' => false));
        $form->add('expired', "checkbox", array('required' => false));
/*        $form->add('enabled', "sizannia_checkbox_type",array('required' => false));
        $form->add('locked', "sizannia_checkbox_type",array('required' => false));
        $form->add('expired', "sizannia_checkbox_type",array('required' => false));*/
        $form->end();
        $form->with('Roles', array('class' => 'col-md-12'));
        /*$form->add('roles', 'sizannia_security_roles_type', array(
            'expanded' => true,
            'multiple' => true,
            'required' => false
        ))*/
        ;
    }

    protected function configureShowFields(ShowMapper $filter) {
        $filter
            ->add('id')
            ->add('username')
            ->add('email')
            ->add('enabled')
            ->add('lastLogin')
            ->add('locked')
            ->add('rolesAsString', 'string',array('label' => 'Role'))
            ->add('expired')
            ->add('expiredAt')
            ->add('credentialsExpired')
            ->add('credentialsExpireAt')
        ;
    }

    protected function configureDatagridFilters(DatagridMapper $filter) {
        $filter
            ->add('enabled')
            ->add('locked')
            ->add('expired')
        ;
    }
}
