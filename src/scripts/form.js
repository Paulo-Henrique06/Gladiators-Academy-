function maxCharacter() {
    const limitCharacter = 11;
    let phone = document.getElementById("telefone");
    let phoneValue = phone.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos

    // Limita o número de caracteres
    if (phoneValue.length > limitCharacter) {
        phoneValue = phoneValue.slice(0, limitCharacter);
    }

    // Aplica a formatação de parênteses, espaço e traço de forma dinâmica
    if (phoneValue.length === 0) {
        phone.value = ''; // Remove tudo se o campo estiver vazio
    } else if (phoneValue.length <= 2) {
        phone.value = `(${phoneValue.slice(0, 2)})`; // Formatação do DDD
    } else if (phoneValue.length <= 6) {
        phone.value = `(${phoneValue.slice(0, 2)}) ${phoneValue.slice(2, 6)}`; // Formatação DDD + 4 primeiros dígitos
    } else {
        phone.value = `(${phoneValue.slice(0, 2)}) ${phoneValue.slice(2, 6)}-${phoneValue.slice(6, 11)}`; // Formatação completa
    }
}

function validatePhone(event) {
    const phone = document.getElementById("telefone");
    const phoneValue = phone.value.replace(/\D/g, ''); // Remove os caracteres não numéricos

    // Verifica se o telefone possui exatamente 11 dígitos
    if (phoneValue.length !== 11) {
        event.preventDefault(); // Impede o envio do formulário
        phone.setCustomValidity("Por favor, insira o telefone completo com 11 dígitos."); // Define uma mensagem personalizada
    } else {
        phone.setCustomValidity(""); // Remove mensagens de validação anteriores
    }
}

function filterLettersOnly() {
    const nameField = document.getElementById("nome");
    let nameValue = nameField.value;

    // Remove caracteres que não são letras ou espaços
    nameValue = nameValue.replace(/[^A-Za-zÀ-ÿ\s]/g, "");

    // Atualiza o campo com a string filtrada
    nameField.value = nameValue;
}

function validateBirthDate(event) {
    const dateField = document.getElementById("data_nascimento");
    const dateValue = new Date(dateField.value);
    const minYear = 1940;
    const maxYear = 2011;

    // Verifica se o ano está fora do intervalo
    if (dateValue.getFullYear() < minYear || dateValue.getFullYear() > maxYear) {
        event.preventDefault(); // Impede o envio do formulário
        dateField.setCustomValidity(`A data deve estar entre ${minYear} e ${maxYear}.`);
    } else {
        dateField.setCustomValidity(""); // Remove mensagens de validação anteriores
    }
}