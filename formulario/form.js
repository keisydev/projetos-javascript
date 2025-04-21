const form = document.querySelector('form')
const campos = document.querySelectorAll('.required')
const spans = document.querySelectorAll('.span-required')
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex para validar email
const senhaRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/ // 8 caracteres, com pelo menos 1 letra e 1 número

form.addEventListener('submit', (event) => {
    event.preventDefault() // Previne o envio do formulário
    nameValidation()
    emailValidation()
    passwordValidation()
    comparePassword()

})

function setError(index){
    campos[index].style.border = '2px solid #e63636'
    spans[index].style.display = 'block'
}

function setSuccess(index){
    campos[index].style.border = ''
    spans[index].style.display = 'none'
}

function nameValidation(){
    if (campos[0].value.length < 3){ 
        setError(0)
    } else {
        setSuccess(0)
    }
}

function emailValidation(){
    if (!emailRegex.test(campos[1].value)){
        setError(1)
    } else {
        setSuccess(1)
    }
}

function passwordValidation(){
    if (!senhaRegex.test(campos[2].value)){
        setError(2)
    } else {
        setSuccess(2)
        comparePassword()
    }
}

function comparePassword(){
    if(campos[2].value === campos[3].value && campos[3].value.length >= 8){
       setSuccess(3)
    }else{
        setError(3)
    }
}