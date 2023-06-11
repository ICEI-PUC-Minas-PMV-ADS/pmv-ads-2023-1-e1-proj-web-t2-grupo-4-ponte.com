//Cria evento do menu dropdown
document.querySelector("#foto").onclick = function () {
  document.querySelector("#menuDropdown").classList.toggle("visivel");
};

//Pesquisa

const searchInput = document.querySelector(".wrapperSearch-txt");
const searchButton = document.getElementById("searchButton");
//const searchResultContainer = document.getElementById("searchResults");

searchButton.addEventListener("click", () => {
  const query = searchInput.value.toLowerCase();
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
    localStorage.setItem('searchResults', JSON.stringify(results));

    // Redireciona para a página de resultados
    window.location.href = 'paginaResultado.html';
});

/*function displayResults(results) {
  searchResultContainer.innerHTML = "";

  if (results.length === 0) {
    searchResultContainer.textContent = "Nenhum resultado encontrado";
    return;
  }

  results.forEach((ong) => {
    console.log(ong);
    const resultItem = document.createElement("div");
    resultItem.classList.add("searchResultItem");

    const img = document.createElement("img");
    img.src = ong.fotoPerfil;
    img.alt = "Foto de perfil da ONG";

    const name = document.createElement("h3");
    name.textContent =
      ong.nomeUsuarioONG !== undefined ? ong.nomeUsuarioONG : ong.nomeUsuario;

    const biografia = document.createElement("p");
    biografia.textContent = ong.biografia;

    const interesses = document.createElement("p");
    interesses.textContent = ong.interesses;

    const verMaisButton = document.createElement("button");
    verMaisButton.textContent = "Ver mais";
    verMaisButton.addEventListener("click", () => {
      window.location.href =
        ong.nomeUsuarioONG !== undefined
          ? `paginaPerfilONG.html?id=${ong.id}`
          : `paginaPerfilVol.html?id=${ong.id}`;
    });

    resultItem.append(img, name, biografia, interesses, verMaisButton);

    searchResultContainer.appendChild(resultItem);
  });
};*/
