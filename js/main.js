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
    if ($burguerButton.className == 'burguer-button fa fa-bars') {
        $burguerButton.className = 'burguer-button fa fa-close';
    }else {
        $burguerButton.className = 'burguer-button fa fa-bars';
    }
}
function showMenu(){
    $menu.classList.add('active');
}
function hideMenu(){
    $menu.classList.remove('active');
}

//Gestos touch
var $body = document.body;

var gestosTouch = new Hammer($body);
gestosTouch.on('swipeleft', showMenu);
gestosTouch.on('swiperight', hideMenu);
