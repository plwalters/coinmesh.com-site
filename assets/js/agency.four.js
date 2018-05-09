jQuery(document).ready( function( $ ) {
    "use strict";

    jQuery(window).trigger('resize').trigger('scroll');
    init_navbar();
    init_lightbox();
    init_formfocus();
    init_popupframe();
    init_workfilter();
    init_bscarousel();

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
    distance = $('.topbar-alt').outerHeight();
    
    $(window).scroll(function(){
        if( $(window).scrollTop() > distance){
            $(site_nav).addClass('sticky-bar');
        }else{
            $(site_nav).removeClass('sticky-bar');
        }
    });
    if( $(window).scrollTop() > distance){
        $(site_nav).addClass('sticky-bar');
    }

    /* scrolltop */
    $('.nav-menu li a, .menus').on('click', function(event) {
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
** Contact form
* Pretty focus input in contact form
*/
function init_formfocus(){
    $('.contact-form .form-control').on( 'focus', function(){
        $('label[for="' + $(this).attr('id') + '"]').addClass('label-focus');
        $(this).on( 'keyup', function(){
            var length =  $(this).val().length;
            if( length === 0 ) {
                $('label[for="' + $(this).attr('id') + '"]').removeClass('label-focus');
            }else{
                $('label[for="' + $(this).attr('id') + '"]').addClass('label-focus');
            }
        })
        $(this).on( 'focusout', function(){
            if( $(this).val().length === 0 ) {
                $('label[for="' + $(this).attr('id') + '"]').removeClass('label-focus');
            }else{
                $('label[for="' + $(this).attr('id') + '"]').addClass('label-focus');
            }
        })
    })
}

/*
** Popup Video
* Video popup lightbox
*/
function init_popupframe(){
  $('.popup-video, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });
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
** Bootstrap carousel
* Slider with bootstrap carousel
*/
function init_bscarousel(){
  $('.carousel').carousel({
    interval: 6500,
    pause: 'hover',
  })
}