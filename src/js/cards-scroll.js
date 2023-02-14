document.addEventListener('DOMContentLoaded', function () {
    const scrollCard = document.querySelector('.events__card'),
        scrollCardOverlay = document.querySelector('.events__card--scroll');
    scrollCard.addEventListener('scroll', function (e) {

        if ((e.target.offsetHeight + e.target.scrollTop) === scrollCard.scrollHeight) {

            scrollCardOverlay.classList.add('inactive');

        } else {
            scrollCardOverlay.classList.remove('inactive');
        }

    });
})