function swiperSlider(){var e=document.querySelectorAll('[data-slider="team-slider"]');e&&e.forEach((function(e){var s=e.querySelector(".swiper-button-prev"),i=e.querySelector(".swiper-button-next");new Swiper(e.querySelector(".swiper"),{speed:1500,slidesPerView:1,spaceBetween:0,
//!! кнопки навігації
navigation:{nextEl:i,prevEl:s},on:{transitionStart:function(){var s=this.previousIndex,i=e.getElementsByClassName("swiper-slide")[s];i&&setTimeout((function(){i.classList.remove("is-play")}),1e3)},transitionEnd:function(){var s=this.activeIndex;e.getElementsByClassName("swiper-slide")[s].classList.add("is-play")}},breakpoints:{320:{slidesPerView:2,spaceBetween:16,loop:!0},1024:{slidesPerView:2,spaceBetween:40,loop:!0},1280:{slidesPerView:2,spaceBetween:40,loop:!0}}})}))}window.addEventListener("load",swiperSlider,!1);
//# sourceMappingURL=hotel.056dfe22.js.map
