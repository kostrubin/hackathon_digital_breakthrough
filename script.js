const afterpartyButton = document.getElementById('afterparty')
const modalDialog = document.getElementsByClassName('modal')[0]
const closeButton = document.getElementById('close')
const name = document.getElementById('name')
const company = document.getElementById('company')
const position = document.getElementById('position')
const code = document.getElementById('code')
const login = document.getElementById('login')
const validateFields = () => name.value && company.value && position.value && code.value

afterpartyButton.addEventListener('click', (e) => {
    e.preventDefault()

    modalDialog.classList.remove('hidden')
})

closeButton.addEventListener('click', (e) => {
    modalDialog.classList.add('hidden')
})

name.addEventListener('input', () => {
    if (!validateFields()) {
        login.classList.add('disabled')
    } else {
        login.classList.remove('disabled')
    }
})

company.addEventListener('input', () => {
    if (!validateFields()) {
        login.classList.add('disabled')
    } else {
        login.classList.remove('disabled')
    }
})

position.addEventListener('input', () => {
    if (!validateFields()) {
        login.classList.add('disabled')
    } else {
        login.classList.remove('disabled')
    }
})

code.addEventListener('input', () => {
    if (!validateFields()) {
        login.classList.add('disabled')
    } else {
        login.classList.remove('disabled')
    }
})

login.addEventListener('click', (e) => {
    if (!validateFields()) {
        e.preventDefault()
    }
})
