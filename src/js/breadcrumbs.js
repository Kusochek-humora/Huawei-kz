document.addEventListener('DOMContentLoaded', function () {
    const breadcrumbs = document.querySelector('.breadcrumbs'),
        breadcrumbBtn = breadcrumbs.querySelector('.breadcrumbs-title'),
        breadcrumbList = breadcrumbs.querySelector('.breadcrumbs__list');

    function breadcrumbsAction(e) {
        if (e.target === breadcrumbBtn && breadcrumbList.hasAttribute('style')) {
            breadcrumbList.removeAttribute('style');
        } else {
            breadcrumbList.style.maxHeight = breadcrumbList.scrollHeight + "px";
        }
    }

    function resize() {
        let paigeWidth = document.documentElement.scrollWidth;
        if (paigeWidth <= 500) {
            breadcrumbBtn.removeAttribute('disabled');
            breadcrumbs.addEventListener('click', breadcrumbsAction);
        } else {
            breadcrumbBtn.setAttribute('disabled', 'disabled');
            breadcrumbs.removeEventListener('click', breadcrumbsAction);
            breadcrumbList.removeAttribute('style');
        }
    }
    resize();
    window.addEventListener('resize', resize);
})