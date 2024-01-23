const count_tipe = document.getElementById('clicker__counter')

const button = document.getElementById('cookie')

button.onclick = () => {
    setInterval(count_tipe.textContent = Number(count_tipe.textContent) + 1)
    if (button.width == 200) {
        button.width +=20
    } else{
        button.width -=20
    }
}