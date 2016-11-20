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
