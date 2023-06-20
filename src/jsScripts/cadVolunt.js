const formCursos = document.querySelector("#qualificacoes");
const btnSalvarCurso = document.querySelector("#btnSalvarCurso");
const editarCardBtn = listaQualificacoes.querySelector("#editarCardBtn");
const divContainerQualific = document.querySelector("#containerQualificacoes");
const popUpEditar = document.querySelector(".popUpEditar");

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>FUNCIONALIDADES CONTAINER QUALIFICAÇÕES<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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


function criarPopUpEditar() {
  // Cria a div popUpEditar
  var divPopUpEditar = document.createElement("div");
  divPopUpEditar.setAttribute("class", "popUpEditar");
  divPopUpEditar.setAttribute("id", "popUpEditar");

  // Cria o título "Editar Qualificação"
  var tituloEditarQualificacao = document.createElement("h2");
  tituloEditarQualificacao.innerText = "Editar Qualificação";

  // Cria o formulário formEditarQualificacao
  var formEditarQualificacao = document.createElement("form");
  formEditarQualificacao.setAttribute("id", "formEditarQualificacao");
  formEditarQualificacao.setAttribute("class", "formContainerGrande fo");

  // Cria os elementos do formulário
  var labels = ["Início do Curso:", "Fim do Curso:", "Instituição:", "Nome do Curso:", "Tipo de Curso:", "Área do Curso:"];
  var inputIds = ["inicioCurso", "fimCurso", "nomeInstituicao", "nomeCurso", "tipoCurso", "areaCurso"];

  for (var i = 0; i < labels.length; i++) {
    var divElement = document.createElement("div");
    var labelElement = document.createElement("label");
    var inputElement = document.createElement("input");

    labelElement.setAttribute("for", inputIds[i]);
    labelElement.setAttribute("class", "labels");
    labelElement.innerText = labels[i];

    inputElement.setAttribute("type", "text");
    inputElement.setAttribute("id", inputIds[i]);
    inputElement.setAttribute("name", inputIds[i]);
    inputElement.setAttribute("class", "inputText inputData");
    inputElement.setAttribute("required", "required");

    divElement.appendChild(labelElement);
    divElement.appendChild(inputElement);
    formEditarQualificacao.appendChild(divElement);
  }

  // Cria os botões "Salvar" e "Cancelar"
  var divGroupBtn = document.createElement("div");
  divGroupBtn.setAttribute("class", "groupBtn");

  var btnSalvarEditar = document.createElement("button");
  btnSalvarEditar.setAttribute("type", "submit");
  btnSalvarEditar.setAttribute("id", "btnSalvarEditar");
  btnSalvarEditar.innerText = "Salvar";

  var btnCancelarEditar = document.createElement("button");
  btnCancelarEditar.setAttribute("type", "button");
  btnCancelarEditar.setAttribute("id", "btnCancelarEditar");
  btnCancelarEditar.innerText = "Cancelar";

  divGroupBtn.appendChild(btnSalvarEditar);
  divGroupBtn.appendChild(btnCancelarEditar);

  formEditarQualificacao.appendChild(divGroupBtn);

  // Adiciona os elementos à div popUpEditar
  divPopUpEditar.appendChild(tituloEditarQualificacao);
  divPopUpEditar.appendChild(formEditarQualificacao);

  return divPopUpEditar;
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
  // let botaoEditar = document.createElement("button");
  // botaoEditar.setAttribute("type", "submit");
  // botaoEditar.setAttribute("class", "formBtn");
  // botaoEditar.setAttribute("id","editarCardBtn");
  // botaoEditar.innerText = "editar"
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

  // grupoBotao.appendChild(botaoEditar);
  grupoBotao.appendChild(botaoExcluir);

  divContainerCard.appendChild(tituloCurso);
  divContainerCard.appendChild(ulDados);
  divContainerCard.appendChild(grupoBotao);
  // console.log(divContainerCard);

  botaoExcluir.addEventListener("click", function(e){
      let divGroupBtn = botaoExcluir.parentNode;
      let divCardCurso = divGroupBtn.parentNode;
      //  console.log(divCardCurso);
      removeCardLocalStorage(divCardCurso,"formCursos");
      divCardCurso.remove();


  });

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

function removeCardLocalStorage(card, chave) {
  var id = chave; // Chave do localStorage (ID fornecido)
  var dadosSalvos = localStorage.getItem(id);

  if (dadosSalvos) {
    var arrayDadosSalvos = JSON.parse(dadosSalvos);

    // Procura o card a ser removido pelo conteúdo dos elementos
    var tituloDiv = card.querySelector("h2").innerText;
    var areaCurso = card.querySelector("#area").innerText;
    var inicio = card.querySelector("#inicio").innerText;
    var fim = card.querySelector("#fim").innerText;
    var instituicao = card.querySelector("#instituicao").innerText;
    var tipoCurso = card.querySelector("#tipoCurso").innerText;

    // Encontra o índice do card no array de dados
    var indiceCard = arrayDadosSalvos.findIndex(function(dados) {
      return (
        dados.nomeCurso === tituloDiv &&
        dados.areaCurso === areaCurso &&
        dados.inicioCurso === inicio &&
        dados.fimCurso === fim &&
        dados.nomeInstituicao === instituicao &&
        dados.tipoCurso === tipoCurso
      );
    });

    if (indiceCard !== -1) {
      // Remove o card do array de dados
      arrayDadosSalvos.splice(indiceCard, 1);

      // Atualiza os dados salvos no localStorage
      localStorage.setItem(id, JSON.stringify(arrayDadosSalvos));
    }
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
