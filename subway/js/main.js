$(function(){
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        autoplay:{
            delay:3000,
            disableOnInteraction:false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable:true,
        },
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
      });
      $('.m_btn').click(function(){
        $('.side_wrap').addClass('on');
        $('body').addClass('full');
        $('.cover').fadeIn();
      });

      $('.close').click(function(){
        $('.side_wrap').removeClass('on');
        $('body').removeClass('full');
        $('.cover').fadeOut();
        $('.dp2').slideUp();
        $('.gnb>ul>li').removeClass('atv');
        });

      $('.gnb>ul>li').click(function(){
        $(this).toggleClass('atv').siblings().removeClass('atv');
        $(this).find('.dp2').slideToggle();
        $(this).siblings().find('.dp2').slideUp();
    });


})