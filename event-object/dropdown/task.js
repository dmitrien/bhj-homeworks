const mainVal = document.querySelector('.dropdown__value');
const allList = document.querySelector('.dropdown__list');

function openMenu() {
    allList.classList.add('dropdown__list_active');
}

function closeMenu() {
    allList.classList.remove('dropdown__list_active');
}
mainVal.addEventListener('click', openMenu);


var listVal = Array.from(document.querySelectorAll('.dropdown__item'));
listVal.forEach((item) => {
    item.addEventListener("click", () => {
        const newValue = item.querySelector(".dropdown__link").textContent;
        closeMenu();
        mainVal.textContent = newValue;
    });
});
