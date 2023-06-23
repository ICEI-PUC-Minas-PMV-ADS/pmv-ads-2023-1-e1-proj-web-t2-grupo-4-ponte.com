// Verifica se o usuário está logado
const usuarioLog = JSON.parse(localStorage.getItem("usuarioLog"));

//Funções para criar navbar
//Navbar sem usuário logado
function navbarSL() {
  // Se o usuário estiver logado, não faz nada
  if (usuarioLog && usuarioLog.email) {
    return;
  }

  const header = document.querySelector("header");
  header.innerHTML = `
    <div class="wrapperSL">
      <a href="./index.html"
        ><img
          id="logo"
          src="img/logoPontecom.png"
          alt="Logo do site ponte.com. A letra N da palavra possui formato de ponte."
      /></a>
      <ul class="wrapperNavbarSL">
        <a href="./pagina-login.html"
          ><li class="wrapperButton-active">Login</li></a
        >
        <a href="./sobre.html"><li class="wrapper-li">Sobre</li></a>
        <a href="./listadevagas.html"
          ><li class="wrapper-li">Vagas de voluntariado</li></a
        >
      </ul>
    </div>
  `;
}

//Navbar usuário com login
function navbarLogin() {
  // Se o usuário não estiver logado, não faz nada
  if (!usuarioLog || !usuarioLog.email) {
    return;
  }

  const header = document.querySelector("header");
  header.innerHTML = `
    <div class="wrapper">
      <a href="./index.html">
        <img
          id="logo"
          src="img/logoPontecom.png"
          alt="Logo do site ponte.com. A letra N da palavra possui formato de ponte."
        />
      </a>

      <div class="wrapperSearch">
        <input
          type="text"
          class="wrapperSearch-txt"
          placeholder="Busque por ONGs ou voluntários..."
        />
        <button id="searchButton">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>

      <!-- Menu -->
      <ul class="wrapperNavbar">
        <li class="wrapper-li"><a href="./sobre.html">Sobre</a></li>
        <li class="wrapper-li">
          <a href="./listadevagas.html">Vagas de voluntariado</a>
        </li>
      </ul>

      <button id="menuButton">
        <i class="fa-solid fa-bars" style="color: #4a4a4a"></i>
      </button>

      <ul id="menuDropdown" class="">
        <li><a href="./paginaPerfilLog.html">Meu perfil</a></li>
        <li><a id="editarDadosPag" href="#">Editar dados</a></li>
        <li><a id="logout" href="#">Logout</a></li>
      </ul>
    </div>
  `;

  // Verifica se há o elemento "#menuButton" na página
  const menuButton = document.querySelector("#menuButton");
  const menuDropdown = document.querySelector("#menuDropdown");

  if (menuButton && menuDropdown) {
    // Cria evento do menu dropdown
    menuButton.addEventListener("click", function () {
      menuDropdown.classList.toggle("visivel");
    });
  }

  // Muda o link do menu de acordo com o usuário logado
  const editarDadosPag = document.querySelector("#editarDadosPag");

  if (usuarioLog && usuarioLog.email) {
    const perfilONG = JSON.parse(localStorage.getItem("perfilONG"));
    const perfilVol = JSON.parse(localStorage.getItem("perfilVol"));
    const usuarioONG = perfilONG.find(
      (usuario) => usuario.email === usuarioLog.email
    );
    const usuarioVol = perfilVol.find(
      (usuario) => usuario.email === usuarioLog.email
    );

    if (usuarioONG !== undefined) {
      editarDadosPag.href = "cadOng.html";
    } else if (usuarioVol !== undefined) {
      editarDadosPag.href = "cadVolunt.html";
    }
  }

  //Logout
  const logout = document.querySelector("#logout");

  if (logout) {
    // Cria evento de clique no logout
    logout.addEventListener("click", function (event) {
      //event.preventDefault(); // Impede o redirecionamento padrão do link

      // Limpa o usuário logado da localStorage
      localStorage.removeItem("usuarioLog");
      // Redireciona o usuário para a página inicial do site
      window.location.href = "./index.html";
    });
  }

  //Pesquisa
  const searchInput = document.querySelector(".wrapperSearch-txt");
  const searchButton = document.getElementById("searchButton");

  searchButton.addEventListener("click", () => {
    const query = searchInput.value.toLowerCase();
    const perfilONG = JSON.parse(localStorage.getItem("perfilONG"));
    const perfilVol = JSON.parse(localStorage.getItem("perfilVol"));
    const results = perfilONG
      .filter((ong) => {
        return (
          ong.nomeUsuarioONG.toLowerCase().includes(query) ||
          ong.interesses.some((interesse) =>
            interesse.toLowerCase().includes(query)
          )
        );
      })
      .concat(
        perfilVol.filter((vol) => {
          return (
            vol.nomeUsuario.toLowerCase().includes(query) ||
            vol.interesses.some((interesse) =>
              interesse.toLowerCase().includes(query)
            )
          );
        })
      );

    //displayResults(results);

    // Armazena os resultados no localStorage
    localStorage.setItem("searchResults", JSON.stringify(results));

    // Redireciona para a página de resultados
    window.location.href = "paginaResultado.html";
  });
}

//Chama a navbar correta
if (usuarioLog && usuarioLog.email) {
  navbarLogin();
} else {
  navbarSL();
}
