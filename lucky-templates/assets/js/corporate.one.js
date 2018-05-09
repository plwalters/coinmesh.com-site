jQuery(document).ready( function( $ ) {
    "use strict";

    jQuery(window).trigger('resize').trigger('scroll');
    init_navbar();
    init_lightbox();
    init_workfilter();
    init_formfocus();
    init_clientcarousel();
    init_bscarousel();
    init_map();

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
    distance = $('.topbar').outerHeight();
    
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
    $('.nav-menu li a, .site-title a').on('click', function(event) {
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

            // The "opener" function should return the element from which popup will be zoomed in
            // and to which popup will be scaled down
            // By defailt it looks for an image tag:
            opener: function(openerElement) {
              // openerElement is the element on which popup was initialized, in this case its <a> tag
              // you don't need to add "opener" option if this code matches your needs, it's defailt one.
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

/*
** Map
* Beautiful map with gmap3
*/
function init_map(){
    var map = $('.map');
    var lat = map.attr('data-lat');
    var lng = map.attr('data-lng');
    if( lat == '' && lat == null ){ lat = -7.866315; }
    if( lng == '' && lat == null ){ lng = 110.389574; }
    var position = {lat: +lat, lng: +lng};

    $('.map')
        .gmap3({
            center: position,
            zoom: 12,
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.SMALL
            },
            zoomControlOptions: {
                position: google.maps.ControlPosition.RIGHT_TOP
            },
            scrollwheel: false,
            mapTypeControl: false,
            streetViewControl: false,
            draggable: true,
            styles: [
              {
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#f5f5f5"
                  }
                ]
              },
              {
                "elementType": "labels.icon",
                "stylers": [
                  {
                    "visibility": "off"
                  }
                ]
              },
              {
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#616161"
                  }
                ]
              },
              {
                "elementType": "labels.text.stroke",
                "stylers": [
                  {
                    "color": "#f5f5f5"
                  }
                ]
              },
              {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#bdbdbd"
                  }
                ]
              },
              {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#eeeeee"
                  }
                ]
              },
              {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#757575"
                  }
                ]
              },
              {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#e5e5e5"
                  }
                ]
              },
              {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#9e9e9e"
                  }
                ]
              },
              {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#ffffff"
                  }
                ]
              },
              {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#757575"
                  }
                ]
              },
              {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#dadada"
                  }
                ]
              },
              {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#616161"
                  }
                ]
              },
              {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#9e9e9e"
                  }
                ]
              },
              {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#e5e5e5"
                  }
                ]
              },
              {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#eeeeee"
                  }
                ]
              },
              {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#c9c9c9"
                  }
                ]
              },
              {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#9e9e9e"
                  }
                ]
              }
            ]
        })
        .marker({
            position: position,
            options: {
                icon: "assets/img/map-marker.png"
            }
        })
}