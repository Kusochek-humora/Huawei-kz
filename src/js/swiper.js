document.addEventListener('DOMContentLoaded', function () {
   let listArray = ["slide1","slide2","slide3"];
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        slidesPerGroup: 1,
        // spaceBetween: 20,

        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: '.promo__slider-btn-right',
            prevEl: '.promo__slider-btn-left',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: 'true',
            type: 'bullets',
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + '<em>' + listArray[index] + '</em>' + '<i></i>' + '<b></b>' + '</span>';
            },
        },
        // breakpoints: {
        //     1100: {
        //         slidesPerView: 3,
        //     },
        //     800: {
        //         slidesPerView: 2,
        //     },

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

        // }
    });
})