const campos = document.getElementsByName("inputs");
const form = document.getElementById('formulario');

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = campos[0].value || "Usuario(a)";
    let formularioValido = true;

    campos.forEach((campo) => {
        const preenchido = campo.value.trim() !== "";

        campo.classList.toggle('verde', preenchido);
        campo.classList.toggle("vermelho", !preenchido);
        campo.nextElementSibling.style.display = preenchido ? 'none' : 'block';
        
        if (!preenchido) formularioValido = false;
    })

    formularioValido ?
        alert(`Parabéns ${nome} seu formulário foi enviado com sucesso!`)
        :
        alert(`${nome} todos os campos devem ser preenchidos para validação do formulário!`)
});