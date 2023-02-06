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
        overlay = document.querySelector('.overlay');

    function addClasses() {
        searchBox.classList.add('active');
        headerMenu.classList.add('inactive');
        searchBtn.classList.add('inactive');
        langBox.classList.add('inactive');

    }

    function removeClasses() {
        searchBox.classList.remove('active');
        headerMenu.classList.remove('inactive');
        searchBtn.classList.remove('inactive');
        langBox.classList.remove('inactive');
        langDropdown.removeAttribute('style');
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

    function hoverMenu(menu, overlay) {
        const menuItem = menu.querySelectorAll('.menu__item'),
            menuClose = menu.querySelectorAll('.menu__dropdown-close');

        menuItem.forEach((item, index) => {
            item.addEventListener('mouseenter', function (e) {
                e.target.lastElementChild.classList.add('active');
                overlay.classList.add('active');
            });
            item.addEventListener('mouseleave', function (e) {
                e.target.lastElementChild.classList.remove('active');
                overlay.classList.remove('active');
            });
            menuClose[index].addEventListener('click', function () {
                item.lastElementChild.classList.remove('active');
                overlay.classList.remove('active');
            })
        })

    }
    hoverMenu(menu, overlay);

    function mouseover() {

    }
    searchBtn.addEventListener('click', addClasses);
    searchBtnClose.addEventListener('click', removeClasses);
    langBox.addEventListener('click', closingLangBox);
    langForm.addEventListener('change', choosingTextLang);

});