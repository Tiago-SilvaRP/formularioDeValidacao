const campoPreenchido = document.getElementsByName("inputs")
const form = document.getElementById('formulario')

form.addEventListener("submit", (event) => {
    campoPreenchido.forEach((item) => {
        if (item.value.trim() !== "") {
            item.classList.add('verde')
            item.nextElementSibling.style.display = 'none'
            event.preventDefault()
        } else {
            item.classList.remove('verde')
            item.classList.add('vermelho')
            item.nextElementSibling.style.display = 'block'
            event.preventDefault()
        } 
    })
})

