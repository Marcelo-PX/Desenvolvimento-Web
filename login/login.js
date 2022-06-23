
let btn = document.querySelector('#verSenha')
let btn2 = document.querySelector('#verSenha2')

let nome = document.querySelector('#nome')
let valiNome = false

let email = document.querySelector('#email')
let valiEmail = false

let senha = document.querySelector('#senha')
let valiSenha = false

let senha2 = document.querySelector('#senha2')
let valiSenha2 = false

let msgExtra = document.querySelector('#msgExtra')
let msgCadastro = document.querySelector('#msgCadastro')
let msgErro = document.querySelector('#msgErro')

// ocultar/mostrar senha
btn.addEventListener('click', ()=> {

    let inputSenha = senha
    let icon = document.querySelector('#verSenha')

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
        icon.className = "uil uil-eye-slash"
    }else{
        inputSenha.setAttribute('type', 'password')
        icon.className = "uil uil-eye"
    }
})
// ocultar/mostrar confirmar senha cadastro
btn2.addEventListener('click', ()=> {

    let inputSenha2 = senha2
    let icon = document.querySelector('#verSenha2')

    if(inputSenha2.getAttribute('type') == 'password'){
        inputSenha2.setAttribute('type', 'text')
        icon.className = "uil uil-eye-slash"
    }else{
        inputSenha2.setAttribute('type', 'password')
        icon.className = "uil uil-eye"
    }
})
// validar nome cadastro
nome.addEventListener('keyup', ()=> {

    const inputNome = /^([a-zA-Zà-úÀ-Ú]|\s+)+$/;

    if(!inputNome.test(nome.value)){  
        nome.setAttribute('style', 'border-color: red');
        msgExtra.innerHTML = '<strong>*Nome inválido!</strong>'
         
    }else{
        nome.setAttribute('style', 'border-color: #00bf8e')
        msgExtra.innerHTML = ''
        valiNome = true
    }
})
// validar email cadastro
email.addEventListener('keyup', ()=> {

    const inputEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;

    if(!inputEmail.test(email.value)){  
        email.setAttribute('style', 'border-color: red');
        msgExtra.innerHTML = '<strong>*Email inválido!</strong>'
         
    }else{
        email.setAttribute('style', 'border-color: #00bf8e')
        msgExtra.innerHTML = ''
        valiEmail = true
    }
})
// validar senha cadastro
senha.addEventListener('keyup', ()=> {

    const inputSenha = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{6,}$/;

    if(!inputSenha.test(senha.value)){

        let msg2 = msgExtra

        senha.setAttribute('style', 'border-color: red');
        msg2.setAttribute('style', 'font-size: 0.95rem');
        msg2.innerHTML = '<strong>*Sua senha deve conter pelo menos 6 dígitos, letras maiúsculas e minúsculas e pelo menos um caractere especial.</strong>'
         
    }else{
        senha.setAttribute('style', 'border-color: #00bf8e')
        msg2.innerHTML = ''
        valiSenha = true
    }
})
// confirmar senha cadastro
senha2.addEventListener('keyup', ()=> {
    if(senha.value != senha2.value){
        senha2.setAttribute('style', 'border-color: red')
        msgExtra.innerHTML = '<strong>*As senhas devem ser iguais!</strong>'
    }else{
        senha2.setAttribute('style', 'border-color: #00bf8e')
        msgExtra.innerHTML = ''
        valiSenha2 = true
    }
})
// mensagem de cadastro
function cadastrar(){

    if(valiNome && valiEmail && valiSenha && valiSenha2){
        alert('TRUE')
        // msgCadastro.setAttribute('style', 'display: block')
        // msgCadastro.innerHTML = '<strong>Cadastro realizado com sucesso!</strong>'

        
    }else{
        alert('FALSE')
        // msgErro.setAttribute('style', 'displSSay: block')
        // msgErro.innerHTML = '<strong>Por favor preencha todos os campos!</strong>'
    }
}