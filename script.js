const afterpartyButton = document.getElementById('afterparty')
const modalDialog = document.getElementsByClassName('modal')[0]
const closeButton = document.getElementById('close')
const login = document.getElementById('login')
const code = document.getElementById('code')

afterpartyButton.addEventListener('click', (e) => {
    e.preventDefault()

    modalDialog.classList.remove('hidden')
})

closeButton.addEventListener('click', (e) => {
    modalDialog.classList.add('hidden')
})

code.addEventListener('input', (e) => {
    if (!code.value) {
        login.classList.add('disabled')
    } else {
        login.classList.remove('disabled')
    }
})

code.addEventListener('keydown', (e) => e.keyCode === 69 ? e.preventDefault() : null)

login.addEventListener('click', (e) => {
    if (!code.value) {
        e.preventDefault()
    }
})
