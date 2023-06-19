//Pesquisa

const searchInput = document.querySelector(".vagasSearch-txt");
const searchButton = document.getElementById("vagasSearchButton");
//const searchResultContainer = document.getElementById("searchResults");

searchButton.addEventListener("click", () => {
  const query = searchInput.value.toLowerCase();
  const results = listadevagas

    .filter((vaga) => {
      return (
        vaga.nomeVaga.toLowerCase().includes(query) ||
        vaga.ONG.some((ong) =>
          ong.toLowerCase().includes(query)
        )
      );
    })

  //displayResults(results);

    // Armazena os resultados no localStorage
    localStorage.setItem('vagasSearchResults', JSON.stringify(results));

    // Redireciona para a página de resultados
    window.location.href = 'listadevagasResultado.html';
});