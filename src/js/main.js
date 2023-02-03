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
        langDropdown = langBox.querySelector('.lang__dropdown');

    function addClasses() {
        searchBox.classList.add('active');
        headerMenu.classList.add('inactive');
        searchBtn.classList.add('inactive');
        langBox.classList.add('inactive');
        closingLangBox();
    }

    function removeClasses() {
        searchBox.classList.remove('active');
        headerMenu.classList.remove('inactive');
        searchBtn.classList.remove('inactive');
        langBox.classList.remove('inactive');
    }

    function closingLangBox() {
        if (!langDropdown.hasAttribute('style')) {
            langDropdown.style.maxHeight = langDropdown.scrollHeight + "px";
        } else {
            langDropdown.removeAttribute('style');
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
});
// let timeClose = setInterval(deleteMaxHeight, 5000);

// function deleteMaxHeight() {
//     langDropdown.removeAttribute('style');
// }


// function closingLangDropdwon() {
//     timeClose();
// }

// function updateTimeClose() {
//     clearInterval(timeClose);
// }  
// header.addEventListener('mouseleave', closingLangDropdwon);
// header.addEventListener('mouseenter', updateTimeClose)