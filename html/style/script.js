
        document.getElementById("login-form").addEventListener("submit", function(event) {
            event.preventDefault();  // Impede o envio do formulário
        
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const errorMessage = document.getElementById("error-message");
        
            // Validar o e-mail e a senha
            if (!email || !password) {
                errorMessage.textContent = "Por favor, preencha todos os campos.";
                return;
            }
        
            // Apenas um exemplo simples de validação
            if (email !== "usuario@exemplo.com" || password !== "senha123") {
                errorMessage.textContent = "Email ou senha incorretos!";
            } else {
                errorMessage.textContent = "";
                alert("Login bem-sucedido!");
                // Aqui você pode redirecionar o usuário para outra página, se quiser
                // window.location.href = "dashboard.html";
            }
        });