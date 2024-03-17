

const validateFieldForm = () => {
    const form = document.getElementById("form");

    const nameValid = validateName();
    const emailValid = validateEmail();
    const celularValid = validateCelular();
    const experienciaValid = validateExperiencia();

    if (nameValid && emailValid && celularValid && experienciaValid) {
        // alert("Cadastro concluído com sucesso!")
        mostrarPopup();
        form.submit();
    }
}

const validateName = () => {
    const nameInput = document.getElementById("nome");
    const nameValue = nameInput.value.trim();

    if (nameValue.length < 5 || nameValue.length > 35) {
        alert("Nome deve ter entre 5 e 35 caracteres.");
        nameInput.focus();
        return false;
    }

    return true;
}

const validateEmail = () => {
    const emailInput = document.getElementById("e-mail");
    const emailValue = emailInput.value.trim();

    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (!emailRegex.test(emailValue)) {
        alert("E-mail inválido");
        emailInput.focus();
        return false;
    }

    return true;
}

const validateCelular = () => {
    const celularInput = document.getElementById("celular");
    const celularValue = celularInput.value.trim();

    const celularRegex = /^\d{11}$/;

    if (!celularRegex.test(celularValue)) {
        alert("Celular deve ter 11 digitos.");
        celularInput.focus();
        return false;
    }

    return true;
}

const validateExperiencia = () => {
    const experienciaInput = document.getElementById("experiencia");
    const experienciaValue = experienciaInput.value.trim();

    if (experienciaValue.length > 100) {
        alert("Experiência deve ter até 100 caracteres.");
        experienciaInput.focus();
        return false;
    }

    return true;
}

const popup = document.getElementById('popup-cadastro');
const botaoFechar = document.getElementById('fechar-popup');

const mostrarPopup = () => {
    popup.style.display = 'block';
}

const fecharPopup = () => {
    popup.style.display = 'none';
}