 $(document).ready(function(){
            $('.faq li .question').click(function(){
                $(this).find('.plus-minus-toggle').toggleClass('collapsed');
                $(this).parent().toggleClass('active');
            });
        });
  
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})