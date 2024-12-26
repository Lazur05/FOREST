const nameInput = document.querySelector('#name')
const mailInput = document.querySelector('#email')
const messageInput = document.querySelector('#message')
const sendBtn = document.querySelector('.contact__form-button')
const popup = document.querySelector('.contact__popup')
const closePopupBtn = document.querySelector('.contact__popup-close')





const showError = (input, msg) => {
    const formbox = input.parentElement
    const errorMsg = formbox.querySelector('.contact__form-error')
    const label = formbox.querySelector('.contact__form-label')
    errorMsg.textContent = msg
    input.classList.add('error')
    label.classList.add('error')
}

const clearError = input => {
    const formbox = input.parentElement
    const errorMsg = formbox.querySelector('.contact__form-error')
    const label = formbox.querySelector('.contact__form-label')
    errorMsg.textContent = ''
    input.classList.remove('error')
    label.classList.remove('error')
}

const checkForm = input => {
    input.forEach(el => {
        if (el.value === '') {
            showError(el, 'To pole jest wymagane!')
        } else {
            clearError(el)
        }
    })
}


const checkLength = (input, min) => {
    if (input.value.length < min) {
        showError(input, `To pole musi zawierać minimum ${min} znaków!`)
    }
}

const checkEmail = email => {
    const reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (reg.test(email.value)) {
        clearError(email)
    } else {
        showError(email, 'Podaj poprawny adres email!')
    }
}

const checkErrors = () => {

    const allInputs = document.querySelectorAll('.contact__form-input')
    let errorCount = 0
    allInputs.forEach(el => {
        if (el.classList.contains('error')) {
            errorCount++
        }
    })

    if (errorCount === 0){
        popup.classList.add('contact__popup--show')
    }
}



[nameInput, mailInput, messageInput].forEach(el => {
    el.addEventListener('focusout', e => {
        checkForm([e.target])
    })
})


sendBtn.addEventListener('click', (e) => {
    e.preventDefault()
    
    checkForm([nameInput, mailInput, messageInput])
    checkLength(nameInput, 3)
    checkLength(messageInput, 15)
    checkEmail(mailInput)
    checkErrors()
})

closePopupBtn.addEventListener('click', () => {
    popup.classList.remove('contact__popup--show')
})