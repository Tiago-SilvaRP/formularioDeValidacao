const campoPreenchido = document.getElementsByName("inputs")
const botaoEnviar = document.getElementById('botao')


botaoEnviar.addEventListener("click", () => {
    campoPreenchido.forEach((item) => {
        if (item.value !== "") {
            item.classList.add('verde')
            item.nextElementSibling.style.display = 'none'
        } else{
            item.classList.remove('verde')
            item.classList.add('vermelho')
            item.nextElementSibling.style.display = 'block'
        }
    })
})


