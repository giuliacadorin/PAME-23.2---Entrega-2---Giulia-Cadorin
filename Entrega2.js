document.addEventListener('DOMContentLoaded', function () { // Aguarda o carregamento completo do DOM             
    // Adiciona um ouvinte de eventos para o formulário
    document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault();  // Previne que o envio seja feito sem o preenchimento completo do formulário

        // Obtém os valores dos campos de input
        var username = document.getElementById('username').value;
        var password = document.getElementById('senha').value;
        var rememberMe = document.getElementById('customSwitch').checked;

        // Exibe um alerta com as informações que foram inseridas, escondendo a senha.
        alert('Username: ' + username + '\nPassword: ' + disguisePassword(password) + (rememberMe ? '\nSeus dados serão lembrados!' : '\nSeus dados não serão lembrados!'));

        // Adiciona a estrutura de texto ao final do corpo do documento
        document.getElementById('html_confirm').innerHTML = "<h4>Envio Confirmado!</h4>";//.css("display","block");

        // Limpa os campos de input após o usuário clicar em "OK" no aviso de confirmação de envio.
        document.getElementById('username').value = '';
        document.getElementById('senha').value = '';
        document.getElementById('customSwitch').checked = true; // Define 'Remember Me' como ativado como resposta padrão.

    });
});

// Função para disfarçar a senha mostrando asteriscos
function disguisePassword(password) {
    return '*'.repeat(password.length);
}