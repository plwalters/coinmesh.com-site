jQuery(document).ready( function( $ ) {
    "use strict";

    jQuery(window).trigger('resize').trigger('scroll');
    init_navbar();
    init_lightbox();
    init_workfilter();
    init_clientcarousel();
} );

/* 
** Navbar
* Make sticky navbar when scroll
*/
function init_navbar(){
    var site_nav = $('#masthead');
    var navigation_height = $(site_nav).outerHeight();
    $('.site-header-affix-wrapper').css('height', navigation_height);
    var distance;
    distance = 0;
    
    $(window).scroll(function(){
        if( $(window).scrollTop() > distance){
            $(site_nav).addClass('sticky-bar').addClass('header-light');
        }else{
            $(site_nav).removeClass('sticky-bar').removeClass('header-light');
        }
    });
    if( $(window).scrollTop() > distance){
        $(site_nav).addClass('sticky-bar').addClass('header-light');
    }

    /* scrolltop */
    $('.nav-menu li a, .link-to-top, .site-title a').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    /* active state */
    $('.nav-menu li').on('click', function(){
        $('.nav-menu li.current-menu-item').removeClass('current-menu-item');
        $(this).addClass('current-menu-item');
    })
}

/* 
** Lightbox
* Image gallery with lightbox
*/
function init_lightbox(){
    $('.image-lightbox').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        zoom: {
            enabled: true, // By default it's false, so don't forget to enable it
            duration: 100, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function

            opener: function(openerElement) {
              return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    })
}

/*
** Isotope
* Filtering image work with isotope
*/
function init_workfilter(){
    var isotope_mode = 'fitRows';
    var $container = $('.work-grid');
    $container.imagesLoaded(function(){
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'easeOutBounce',
                queue: false
            }
        });
    });

    $('.work-filter li').on('click', function(){
        $('.work-filter li.active').removeClass('active');
        $(this).addClass('active');

        var selector = $(this).attr('data-filter');
        $container.imagesLoaded(function(){
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'easeOutBounce',
                    queue: false
                }
            });
        });

        return false;
    });
}

/*
** Owl carousel
* Client with owl carousel
*/
function init_clientcarousel(){
  var $owl = $(".slider-carousel");
  $owl.imagesLoaded( function(){
    $owl.owlCarousel({
        autoPlay : 1500,
        slideSpeed : 400,
        stopOnHover : true,
        items : 5,
        itemsDesktop : [1199,5],
        itemsDesktopSmall : [979,4],
        itemsTablet : [600,3],
        itemsMobile : [479,2],
        navigation : true,
        navigationText : [ '<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    });
  });
}