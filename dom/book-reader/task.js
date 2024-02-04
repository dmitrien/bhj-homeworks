const book = document.getElementById('book');
const size = Array.from(document.querySelectorAll('a.font-size'));


size.forEach((item) => {
    item.addEventListener('click', (event) => {
        const size_active = Array.from(document.querySelectorAll('a.font-size_active'));
        size_active.forEach((item_size) => {
            item_size.classList.remove('font-size_active')
        });
        event.preventDefault();
        item.classList.add('font-size_active');
        book.classList.remove('book_fs-small')
        book.classList.remove('book_fs-big')
        if(item.dataset.size == 'small') {
            book.classList.remove('book_fs-big')
            book.classList.add('book_fs-small')
        };
        if(item.dataset.size == 'big') {
            book.classList.remove('book_fs-small')
            book.classList.add('book_fs-big')
        };

    });
});

