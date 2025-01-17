const campoPreenchido = document.getElementsByName("inputs")
const form = document.getElementById('formulario')


form.addEventListener("submit", (event) => {
    event.preventDefault()
    const nome = campoPreenchido[0].value
    let formularioValido = false
    console.log(formularioValido);

    campoPreenchido.forEach((item) => {
        console.log(item[0]);

        if (item.value.trim() !== "") {
            item.classList.add('verde')
            item.nextElementSibling.style.display = 'none'
            formularioValido = true
        } else {
            item.classList.remove('verde')
            item.classList.add('vermelho')
            item.nextElementSibling.style.display = 'block'
            formularioValido = false
        }
    })
    if (formularioValido && nome) {
        alert(`Parabéns ${nome} seu formulário foi enviado com sucesso!`)
    } else {
        alert(`${nome} todos os campos devem ser preenchidos para validação do formulário!`)
    }
})

