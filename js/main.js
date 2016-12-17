var $burguerButton = document.getElementById('burguer-button');
var $menu = document.getElementById('menu');
var $burguerIcon = document.getElementById('burguer-icon');

$burguerButton.addEventListener('touchstart', toggleMenu);
function toggleMenu(){
    $menu.classList.toggle('active');
    if ($burguerIcon.className == 'fa fa-bars') {
        $burguerIcon.className = 'fa fa-close';
    }else {
        $burguerIcon.className = 'fa fa-bars';
    }
}
function showMenu(){
    $menu.classList.add('active');
    $burguerIcon.className = 'fa fa-close';
}
function hideMenu(){
    $menu.classList.remove('active');
    $burguerIcon.className = 'fa fa-bars'
}

//Gestos touch
var $body = document.body;

var gestosTouch = new Hammer($body);
gestosTouch.on('swipeleft', showMenu);
gestosTouch.on('swiperight', hideMenu);

// Slider de la página perfíl

$(document).ready(function() {
    var banner = {
        padre: $('#slide-container'),
        numeroSlides: $('#slide-container').children('.slide').length,
        posicion: 1
    }
    banner.padre.children('.slide').first().css({
        'left': 0
    });
    var altoBanner = function(){
        var alto = banner.padre.children('.slide').outerHeight();

        banner.padre.css({
            'height': alto + 'px'
        });
    }

    altoBanner();
    $(window).resize(function(){
        altoBanner();
    });
    //Boton siguiente
    $('#next').on('click', function(e){
        e.preventDefault();
        if (banner.posicion < banner.numeroSlides) {
            banner.padre.children().not('.active').css({
                'left': '100%'
            });
            $('#slide-container .active').removeClass('active').next().addClass('active').animate({
                'left': '0'
            });
            $('#slide-container .active').prev().animate({
                'left': '-100%'
            });
            banner.padre.children().not('.active').css({
                'left': '100%'
            });
            $('#nav-circle').children('.active').removeClass('active').next().addClass('active');
            banner.posicion = banner.posicion + 1;
        } else {
            $('#slide-container .active').animate({
                'left': '-100%'
            });
            $('#banner .active').removeClass('active');
            banner.padre.children('.slide').first().addClass('active').animate({
                'left': 0
            });
            $('#nav-circle').children('.active').removeClass('active');
            $('#nav-circle').children('span').first().addClass('active');
            banner.posicion = 1;
        }
    });

    //Boton anterior
    $('#prev').on('click', function(e){
        e.preventDefault();
        if (banner.posicion > 1) {
            banner.padre.children().not('.active').css({
                'left': '-100%'
            });
            $('#slide-container .active'). animate({
                'left': '100%'
            });
            $('#slide-container .active').removeClass('active').prev().addClass('active').animate({
                'left': 0
            });
            $('#nav-circle').children('.active').removeClass('active').prev().addClass('active');
            banner.posicion = banner.posicion - 1;
        } else {
            banner.padre.children().not('.active').css({
                'left': '-100%'
            });
            $('#slide-container .active').animate({
                'left': '100%'
            });
            $('#slide-container .active').removeClass('active');
            banner.padre.children().last().addClass('active').animate({
                'left': 0
            });
            $('#nav-circle').children('.active').removeClass('active');
            $('#nav-circle').children('span').last().addClass('active');
            banner.posicion = banner.numeroSlides;
        }
    });

    $('#slide-container').children('.slide').each(function(){
        $('#nav-circle').append('<span>');
    });
    $('#nav-circle').children('span').first().addClass('active');

    $('.fancybox').fancybox();

});
