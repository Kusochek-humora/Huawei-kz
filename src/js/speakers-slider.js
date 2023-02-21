document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.swiper-slide').length;
    const slider = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        // loop: slides > 2,
        loop: true,
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 25,
        speed: 800,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: '.speakers__slider-button-next',
            prevEl: '.speakers__slider-button-prev',
        },

        breakpoints: {


            500: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1000: {
                slidesPerView: 3,
            },
            1280: {
                slidesPerView: 4,
            },

            //     499: {
            //         direction: 'horizontal',
            //         slidesPerView: 1,
            //         slidesPerGroup: 1,
            //     },
            //     0: {
            //         direction: 'vertical',
            //         slidesPerView: 2,
            //         slidesPerGroup: 2,
            //         effect: 'fade'
            //     }

        }
    });
})