jQuery(document).ready( function( $ ) {
    "use strict";

    jQuery(window).trigger('resize').trigger('scroll');
    init_navbar();
    init_galleryslider();
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
    distance = 0;
    
    $(window).scroll(function(){
        if( $(window).scrollTop() > distance){
            $(site_nav).addClass('sticky-bar').addClass('header-dark');
        }else{
            $(site_nav).removeClass('sticky-bar').removeClass('header-dark');
        }
    });
    if( $(window).scrollTop() > distance){
        $(site_nav).addClass('sticky-bar').addClass('header-dark');
    }

    /* scrolltop */
    $('.nav-menu li a, .link-to-top, .site-title a, .link-scroll').on('click', function(event) {
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
** Owl carousel
* Gallery slider with owl carousel
*/
function init_galleryslider(){
    var $owl = $(".slider-thumbnail");
    $owl.imagesLoaded( function(){
        $owl.owlCarousel({
            autoPlay : 3000,
            slideSpeed : 600,
            stopOnHover : true,
            items : 4,
            itemsDesktop : [1199,4],
            itemsDesktopSmall : [979,3],
            itemsTablet : [600,2],
            itemsMobile : [479,1],
            navigation : true,
            navigationText : [ '<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        });
    });
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
                position: google.maps.ControlPosition.RIGHT_CENTER
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