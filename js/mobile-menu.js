$(document).ready(function(){

   const menuButton =  $('.menu-burger');
   const menu = $('.main-menu');

   menuButton.click(event=>{
        menuButton.children('.menu-burger__view').toggleClass('menu-burger__view--open');
        if ( menuButton.children('.menu-burger__view').hasClass('menu-burger__view--open')){
            menu.slideDown();
        }
        else{
            menu.slideUp();
        }
   })

})