$(document).ready(function (){
    $('.menu').mouseenter(function () {
        $('.menu__list').show();
    });

    $('.menu').mouseleave(function () {
        $('.menu__list').hide();
    })
});