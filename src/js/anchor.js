document.addEventListener('DOMContentLoaded', function () {
    const anchor = document.querySelector('.anchor'),
        anchorItem = document.querySelectorAll('[data-anchor-item]'),
        anchorLink = document.querySelectorAll('.anchor__list-link'),
        anchorBtn = document.querySelector('.anchor__btn'),
        anchorList = document.querySelector('.anchor__list');
    anchorBtn.addEventListener('click', function (e) {
        if (e.target.classList.contains('active')) {
            e.target.classList.remove('active');
            anchorList.removeAttribute('style');

        } else {
            e.target.classList.add('active');
            anchorList.style.maxHeight = anchorList.scrollHeight + "px";
        }
    })
    anchor.addEventListener('click', function (e) {
        anchorLink.forEach((item, index) => {
            if (e.target === item) {
                anchorBtn.classList.remove('active');
                anchorList.removeAttribute('style');

                anchorItem[index].scrollIntoView({
                    block: "start",
                    behavior: "smooth"
                });
            }
        })
    });

    function checkAnchor() {

        anchorItem.forEach((item, index) => {

            if (document.body.scrollTop + 120 > item.getBoundingClientRect().top) {

                anchorLink.forEach(item => {
                    item.classList.remove('active');

                })
                anchorLink[index].classList.add('active');
                anchorBtn.textContent = anchorLink[index].textContent;
            } else if (document.body.scrollTop <= -150) {
                anchorLink[index].classList.remove('active');
                anchorBtn.textContent = anchorLink[0].textContent;
                anchorBtn.classList.remove('active');
                anchorList.removeAttribute('style');
            }
        })

    }
    let scrollPos = 0;

    function scrollConditional() {
        checkAnchor();

        let paigeWidth = document.documentElement.scrollWidth;
        if (document.body.getBoundingClientRect().top < -576) {


            anchor.classList.add('active');
            if ((document.querySelector('header').classList.contains('inactive'))) {
                anchor.removeAttribute('style');
            } else {
                anchor.style.top = (document.querySelector('header')).scrollHeight + "px";
            }
        } else {
            anchor.removeAttribute('style');
            anchor.classList.remove('active');
        }
        scrollPos = (document.body.getBoundingClientRect()).top;
    }


    scrollConditional();
    window.addEventListener('scroll', scrollConditional);
})