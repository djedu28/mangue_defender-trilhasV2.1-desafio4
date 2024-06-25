/* eslint-disable no-unused-vars */

function SendForm(rota, id_form) {
    console.log("SendForm: ", rota)
    const _Form = document.querySelector(id_form);

    _Form.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log("SendForm. submit. Form:", id_form)

        // const elementos = _Form.querySelectorAll('input');
        // const dados = {};

        // for (let i = 0; i < elementos.length; i++) {
        //     const elemento = elementos[i];
        //     dados[elemento.name] = elemento.value;
        // }
        submitForm(rota, id_form)
    });
}

function submitForm(rota, id_form, addDados = {}) {
    const _Form = document.querySelector(id_form);
    const resultElement = _Form.querySelector('code');

    const dadosJSON = { ...formToJson(id_form), ...addDados }

    return fetch(rota, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dadosJSON)
    })
        .then(response => {
            if (!response.ok) {
                console.error("response:", response)
                // throw new Error('Erro HTTP, status ' + response.status);
            }
            return response.json();
        })
        .then((data) => printApiRes(data, resultElement))
        .then((data) => { if (!data.success) alert(data.messages); return data })
        .then((data) => {
            if (data.fields) {
                data.fields.forEach(inputId => {
                    const meuInput = document.getElementsByName(inputId)[0];
                    // Defina a mensagem de erro personalizada
                    meuInput.setCustomValidity('Por favor, preencha corretamente este campo.');
                });
            }
            return data
        })
        .catch(error => console.error(error));
}

function printApiRes(data, resultElement,) {
    if (!resultElement) {
        resultElement = document.querySelector('code');
    }
    resultElement.textContent = JSON.stringify(data, null, 2);
    resultElement.setAttribute("class","hljs language-json")
    // resultElement.style.whiteSpace = 'pre';
    // resultElement.style.fontFamily = 'monospace';
    // eslint-disable-next-line no-undef
    hljs.highlightAll()
    return data
}

function formToJson(id_form) {
    const formula_ = document.querySelector(id_form);
    const dados = new FormData(formula_);
    const dadosJSON = {};

    for (const [chave, valor] of dados.entries()) {
        dadosJSON[chave] = valor;
    }
    return dadosJSON
}

// module.exports = {SendForm}
