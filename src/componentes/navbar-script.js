//Cria evento do menu dropdown
document.querySelector("#menuButton").onclick = function () {
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
  localStorage.setItem("searchResults", JSON.stringify(results));

  // Redireciona para a página de resultados
  window.location.href = "paginaResultado.html";
});
