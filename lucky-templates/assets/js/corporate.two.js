jQuery(document).ready( function( $ ) {
    "use strict";

    jQuery(window).trigger('resize').trigger('scroll');
    init_navbar();
    init_lightbox();
    init_workfilter();
    init_clientcarousel();
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
            $(site_nav).addClass('sticky-bar').addClass('header-light');
        }else{
            $(site_nav).removeClass('sticky-bar').removeClass('header-light');
        }
    });
    if( $(window).scrollTop() > distance){
        $(site_nav).addClass('sticky-bar').addClass('header-light');
    }

    /* scrolltop */
    $('.nav-menu li a, .menus, .site-title a').on('click', function(event) {
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
	            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
	            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
	            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
	            {
	              featureType: 'administrative.locality',
	              elementType: 'labels.text.fill',
	              stylers: [{color: '#d59563'}]
	            },
	            {
	              featureType: 'poi',
	              elementType: 'labels.text.fill',
	              stylers: [{color: '#d59563'}]
	            },
	            {
	              featureType: 'poi.park',
	              elementType: 'geometry',
	              stylers: [{color: '#263c3f'}]
	            },
	            {
	              featureType: 'poi.park',
	              elementType: 'labels.text.fill',
	              stylers: [{color: '#6b9a76'}]
	            },
	            {
	              featureType: 'road',
	              elementType: 'geometry',
	              stylers: [{color: '#38414e'}]
	            },
	            {
	              featureType: 'road',
	              elementType: 'geometry.stroke',
	              stylers: [{color: '#212a37'}]
	            },
	            {
	              featureType: 'road',
	              elementType: 'labels.text.fill',
	              stylers: [{color: '#9ca5b3'}]
	            },
	            {
	              featureType: 'road.highway',
	              elementType: 'geometry',
	              stylers: [{color: '#746855'}]
	            },
	            {
	              featureType: 'road.highway',
	              elementType: 'geometry.stroke',
	              stylers: [{color: '#1f2835'}]
	            },
	            {
	              featureType: 'road.highway',
	              elementType: 'labels.text.fill',
	              stylers: [{color: '#f3d19c'}]
	            },
	            {
	              featureType: 'transit',
	              elementType: 'geometry',
	              stylers: [{color: '#2f3948'}]
	            },
	            {
	              featureType: 'transit.station',
	              elementType: 'labels.text.fill',
	              stylers: [{color: '#d59563'}]
	            },
	            {
	              featureType: 'water',
	              elementType: 'geometry',
	              stylers: [{color: '#17263c'}]
	            },
	            {
	              featureType: 'water',
	              elementType: 'labels.text.fill',
	              stylers: [{color: '#515c6d'}]
	            },
	            {
	              featureType: 'water',
	              elementType: 'labels.text.stroke',
	              stylers: [{color: '#17263c'}]
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