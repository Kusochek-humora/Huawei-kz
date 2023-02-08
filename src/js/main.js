'use strict'
document.addEventListener('DOMContentLoaded', function () {
    //header
    const header = document.querySelector('.header'),
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
        burgerBtn = document.querySelector('.burger-button');

    burgerBtn.addEventListener('click', function (e) {
        e.target.classList.toggle('active');
        menu.classList.toggle('active');
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
                } else if (e.target === dropdownSecondaryBtns[index]) {
                    dropdownSecondaryBtn.classList.remove('open');
                    dropdownSecondaryBtn.nextElementSibling.style.maxHeight = 0;
                    dropdownContent.style.maxHeight = (item.lastElementChild.scrollHeight - dropdownSecondaryBtn.nextElementSibling.scrollHeight) + "px";
                }
            })
            if (e.target === item && item.classList.contains('open') === false) {
                item.classList.add('open');
                dropdownContent.style.maxHeight = item.lastElementChild.scrollHeight + "px";

            } else if (e.target === menuBtns[index]) {
                item.classList.remove('open');
                item.lastElementChild.style.maxHeight = 0;
            }
        })

    }

    function over(e) {

        const menuItem = menu.querySelectorAll('.menu__item'),
            menuClose = menu.querySelectorAll('.menu__dropdown-close');
        console.log(e.target, e.currentTarget)
        menuItem.forEach((item, index) => {
            // item.lastElementChild.classList.remove('active');
            if (e.target === item) {
                menuItem.forEach(item => {
                    item.lastElementChild.classList.remove('active');
                })

                e.target.lastElementChild.classList.add('active');

                overlay.classList.add('active');
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
            if (e.relatedTarget === overlay) {
                item.lastElementChild.classList.remove('active');
                overlay.classList.remove('active');
            }
        })
    }

    menu.addEventListener('mouseover', over);
    menu.addEventListener('mouseout', out);




    window.addEventListener('resize', resizeWindow);

    function resizeWindow(func) {
        let paigeWidth = document.documentElement.scrollWidth;
        if (paigeWidth >= 767) {
            menu.removeEventListener('click', menuMobile);
            menu.addEventListener('mouseover', over);
            menu.addEventListener('mouseout', out);

            const menuBtns = menu.querySelectorAll('.menu__item');
            menuBtns.forEach((item, index) => {
                let dropdownContent = item.lastElementChild,
                    dropdownSecondaryBtns = dropdownContent.querySelectorAll('.menu__dropdown-submenu-button');
                dropdownSecondaryBtns.forEach(dropdownSecondaryBtn => {
                    if ((window.scrollHeight > 767)) {
                        dropdownSecondaryBtn.classList.remove('open');
                        dropdownSecondaryBtn.nextElementSibling.removeAttribute('style')
                        dropdownContent.removeAttribute('style');
                    }
                })
                if (window.scrollHeight > 767) {
                    item.classList.remove('open');
                    item.lastElementChild.removeAttribute('style');
                }
            })
        }
        if (paigeWidth <= 767) {
            menu.addEventListener('click', menuMobile);
            menu.removeEventListener('mouseover', over);
            menu.removeEventListener('mouseout', out);
            overlay.classList.remove('active');
            const menuDropdowns = menu.querySelectorAll('.menu__dropdown');
            menuDropdowns.forEach((item, index) => {
                item.classList.remove('active');
            })
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
        console.log(btn)
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




    searchBtn.addEventListener('click', addClasses);
    searchBtnClose.addEventListener('click', removeClasses);
    langBox.addEventListener('click', closingLangBox);
    langForm.addEventListener('change', choosingTextLang);


    resizeWindow();
});