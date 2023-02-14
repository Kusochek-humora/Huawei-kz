document.addEventListener('DOMContentLoaded', function () {
    const activityBox = document.querySelector('.activity__tabs'),
        activityBoxPrev = activityBox.querySelector('.activity__tabs-prev'),
        activityBoxNext = activityBox.querySelector('.activity__tabs-next'),
        activityBoxItem = activityBox.querySelectorAll('.activity__tabs-item'),
        activityBoxArrows = activityBox.querySelectorAll('.activity__tabs-arrow'),
        activityBoxContainer = activityBox.querySelector('.activity__tabs-container'),
        activityBoxTab = document.querySelectorAll('.activity__inner');

    // function tabsAction(e) {
    //     if (e.target)
    // }
    // let jsTriggers = document.querySelectorAll('.js-tab-trigger'),    activityBoxItem
    // jsContents = document.querySelectorAll('.js-tab-content');    activityBoxTab
    // jsTriggers.forEach(function (trigger) {
    //     trigger.addEventListener('click', function () {



    //         activeTrigger.classList.remove('active'); // 1
    //         trigger.classList.add('active'); // 2

    //         activeContent.classList.remove('active'); // 3
    //         content.classList.add('active'); // 4
    //     });
    // });


    activityBox.addEventListener('click', function (e) {
        let content = document.querySelector('.activity__inner[data-tab-item="' + e.target.id + '"]'),
            activeTrigger = document.querySelector('.activity__tabs-item.active'),
            activeContent = document.querySelector('.activity__inner.active');
        activityBoxItem.forEach((item, index) => {
            if (e.target === item) {
                activeTrigger.classList.remove('active');
                item.classList.add('active');

                activeContent.classList.remove('active');
                content.classList.add('active')
            }
        })
        if (e.target === activityBoxPrev) {
            activityBoxContainer.scrollBy({
                left: -100
            })
        } else if (e.target === activityBoxNext) {
            activityBoxContainer.scrollBy({
                left: 100
            })
        }
    });


    function resize() {
        let paigeWidth = document.documentElement.scrollWidth;
        activityBoxArrows.forEach(item => {
            if (paigeWidth <= 500) {
                item.removeAttribute('disabled');
            } else {
                item.setAttribute('disabled', 'disabled');
            }

        })

    }
    resize();
    window.addEventListener('resize', resize);
})