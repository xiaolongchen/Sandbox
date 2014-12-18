jQuery(window).ready(function () {
    _topNav();
});

function _topNav() {
    var addActiveClass = false;

    jQuery("#topMain li.dropdown > a, #topMain li.dropdown-submenu > a").bind("click", function (e) {
        e.preventDefault();

        if ($(window).width() > 979) {
            return;
        }

        addActiveClass = jQuery(this).parent().hasClass("resp-active");
        jQuery("#topMain").find(".resp-active").removeClass("resp-active");

        if (!addActiveClass) {
            jQuery(this).parents("li").addClass("resp-active");
        }
        return;
    });

    jQuery(document).bind("click", ".mega-menu .dropdown-menu", function (e) {
        e.stopPropagation();
    });


    jQuery(window).scroll(function () {
        topMain();
    });
    topMain();

    window.topNavSmall = false;
    function topMain() {
        var _scrollTop = jQuery(document).scrollTop();

        if (!$('div.container.home').length) {
            $('div#wrapper').addClass('marginWrapper');
        }

        if (_scrollTop > 25 || ($('header#topNav div.nav-main-collapse.topFix').length == 1 && !$('div.container.home').length)) {
            jQuery('header#topNav').addClass('shrink');
            jQuery('header#topNav nav ul.nav-main li a').addClass('colorMenu');
            jQuery('header#topNav nav ul.nav-main li a').removeClass('ombrage');
            jQuery('header#topNav a.logo').css("color", "#2E363F");
            window.topNavSmall = true;
        }
        else if (window.topNavSmall === true && _scrollTop < 10) {
            jQuery('header#topNav div.nav-main-collapse').removeClass('topFix');
            jQuery('header#topNav').removeClass('shrink');
            jQuery('header#topNav nav ul.nav-main li a').addClass('ombrage');
            jQuery('header#topNav nav ul.nav-main li a').removeClass('colorMenu');
            jQuery('header#topNav a.logo').css("color", "white");
            window.topNavSmall = false;
        }

        if (jQuery('#topHead').length > 0) {
            if (_scrollTop > 0) {
                jQuery('#topHead').addClass('fixed');
            } else {
                jQuery('#topHead').removeClass('fixed');
            }
        }

    }
}
