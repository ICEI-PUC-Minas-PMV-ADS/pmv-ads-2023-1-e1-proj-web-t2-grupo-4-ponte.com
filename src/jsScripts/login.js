function login() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Verificar se os campos estão preenchidos
  if (email.trim() === "" || password.trim() === "") {
    alert("Preencha os campos com seu e-mail e senha");
    return;
  }

  // Requisição para obter os dados dos usuários
  var usersPromises = [
    fetch("perfilVol.js").then((response) => response.json()),
    fetch("perfilONG.js").then((response) => response.json()),
  ];

  Promise.all(usersPromises)
    .then((usersArrays) => {
      var usuarios = usersArrays.flat(); // Combina em um único array
      var usuario = usuarios.find((usuario) => usuario.email === email);

      if (usuario && usuario.senha === password) {
        // Login bem-sucedido
        alert("Login realizado");
        // Redireciona o usuário para outra página
        window.location.href = "./paginaPerfilLog.html";
      } else {
        // Credenciais inválidas
        alert("E-mail ou senha inválidos");
      }
    })

    .catch((error) => {
      // Lidar com erros de requisição
      console.error("Erro ao obter dados de usuários:", error);
    });
}
