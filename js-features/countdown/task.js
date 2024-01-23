const time = document.getElementById('timer')

setInterval(() => {
    time.textContent = Number(time.textContent) - 1
    if ((time.textContent == 0)) {
        alert('Вы победили в конкурсе!');
        time.textContent = 59
    }

}, 1000)