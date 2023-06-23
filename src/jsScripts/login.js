function login() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  console.log("Email:", email);
  console.log("Senha:", password);

  // Verificar se os campos estão preenchidos
  if (email.trim() === "" || password.trim() === "") {
    alert("Preencha os campos com seu e-mail e senha");
    return;
  }

  // Carregar os dados dos usuários diretamente das variáveis perfilONG e perfilVol
  var usuariosONG = perfilONG;
  var usuariosVol = perfilVol;

  var usuarioONG = usuariosONG.find((usuario) => usuario.email === email);
  var usuarioVol = usuariosVol.find((usuario) => usuario.email === email);

  if (usuarioONG && usuarioONG.senha === password) {
    // Login de ONG bem-sucedido
    localStorage.setItem("usuarioLog", JSON.stringify(usuarioONG));
    alert("Login de ONG realizado");
    // Redireciona o usuário para outra página
    window.location.href = "./paginaPerfilLog.html";
  } else if (usuarioVol && usuarioVol.senha === password) {
    // Login de voluntário bem-sucedido
    localStorage.setItem("usuarioLog", JSON.stringify(usuarioVol));
    alert("Login de voluntário realizado");
    // Redireciona o usuário para outra página
    window.location.href = "./paginaPerfilLog.html";
  } else {
    // Login inválido
    alert("E-mail ou senha inválidos. Tente novamente");
  }
}