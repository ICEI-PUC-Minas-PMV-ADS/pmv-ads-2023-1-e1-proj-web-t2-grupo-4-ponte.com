const formCursos = document.querySelector("#qualificacoes");
const btnSalvarCurso = document.querySelector("#btnSalvarCurso");
const divContainerQualific = document.querySelector("#containerQualificacoes");
// const listaQualificacoes = document.querySelector("#listaQualificacoes");





function salvarFormularioNoLocalStorage(formulario, id) {
  // Obtém todos os elementos do formulário
  var elementos = formulario.elements;

  // Cria um objeto para armazenar os dados do formulário
  var dadosFormulario = {};

  // Itera sobre os elementos do formulário
  for (var i = 0; i < elementos.length; i++) {
    var elemento = elementos[i];

    // Verifica se o elemento tem um nome e um valor
    if (elemento.name && elemento.value) {
      // Adiciona o valor do elemento ao objeto de dados do formulário
      dadosFormulario[elemento.name] = elemento.value;
    }
  }

  // Obtém os dados existentes no Local Storage para o ID fornecido
  var dadosSalvos = localStorage.getItem(id);

  // Se houver dados salvos no Local Storage
  if (dadosSalvos) {
    // Converte os dados salvos em um array JavaScript
    var arrayDadosSalvos = JSON.parse(dadosSalvos);

    // Adiciona os novos dados ao array existente
    arrayDadosSalvos.push(dadosFormulario);

    // Atualiza os dados salvos no Local Storage para o ID fornecido
    localStorage.setItem(id, JSON.stringify(arrayDadosSalvos));
  } else {
    // Se não houver dados salvos no Local Storage para o ID fornecido, cria um novo array com os dados do formulário
    var novoArrayDados = [dadosFormulario];

    // Salva os dados no Local Storage para o ID fornecido
    localStorage.setItem(id, JSON.stringify(novoArrayDados));
  }
}

function criaEstruturaCardCursos(){

  let divContainerCard = document.createElement('div');
  divContainerCard.setAttribute("id","cardCurso");
  // console.log(divContainerCard);
  let tituloCurso = document.createElement('h2');
  tituloCurso.setAttribute("class", "titulosH3");
  // console.log(tituloCurso);
  let ulDados = document.createElement("ul");
  let liInicio = document.createElement("li");
  liInicio.setAttribute("id","inicio");
  let liFim = document.createElement("li");
  liFim.setAttribute("id","fim");
  let liInstituicao = document.createElement("li");
  liInstituicao.setAttribute("id","instituicao");
  let liTipoCurso = document.createElement("li");
  liTipoCurso.setAttribute("id","tipoCurso");
  let liArea = document.createElement("li");
  liArea.setAttribute("id","area");

  let grupoBotao = document.createElement("div");
  grupoBotao.setAttribute("class","btnArea");
  grupoBotao.setAttribute("class", "groupBtn");
  grupoBotao.setAttribute("id","btnArea");
  let botaoSalvar = document.createElement("button");
  botaoSalvar.setAttribute("type", "submit");
  botaoSalvar.setAttribute("class", "formBtn");
  botaoSalvar.innerText = "salvar";
  let botaoExcluir = document.createElement("button");
  botaoExcluir.setAttribute("type", "submit");
  botaoExcluir.setAttribute("class", "formBtn");
  botaoExcluir.innerText="excluir";

  ulDados.appendChild(liInicio);
  ulDados.appendChild(liFim);
  ulDados.appendChild(liTipoCurso);
  ulDados.appendChild(liInstituicao);
  ulDados.appendChild(liTipoCurso);
  ulDados.appendChild(liArea);

  grupoBotao.appendChild(botaoSalvar);
  grupoBotao.appendChild(botaoExcluir);

  divContainerCard.appendChild(tituloCurso);
  divContainerCard.appendChild(ulDados);
  divContainerCard.appendChild(grupoBotao);
  // console.log(divContainerCard);

  return(divContainerCard);
}


