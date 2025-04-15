const campoPreenchido = document.getElementsByName("inputs")
const form = document.getElementById('formulario')

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const nome = campoPreenchido[0].value || "Usuario(a)"
    const email = campoPreenchido[1].value
    const fone = campoPreenchido[2].value
    let formularioValido = true

    campoPreenchido.forEach((campo) => {

        if (campo.value.trim() !== "") {
            campo.classList.add('verde')
            campo.nextElementSibling.style.display = 'none'
        } else {
            campo.classList.remove('verde')
            campo.classList.add('vermelho')
            campo.nextElementSibling.style.display = 'block'
            formularioValido = false
        }
    })
    if (formularioValido && nome && email && fone) {
        alert(`Parabéns ${nome} seu formulário foi enviado com sucesso!`)
    } else {
        alert(`${nome} todos os campos devem ser preenchidos para validação do formulário!`)
    }

})