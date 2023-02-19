'use strict'

document.addEventListener('DOMContentLoaded', function () {

    const historyBlock = document.querySelector('.history'),
        btnLoadMore = document.querySelectorAll('.btn-loadmore'),
        historySlide = document.querySelectorAll('.history__swiper-slide'),
        historyWrapper = document.querySelector('.history__swiper-wrapper');


    function removeProperties(item, index) {
        item.previousElementSibling.style.removeProperty("height");
        // historyBlock.style.height = (item.previousElementSibling.scrollHeight) + "px";
        historySlide[index].style.removeProperty("height");
        historyWrapper.style.removeProperty("height");
        item.classList.remove('active');
        item.previousElementSibling.classList.remove('active');
        item.textContent = "Показать больше";
    };
    historyBlock.addEventListener('click', function (e) {
        btnLoadMore.forEach((item, index) => {

            if (e.target === item && item.classList.contains('active') === false) {
                item.previousElementSibling.classList.add('active')
                item.previousElementSibling.style.height = (item.previousElementSibling.scrollHeight) + "px";
                // historyBlock.style.height = (item.previousElementSibling.scrollHeight) + "px";
                historySlide[index].style.height = (item.previousElementSibling.scrollHeight + 300) + "px";
                historyWrapper.style.height = (item.previousElementSibling.scrollHeight + 300) + "px";
                item.classList.add('active');
                item.textContent = "Скрыть";
            } else if (e.target === item && item.classList.contains('active')) {
                removeProperties(item, index);
            }
        })
    });

    // function loadMore(e) {
    //     if (e.target.classList)
    // }
    let empty = "",
        year = "год";
    const arrIndex = document.querySelectorAll('.swiper-slide');
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'vertical',
        allowTouchMove: false,
        // slidesPerView: 1,
        // slidesPerGroup: 1,
        // spaceBetween: 20,
        mousewheel: false,
        slidesPerView: 1,
        // centeredSlides: true,
        pagination: {
            el: '.swiper-pagination.horizontal',
            clickable: 'true',
            // type: 'bullets',
            renderBullet: function (index, className, year) {
                let paigeWidth = document.documentElement.scrollWidth;
                if (paigeWidth < 800) {
                    return `
                    <button type="button" class="${className} history__swiper-dot-btn">
                       ${2015 - index} 
                    </button>
                    `;
                } else if (paigeWidth > 800) {
                    return `
                    <button type="button" class="${className} history__swiper-dot-btn">
                       ${2015 - index} год
                    </button>
                    `;
                }

            },
        },

        //'<li class="' + className + '">' + (index + 1) + "</li>";
        breakpoints: {
            1100: {

            },
            800: {
                init: true,
                direction: 'vertical',
                pagination: {
                    el: '.swiper-pagination.vertical',

                }
            },

            499: {
                direction: 'horizontal',

            },
            0: {
                direction: 'horizontal',


            }

        }
        // });
    });


    swiper.on('slideChange', function () {

        btnLoadMore.forEach((item, index) => {
            if (item.classList.contains('active'))
                removeProperties(item, index);
        })

        // if (paigeWidth < 800) {
        //     swiper.slideNext();
        // }
    });
})


// const btnLoadMore = document.querySelectorAll('.btn-loadmore'),
// wrapperBlock = document.querySelector(".history__wrapper"),
// mainBlock = document.querySelector('.history'),
// slide = document.querySelectorAll('.history__slide'),
// pagination = document.querySelector('.history__pagination');
// wrapperBlock.addEventListener('click', function (e) {
// btnLoadMore.forEach((item, index) => {
//     if (e.target === item && e.target.classList.contains('active') === false) {
//         item.textContent = "Скрыть";
//         item.classList.add('active');
//         item.previousElementSibling.classList.add('active');
//         item.previousElementSibling.style.maxHeight = item.previousElementSibling.scrollHeight + "px";
//         wrapperBlock.style.height = "auto";
//         item.parentNode.style.height = "auto";
//         wrapperBlock.style.maxHeight = (item.previousElementSibling.scrollHeight + 170) + "px";
//         item.parentNode.style.maxHeight = (item.previousElementSibling.scrollHeight + 170) + "px";
//     } else if (e.target === item && e.target.classList.contains('active')) {
//         item.textContent = "Показать больше";
//         item.classList.remove('active');
//         item.previousElementSibling.classList.remove('active');
//         item.previousElementSibling.removeAttribute('style');
//         wrapperBlock.removeAttribute('style');
//         item.parentNode.removeAttribute('style');
//     }
// })
// })
// pagination.addEventListener('click', function (e) {
// const paginationBtn = pagination.querySelectorAll('.history__pagination-button');
// let activeBtn = pagination.querySelector('.history__pagination-button.active');
// paginationBtn.forEach((item, index) => {
//     if (e.target === item) {
//         slide[index].removeAttribute('style');
//         wrapperBlock.removeAttribute('style');
//         slide[index].querySelector('.history__text').removeAttribute('style');
//         activeBtn.classList.remove('active');
//         item.classList.add('active');
//         slide[index].querySelector('.history__text').classList.add('active');
//         wrapperBlock.scrollBy({
//             top: slide[index].getBoundingClientRect().top + scrollX - 200,
//             behavior: "smooth",
//             block: "start"
//         });
//     }
// })
// })