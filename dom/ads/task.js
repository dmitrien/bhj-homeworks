const sentences = Array.from(document.querySelectorAll('span.rotator__case'));
let index = 0;
setInterval(() => {
    sentences[index].classList.remove('rotator__case_active');
    sentences[(index += 1)].classList.add('rotator__case_active');
    if(index == (sentences.length - 1)){
        sentences[index].classList.remove('rotator__case_active');
        index = 0;
        sentences[index].classList.add('rotator__case_active');
    };
    
}, 1000);
