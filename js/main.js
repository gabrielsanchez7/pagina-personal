// $(document).ready(function() {
//     var padre = $('#foto-personal');
//
//     var altoFoto = function(){
//         var alto = padre.children('img').outerHeight();
//         padre.css({
//             'height': alto + 'px'
//         });
//         // console.log(alto);
//     }
//     altoFoto();
//     $(window).resize(function(){
//         altoFoto();
//     });
//
// });
var $burguerButton = document.getElementById('burguer-button');
var $menu = document.getElementById('menu');

$burguerButton.addEventListener('touchstart', toggleMenu);
function toggleMenu(){
    $menu.classList.toggle('active');
    // document.getElementById('burguer-button').innerHTML = '&#xf00d;';
}
function showMenu(){
    $menu.classList.add('active');
    // document.getElementById('burguer-button').innerHTML = '&#xf00d;';
}
function hideMenu(){
    $menu.classList.remove('active');
    // document.getElementById('burguer-button').innerHTML = '&#xf00d;';
}

//Gestos touch
var $body = document.body;

var gestosTouch = new Hammer($body);
gestosTouch.on('swipeleft', showMenu);
gestosTouch.on('swiperight', hideMenu);