function addDadosEstruturaCardCursos(chave) {

      let dados = JSON.parse(localStorage.getItem(chave));
      let cardsPreenchidos = [];
      // console.log(dados);

      for(i=0;i<dados.length;i++){
          let divContainerCard = criaEstruturaCardCursos();
          let tituloDiv = divContainerCard.querySelector("h2");
          let areaCurso = divContainerCard.querySelector("#area");
          let inicio = divContainerCard.querySelector("#inicio");
          let fim = divContainerCard.querySelector("#fim");
          let instituicao = divContainerCard.querySelector("#instituicao");
          let tipoCurso = divContainerCard.querySelector("#tipoCurso");

          tituloDiv.innerText = dados[i].nomeCurso;
          areaCurso.innerText = dados[i].areaCurso;
          tipoCurso.innerText = dados[i].tipoCurso;
          inicio.innerText = dados[i].inicioCurso;
          fim.innerText = dados[i].fimCurso;
          instituicao.innerText = dados[i].nomeInstituicao;



        //  console.log(divContainerCard);

         cardsPreenchidos[i] = divContainerCard;
        //  console.log(cardsPreenchidos[i]);

      }

      return cardsPreenchidos;
}


 function insereCardsNaLista(conjuntoCards) {

   let listaQualificacoes = document.querySelector("#listaQualificacoes");

   for (let i = conjuntoCards.length - 1; i>=0; i--) {
      listaQualificacoes.appendChild(conjuntoCards[i]);
   }

}



function reloadParaAlvo(divId) {
  var elementoAlvo = document.getElementById(divId);

  if (elementoAlvo) {
    elementoAlvo.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(function() {
      location.reload();
    }, 100); // Tempo de espera para a rolagem antes de recarregar a página (500ms neste exemplo)
  }
}


document.addEventListener('DOMContentLoaded', function(e){
  let cardsPreenchidos = addDadosEstruturaCardCursos("formCursos");
  insereCardsNaLista(cardsPreenchidos);

    e.preventDefault();
});


//cria um card e insere na lista quando clicado o botao salvar do form
btnSalvarCurso.addEventListener("click", function(e){
    salvarFormularioNoLocalStorage(formCursos, "formCursos");
    let listaQualificacoes = document.querySelector("#listaQualificacoes");
    let divContainerCard = criaEstruturaCardCursos();

    let tituloDiv = divContainerCard.querySelector("h2");
    let areaCurso = divContainerCard.querySelector("#area");
    let inicio = divContainerCard.querySelector("#inicio");
    let fim = divContainerCard.querySelector("#fim");
    let instituicao = divContainerCard.querySelector("#instituicao");
    let tipoCurso = divContainerCard.querySelector("#tipoCurso");

    let inputNomeCurso = formCursos.querySelector("#nomeCurso");
    let inputAreaCurso = formCursos.querySelector("#areaCurso");
    let inputTipoCurso = formCursos.querySelector("#tipoCurso");
    let inputNomeInstituicao = formCursos.querySelector("#nomeInstituicao");
    let inputInicio = formCursos.querySelector("#inicioCurso");
    let inputFim = formCursos.querySelector("#fimCurso");
    // console.log(inputNomeCurso);

    tituloDiv.innerText = inputNomeCurso.value;
    areaCurso.innerText = inputAreaCurso.value;
    tipoCurso.innerText = inputTipoCurso.value;
    instituicao.innerText = inputNomeInstituicao.value;
    inicio.innerText = inputInicio.value;
    fim.innerText = inputFim.value;

    listaQualificacoes.appendChild(divContainerCard);

    // console.log(tituloDiv);
    // console.log(areaCurso);
    // console.log(tipoCurso);
    // console.log(instituicao);
    // console.log(inicio);
    // console.log(fim);
    // alert("Clicou!");
    //  e.preventDefault();
});


btnSalvarCurso.addEventListener("click", function(event) {
  event.preventDefault(); // Evita o comportamento padrão de recarregar a página
  reloadParaAlvo("containerQualificacoes");
});
