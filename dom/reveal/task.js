const blocks = Array.from(document.querySelectorAll('div.reveal'));
window.addEventListener('scroll', () => {
    blocks.forEach((element) => {
        const {top, bottom} = element.getBoundingClientRect()
        if (top >= 0 && bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
            element.classList.add('reveal_active')
        }
    });

});
