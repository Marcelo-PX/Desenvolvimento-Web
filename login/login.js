
let btn = document.querySelector('#verSenha')
let btn2 = document.querySelector('#verSenha2')
// variáveis da tela de cadastro
let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let senha = document.querySelector('#senha')
let senha2 = document.querySelector('#senha2')

let valiNome = false
let valiEmail = false
let valiSenha = false
let valiSenha2 = false

let msgExtra = document.querySelector('#msgExtra')
let msgErro = document.querySelector('#msgErro')
let msgCadastro = document.querySelector('#msgCadastro')

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
        //console.log('FALSO')
         
    }else{
        nome.setAttribute('style', 'border-color: #00bf8e')
        msgExtra.innerHTML = ''
        valiNome = true
        //console.log('VERDADEIRO')
    }
})
// validar email cadastro
email.addEventListener('keyup', ()=> {

    const inputEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;

    if(!inputEmail.test(email.value)){  
        email.setAttribute('style', 'border-color: red');
        msgExtra.innerHTML = '<strong>*Email inválido!</strong>'
        //console.log('FALSO')
    }else{
        email.setAttribute('style', 'border-color: #00bf8e')
        msgExtra.innerHTML = ''
        valiEmail = true
        //console.log('VERDADEIRO')
    }
})
// validar senha cadastro
senha.addEventListener('keyup', ()=> {

    const inputSenha = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{6,}$/;

    if(!inputSenha.test(senha.value)){
        senha.setAttribute('style', 'border-color: red');
        msgExtra.setAttribute('style', 'font-size: 0.9rem');
        msgExtra.innerHTML = '<strong>*Sua senha deve conter pelo menos 6 dígitos, letras maiúsculas e minúsculas e pelo menos um caractere especial.</strong>'
        //console.log('FALSO')
    }else{
        senha.setAttribute('style', 'border-color: #00bf8e')
        msgExtra.innerHTML = ''
        valiSenha = true
        //console.log('VERDADEIRO')
    }
})
// confirmar senha cadastro
senha2.addEventListener('keyup', ()=> {

    if(senha.value != senha2.value){
        senha2.setAttribute('style', 'border-color: red')
        msgExtra.innerHTML = '<strong>*As senhas devem ser iguais!</strong>'
        //console.log('FALSO')
    }else{
        senha2.setAttribute('style', 'border-color: #00bf8e')
        msgExtra.innerHTML = ''
        valiSenha2 = true
        //console.log('VERDADEIRO')
    }
})
// mensagem de cadastro
function cadastrar(){

    if(valiNome && valiEmail && valiSenha && valiSenha2){

        let listaCadastro = JSON.parse(localStorage.getItem('listaCadastro') || '[]')

        listaCadastro.push(
            {
                nomeCadastro: nome.value,
                emailCadastro: email.value,
                senhaCadastro: senha.value,
            }
        )

        localStorage.setItem('listaCadastro', JSON.stringify(listaCadastro))
        
        msgErro.setAttribute('style', 'display: none')
        msgErro.innerHTML = ''
        msgCadastro.setAttribute('style', 'display: inline-block')
        msgCadastro.innerHTML = '<strong>Cadastro realizado com sucesso!</strong>'

        alert('Cadastro realizado com sucesso!')

        // setTimeout(function (){

        //     document.location.replace('http://127.0.0.1:5500/login/login.html')

        // }, 1000)

    }else{
        msgErro.setAttribute('style', 'display: inline-block')
        msgErro.innerHTML = '<strong>Por favor preencha todos os campos!</strong>'
        // msgCadastro.setAttribute('style', 'display: none')
        // msgCadastro.innerHTML = ''
    }
}

function entrar(){
    
    let emailLogin = document.querySelector('#email');
    let senhaLogin = document.querySelector('#senha');

    let loginValido = false;

    let listaUser = []

    let usuarioValido = {
        nome: '',
        email: '',
        senha: '',
    }

    listaUser = JSON.parse(localStorage.getItem('listaCadastro'))

    listaUser.forEach((item) => {

        if(emailLogin.value == item.emailCadastro && senhaLogin.value == item.senhaCadastro){

            usuarioValido = {
                nome: item.nomeCadastro,
                email: item.emailCadastro,
                senha: item.senhaCadastro
            }
        }     
    })

    if(email.value == usuarioValido.email && senha.value == usuarioValido.senha){
        
        console.log(email.value)

        window.location.href = 'http://127.0.0.1:5500/index.html'

    }else{
        email.setAttribute('style', 'border-color: red');
        senha.setAttribute('style', 'border-color: red');
        msgExtra.innerHTML = '<strong>*Email e/ou senha inválidos!</strong>'
    }
}