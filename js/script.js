var bannerS = new Swiper(".bannerS", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {delay: 5000}
});


var main_slider = new Swiper(".main_slider", {
  slidesPerView: 2,
  spaceBetween: 8,
  slidesPerGroup: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    481: {
      slidesPerView: 3,  //브라우저가 481보다 클 때
      spaceBetween: 12,
      slidesPerGroup: 1,
    },
    991: {
      slidesPerView: 4,  //브라우저가 991보다 클 때
      spaceBetween: 16,
      slidesPerGroup: 2,
    },
  },
});

var b_pro_S = new Swiper(".b_pro_S", {
  slidesPerView: 3,
  spaceBetween: 8,
  slidesPerGroup: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    481: {
      slidesPerView: 4,  //브라우저가 481보다 클 때
      spaceBetween: 12,
      slidesPerGroup: 1,
    },
    769: {
      slidesPerView: 5,  //브라우저가 481보다 클 때
      spaceBetween: 12,
      slidesPerGroup: 1,
    },
    991: {
      slidesPerView: 6,  //브라우저가 991보다 클 때
      spaceBetween: 16,
      slidesPerGroup: 2,
    },
  },
});

var story_S = new Swiper(".story_S", {
  slidesPerView: 3,
  spaceBetween: 16,
  slidesPerGroup: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  /* breakpoints: {
    481: {
      slidesPerView: 4,  //브라우저가 481보다 클 때
      spaceBetween: 12,
      slidesPerGroup: 1,
    },
    769: {
      slidesPerView: 5,  //브라우저가 481보다 클 때
      spaceBetween: 12,
      slidesPerGroup: 1,
    },
    991: {
      slidesPerView: 6,  //브라우저가 991보다 클 때
      spaceBetween: 16,
      slidesPerGroup: 2,
    },
  }, */
});

var ps_S = new Swiper(".ps_S", {
  spaceBetween: 30,
  hashNavigation: {
    watchState: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".ps_S_next",
    prevEl: ".ps_S_prev",
  },
});

