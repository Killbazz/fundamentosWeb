let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector("#mapa")


nome.style.width = '100%'
email.style.width = '100%'
assunto.style.width = '100%'


function validaNome(){
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome de Tamanho Muito Curto!"
        txtNome.style.color = "red"
    }else{
        txtNome.innerHTML = "Nome Válido"
        txtNome.style.color ="green"
        nomeOk = true
    }
}   

function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")

    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
        txtEmail.innerHTML = "e-mail Inválido!"
        txtEmail.style.color = "red"
    }else{
        txtEmail.innerHTML = "e-mail Válido!"
        txtEmail.style.color = "green"
        emailOk = true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector("#txtAssunto")

    if (assunto.value.length >=100){
        txtAssunto.innerHTML = "Texto muito grande, digite no máximo 100 caracteres."
        txtAssunto.style.display = "block"
    }else{
        txtAssunto.style.display = "none"
        assuntoOk = true
        
    }
}
function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert("Formulário Enviado com Sucesso!")
    }else{
        alert("Preencha o Formulário Corretamente antes de Enviar...")
    }
}
function mapazoom(){
    mapa.style.width = "600px"
    mapa.style.height = "400px"

}
function mapanormal(){
mapa.style.width = "450px"
mapa.style.height = "300px"
}

   