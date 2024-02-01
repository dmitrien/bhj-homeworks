const mainVal = document.querySelector('.dropdown__value');
const allList = document.querySelector('.dropdown__list');

function openMenu() {
    allList.classList.add('dropdown__list_active');
}

function closeMenu() {
    allList.classList.remove('dropdown__list_active');
}
mainVal.addEventListener('click', openMenu);


let listVal = Array.from(document.querySelectorAll('.dropdown__item'));
listVal.forEach((item) => {
    item.addEventListener("click", (event) => {
        event.preventDefault()
        const newValue = item.querySelector(".dropdown__link").textContent;
        closeMenu();
        mainVal.textContent = newValue;
    });
});
