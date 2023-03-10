'use strict'
document.addEventListener('DOMContentLoaded', function () {
    //header
    const header = document.querySelector('.header'),
        html = document.querySelector('html'),
        body = document.querySelector('body'),
        searchBtn = document.querySelector('.header__search-btn'),
        searchBox = document.querySelector('.search'),
        headerMenu = document.querySelector('.menu'),
        searchBtnClose = document.querySelector('.search__close'),
        langBox = document.querySelector('.lang'),
        langForm = langBox.querySelector('.lang__form '),
        langRadioInput = langBox.querySelectorAll('.lang__form-input'),
        langBoxBtn = langBox.querySelector('.lang__button'),
        langDropdown = langBox.querySelector('.lang__dropdown'),
        menu = document.querySelector('.menu'),
        overlay = document.querySelector('.overlay'),
        burgerBtn = document.querySelector('.burger-button'),
        footerBox = document.querySelector('.footer-medium');

    // Initial state
    let scrollPos = 0;
    // adding scroll event
    function scrollConditional() {
        let paigeWidth = document.documentElement.scrollWidth;

        if ((document.body.getBoundingClientRect()).top < -200) {

            if ((document.body.getBoundingClientRect()).top > scrollPos) {

                header.classList.remove('inactive');


            } else {
                header.classList.add('inactive');
            }

        }
        scrollPos = (document.body.getBoundingClientRect()).top;
    }



    window.addEventListener('scroll', scrollConditional);



    let bodyScrollTop = null;
    let locked = false;

    // Заблокировать прокрутку страницы
    function lockScroll() {
        if (!locked) {
            bodyScrollTop = (typeof window.pageYOffset !== 'undefined') ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
            body.classList.add('active');
            body.style.top = `-${bodyScrollTop}px`;

            locked = true;
        };
    }

    // Включить прокрутку страницы
    function unlockScroll() {
        if (locked) {
            body.classList.remove('active');
            body.style.top = null;
            menu.style.top = null;
            window.scrollTo(0, bodyScrollTop);
            locked = false;
        }
    }
    burgerBtn.addEventListener('click', function (e) {

        if (e.target.classList.contains('active')) {

            // window.addEventListener('scroll',scrollRemoveHeader);
            // unlockScroll();

            e.target.classList.remove('active');
            menu.classList.remove('active');
            body.classList.remove('mobile-menu-open');
            html.classList.remove('active');
            header.classList.remove('inactive');

        } else {
            // lockScroll();
            menu.classList.add('active');
            e.target.classList.add('active');
            body.classList.add('mobile-menu-open');
            html.classList.add('active');

            // header.classList.add('active');
        }
    });



    function menuMobile(e) {
        const menuBtns = menu.querySelectorAll('.menu__item');
        menuBtns.forEach((item, index) => {
            let dropdownContent = item.lastElementChild,
                dropdownSecondaryBtns = dropdownContent.querySelectorAll('.menu__dropdown-submenu-button');
            dropdownSecondaryBtns.forEach((dropdownSecondaryBtn, index) => {
                dropdownSecondaryBtn.removeAttribute('disabled')

                if (e.target === dropdownSecondaryBtn && dropdownSecondaryBtn.classList.contains('open') === false) {
                    dropdownSecondaryBtn.classList.add('open');
                    dropdownSecondaryBtn.nextElementSibling.style.maxHeight = dropdownSecondaryBtn.nextElementSibling.scrollHeight + "px";
                    dropdownContent.style.maxHeight = (item.lastElementChild.scrollHeight + dropdownSecondaryBtn.nextElementSibling.scrollHeight) + "px";
                } else if (e.target === dropdownSecondaryBtn && dropdownSecondaryBtn.classList.contains('open')) {
                    dropdownSecondaryBtn.classList.remove('open');
                    dropdownSecondaryBtn.nextElementSibling.removeAttribute('style');
                    // dropdownContent.style.maxHeight =  0;
                }
            })
            if (e.target === item && item.classList.contains('open') === false) {
                item.classList.add('open');
                dropdownContent.style.maxHeight = item.lastElementChild.scrollHeight + "px";

            } else if (e.target === menuBtns[index]) {
                item.classList.remove('open');
                item.lastElementChild.removeAttribute('style');
            }
        })
    }

    function over(e) {

        const menuItem = menu.querySelectorAll('.menu__item'),
            menuClose = menu.querySelectorAll('.menu__dropdown-close');

        menuItem.forEach((item, index) => {
            // item.lastElementChild.classList.remove('active');
            if (e.target === item) {
                menuItem.forEach(item => {
                    item.lastElementChild.classList.remove('active');
                })

                e.target.lastElementChild.classList.add('active');

                overlay.classList.add('active');
                header.classList.add('active')
            }
            menuClose[index].addEventListener('click', function () {
                item.lastElementChild.classList.remove('active');
                overlay.classList.remove('active');
            })
        });

    }

    function out(e) {
        const menuItem = menu.querySelectorAll('.menu__item'),
            menuClose = menu.querySelectorAll('.menu__dropdown-close');
        menuItem.forEach((item, index) => {
            if (e.relatedTarget === overlay || e.relatedTarget === null) {
                item.lastElementChild.classList.remove('active');
                overlay.classList.remove('active');
                header.classList.remove('active')
            }
        })
    }
    menu.addEventListener('mouseover', over);
    menu.addEventListener('mouseout', out);
    window.addEventListener('resize', resizeWindow);

    function resizeWindow(func) {
        let paigeWidth = document.documentElement.scrollWidth;
        if (paigeWidth >= 767) {
            let width = 'desktop';
            menu.removeEventListener('click', menuMobile);
            menu.addEventListener('mouseover', over);
            menu.addEventListener('mouseout', out);
            const menuBtns = menu.querySelectorAll('.menu__item');
            menuBtns.forEach((item, index) => {
                let dropdownContent = item.lastElementChild,
                    dropdownSecondaryBtns = dropdownContent.querySelectorAll('.menu__dropdown-submenu-button');
                dropdownSecondaryBtns.forEach(dropdownSecondaryBtn => {
                    dropdownSecondaryBtn.classList.remove('open');
                    dropdownSecondaryBtn.nextElementSibling.removeAttribute('style')
                    dropdownContent.removeAttribute('style');
                })

                item.classList.remove('open');
                item.lastElementChild.removeAttribute('style');

            })
            body.classList.remove('active');
            html.classList.remove('active');
            removeDisabled(footerBox, width);
        }
        if (paigeWidth <= 767) {
            let width = 'mobile';
            menu.addEventListener('click', menuMobile);
            menu.removeEventListener('mouseover', over);
            menu.removeEventListener('mouseout', out);
            overlay.classList.remove('active');
            header.classList.remove('inactive');
            const menuDropdowns = menu.querySelectorAll('.menu__dropdown');
            menuDropdowns.forEach((item, index) => {
                item.classList.remove('active');
            })
            const menuItem = menu.querySelectorAll('.menu__item'),
                menuClose = menu.querySelectorAll('.menu__dropdown-close');
            // body.classList.add('active');
            // html.classList.add('active');
            menuItem.forEach((item, index) => {

                item.lastElementChild.classList.remove('active');
                // overlay.classList.remove('active');
                header.classList.remove('active')

            })
            removeDisabled(footerBox, width);
        }

    }

    function addClasses() {
        searchBox.classList.add('active');
        headerMenu.classList.add('inactive');
        searchBtn.classList.add('inactive');
        langBox.classList.add('inactive');

        overlay.classList.remove('active');
        const menuDropdowns = menu.querySelectorAll('.menu__dropdown');
        menuDropdowns.forEach((item, index) => {
            item.classList.remove('active');
        })
    }

    function removeClasses() {
        searchBox.classList.remove('active');
        headerMenu.classList.remove('inactive');
        searchBtn.classList.remove('inactive');
        langBox.classList.remove('inactive');
        langDropdown.removeAttribute('style');
        langBoxBtn.classList.remove('active');


    }

    function closingLangBox(btn) {

        if (langDropdown.hasAttribute('style')) {
            langBoxBtn.classList.remove('active');
            langDropdown.removeAttribute('style');

        } else {
            langDropdown.style.maxHeight = langDropdown.scrollHeight + "px";
            langBoxBtn.classList.add('active');
        }
    }

    function choosingTextLang() {
        langRadioInput.forEach((input, index) => {
            if (input.checked) {
                langBoxBtn.textContent = input.value;
                closingLangBox();
            }
        });
    }


    function removeDisabled(accordeons, windowWidth) {
        const footerAccordeon = accordeons.querySelectorAll('.footer-accordeon');
        footerAccordeon.forEach((item, index) => {
            const footerAccordeonButton = item.querySelector('.footer-accordeon__button');
            if (windowWidth == 'mobile') {
                footerAccordeonButton.removeAttribute('disabled');

            } else if (windowWidth == 'desktop') {
                footerAccordeonButton.setAttribute("disabled", "disabled");

            }
        })
    }




    footerBox.addEventListener('click', function (e) {
        const footerAccordeons = footerBox.querySelectorAll('.footer-accordeon__button');

        footerAccordeons.forEach((item, index) => {
            if (e.target === item) {
                if (item.classList.contains('active') === false) {
                    item.classList.add('active');
                    item.nextElementSibling.style.maxHeight = item.nextElementSibling.scrollHeight + "px";
                } else if (item.classList.contains('active')) {
                    item.classList.remove('active');
                    item.nextElementSibling.removeAttribute('style');

                }
            }


        })

    })

    overlay.addEventListener('mouseenter', function (e) {
        e.target.classList.remove('active');
        const menuItem = menu.querySelectorAll('.menu__item'),
            menuClose = menu.querySelectorAll('.menu__dropdown-close');
        menuItem.forEach((item, index) => {

            item.lastElementChild.classList.remove('active');
            overlay.classList.remove('active');
            header.classList.remove('active')

        })
    });
    searchBtn.addEventListener('click', addClasses);
    searchBtnClose.addEventListener('click', removeClasses);
    langBox.addEventListener('click', closingLangBox);
    langForm.addEventListener('change', choosingTextLang);





    resizeWindow();
});