

const inputs = document.querySelectorAll('.registrationForm input');

[...inputs].forEach(input => {
    input.addEventListener('input', handleInput);
});

function handleInput(e) {
    const value = e.target.value;
    const targetName = e.target.name;

    if (targetName === 'firstName') {
        if (value.length < 3 || value.length > 18) {
            validationError(e.target, 'Not Correct');
        } else {
            validationError(e.target, '');
        }
    } else if (targetName === 'lastName') {
        if (value.length < 5 || value.length > 30) {
            validationError(e.target, 'Not Correct');
        } else {
            validationError(e.target, '');
        }
    } else if (targetName === 'year') {
        if (value.length < 8 || value.length > 8) {
            validationError(e.target, 'Not Correct')
        } else {
            validationError(e.target, '')
        }
    } else if (targetName === 'password') {
        
        if (value.length < 8   || !(value.includes("!") ||value.includes("@") || value.includes("_") || value.includes(1) || value.includes(2) || value.includes(3) || value.includes(4) || value.includes(5) || value.includes(6) || value.includes(7) || value.includes(8) || value.includes(9) 
        
        
        
        )) {
            validationError(e.target, 'Not Correct')
            
            
        } else {
            validationError(e.target, '')
        }
    }else if (targetName === "confirmPassword") {
        if (value.length < 8   || !(value.includes("!") ||value.includes("@") || value.includes("_") || value.includes(1) || value.includes(2) || value.includes(3) || value.includes(4) || value.includes(5) || value.includes(6) || value.includes(7) || value.includes(8) || value.includes(9)  )) {
            validationError(e.target, 'Not Correct')
        } else {
            validationError(e.target, '')
        }
    }else if (targetName === "email") {
        if (value.length < 5   || (!value.includes(".") ||!value.includes("@") ) ) {
            validationError(e.target, 'Not Correct')
        } else {
            validationError(e.target, '')
        }
    }
    }

    form.addEventListener("a", function(e){
    e.preventDefolt();
    e.target.firstName.value
    e.target.lastName.value
    e.target.year.value
    e.target.password.value
    e.target.confirmPassword.value
    e.target.email.validationError
    registrationForm.sumbit();
    })

    function validationError(element, message) {
        let span = element.closest('div').querySelector('span');
        if (message) {
            span.innerHTML = element.name + " " + message;
        } else {
            span.innerHTML = '';
        }
    }