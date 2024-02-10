let sentences = document.querySelector('span.rotator').firstElementChild;
setInterval(() => {
    sentences.classList.remove('rotator__case_active');
    sentences = sentences.nextElementSibling
    if (sentences === null){
        sentences = document.querySelector('span.rotator').firstElementChild;
    }
    sentences.classList.add('rotator__case_active');   
}, 1000);
