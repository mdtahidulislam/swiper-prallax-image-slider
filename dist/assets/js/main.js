;(function ($) {
	"use strict"
	jQuery(function () {
		var parallaxImageSlider = new Swiper(".image-slider", {
			// mousewheel: false,
			// allowTouchMove: false,
			// longSwipesRatio: 0.01,
			// followFinger: false,
			// grabCursor: false,
			// watchSlidesProgress: true,
			// rebuildOnUpdate: true,
			speed: 1000,
			loop: true,
			slidesPerView: 1,
			parallax: true,
			lazy: {
				loadPrevNext: true
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev"
			}
		})
	})
})(jQuery)
