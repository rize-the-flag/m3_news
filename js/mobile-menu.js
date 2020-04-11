$(document).ready(function(){

   const menuButton =  $('.menu-burger');
   const menu = $('.main-menu');

   menuButton.click(event=>{
        menuButton.children('.menu-burger__view').toggleClass('menu-burger__view--open');
        if ( menuButton.children('.menu-burger__view').hasClass('menu-burger__view--open')){
            menu.slideDown(300, ()=>{
                menu.addClass('main-menu--open');
                menu.css({'display': ''})
            });
        }
        else{
             menu.slideUp(300, ()=>{
                 menu.removeClass('main-menu--open');
                 menu.css({'display': ''})
             });
        }
    })

 /*   let mediaQueryMin630px = window.matchMedia("(max-width: 631px)");
    mediaQueryMin630px.addEventListener('change',()=>{
        if (mediaQueryMin630px.matches){
            menu.css('display', 'flex');
        }
    })

        let mediaQueryMax630px = window.matchMedia("(max-width: 630px)");
        mediaQueryMax630px.addEventListener('change',()=>{
            if (mediaQueryMax630px.matches){
                menu.css('display', 'none');
            }
        })*/

})