// Слайдер секции завершенные события
const swiperOldEvent = new Swiper('.oldEvent__cards', {        
    direction: 'horizontal',
    loop: false,  
    slidesPerGroup: 1,
    slidesPerView: 2,
    spaceBetween: 20,
    autoHeight: false,    
    navigation: {
        nextEl: '.swiper-button__next',
        prevEl: '.swiper-button__prev',
      },
    breakpoints: {
        1200: {
            slidesPerGroup: 1,
            slidesPerView: 2,
        },
        380: {
            slidesPerGroup: 1,
            slidesPerView: 1,
        },
    }
  });
