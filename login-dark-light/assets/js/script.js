const mode = document.getElementById('mode-icon')
const input = document.querySelectorAll('.inputs')
const spans = document.querySelectorAll('.span-required')
const emailRegex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/ // Regex email validation
const passRegex = /^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^0-9A-Za-z]).{8,32}$/ //Must contain 8-32 characters, with at least 1 upercase, 1 number and 1 special character

mode.addEventListener('click', () => {
    const form = document.getElementById('login-form')
    const container = document.getElementById('container')
    if(mode.classList.contains('fa-moon')){
        mode.classList.remove('fa-moon')
        mode.classList.add('fa-sun')
        form.classList.add('dark')
        container.classList.add('dark')

        return
    }
    mode.classList.remove('fa-sun')
    mode.classList.add('fa-moon')
    form.classList.remove('dark')
    container.classList.remove('dark')
})

function setError(index){
    spans[index].style.display = 'block'  
}

function setSuccess (index) {
    spans[index].style.display = 'none'
}

function nameValidation() {
    if(input[0].value.length < 3){
        setError(0)
    } else {
        setSuccess(0)
    }
}

function emailValidation () {
    if(!emailRegex.test(input[1].value)){
        setError(1)
    }else {
        setSuccess(1)
    }
}

function passwordValidantion () {
    if(!passRegex.test(input[2].value)){
        setError(2)
    }else {
        setSuccess(2)
    }
}