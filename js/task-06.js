const inputValid = document.querySelector('input#validation-input');

const dataRef = Number(inputValid.dataset.length)

inputValid.addEventListener('blur', (event) => {
    if(event.currentTarget.value.length === dataRef){
        inputValid.classList.add('valid')
        inputValid.classList.remove('invalid')  
    }else {
        inputValid.classList.add('invalid')
        inputValid.classList.remove('valid')    
    }
});