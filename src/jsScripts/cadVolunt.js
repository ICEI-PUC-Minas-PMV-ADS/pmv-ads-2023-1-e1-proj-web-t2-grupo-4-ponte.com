// Obtém referências dos elementos HTML
const formInformacoes = document.querySelector("#formInfBasica");
const formExperiencias = document.querySelector("#experiencias");
const formQualificacoes = document.querySelector("#qualificacoes");
const btnSalvarUser = document.querySelector("#salvarUser");
const btnSalvarXp = document.querySelector("#btnSalvar");
const btnSalvarQualif = document.querySelector("#btnSalvarCurso");
const listaQualificacoes = document.querySelector("#listaQualificacoes");

const inicioCurso = document.querySelector("#inicioCurso");
const fimCurso = document.querySelector("#fimCurso");
const nomeInstituicao = document.querySelector("#nomeInstituicao");
const areaCurso = document.querySelector("#areaCurso");
const nomeCurso = document.querySelector("#nomeCurso");
const tipoDeCurso = document.querySelector("#tipoCurso");

// Função para converter data para o formato brasileiro
function converteDataParaPadraoBrasileiro(data) {
  let dataBrasileira;
  dataBrasileira = data.split("-").reverse().join("/");
  return dataBrasileira;
}

// Função para criar um card de qualificação
function criarCardQualificacao(dados) {
  var cardDetalhes = document.createElement("div");
  cardDetalhes.className = "campoDetalhe cardExp";
  cardDetalhes.id = "cardCurso";

  var listaUl = document.createElement("ul");
  var dataInicioLi = document.createElement("li");
  dataInicioLi.textContent = "de: " + converteDataParaPadraoBrasileiro(dados.inicioCurso);
  var dataFimLi = document.createElement("li");
  dataFimLi.textContent = "até: " + converteDataParaPadraoBrasileiro(dados.fimCurso);
  var instituicaoLi = document.createElement("li");
  instituicaoLi.textContent = "instituição: " + dados.nomeInstituicao;
  var nomeCursoLi = document.createElement("li");
  nomeCursoLi.textContent = dados.nomeCurso;
  var tipoDeCursoLi = document.createElement("li");
  tipoDeCursoLi.textContent = "tipo de curso: " + dados.tipoCurso;
  var areaCursoLi = document.createElement("li");
  areaCursoLi.textContent = "área do curso: " + dados.areaCurso;
  var tituloCard = document.createElement("h2");
  tituloCard.textContent = dados.nomeCurso;
  tituloCard.setAttribute("class", "titulosH3");

  listaUl.appendChild(dataInicioLi);
  listaUl.appendChild(dataFimLi);
  listaUl.appendChild(instituicaoLi);
  listaUl.appendChild(tipoDeCursoLi);
  listaUl.appendChild(areaCursoLi);

  var divGroupBtn = document.createElement("div");
  divGroupBtn.className = "groupBtn btnArea";
  divGroupBtn.id = "btnArea";

  var botaoEditar = document.createElement("button");
  botaoEditar.type = "submit";
  botaoEditar.className = "formBtn";
  botaoEditar.textContent = "editar";
  botaoEditar.addEventListener("click", function () {
    editarQualificacao(dados);
  });

  var botaoExcluir = document.createElement("button");
  botaoExcluir.type = "submit";
  botaoExcluir.className = "formBtn";
  botaoExcluir.textContent = "excluir";
  botaoExcluir.addEventListener("click", function () {
    excluirQualificacao(dados);
  });

  divGroupBtn.appendChild(botaoEditar);
  divGroupBtn.appendChild(botaoExcluir);
  cardDetalhes.appendChild(tituloCard);
  cardDetalhes.appendChild(listaUl);
  cardDetalhes.appendChild(divGroupBtn);

  return cardDetalhes;
}

// Função para recuperar os dados do formulário
function recuperarDados(formId) {
  var dados = localStorage.getItem(formId);

  if (dados) {
    return JSON.parse(dados);
  } else {
    return [];
  }
}

// Função para exibir as qualificações na página
function exibirQualificacoes() {
  listaQualificacoes.innerHTML = "";

  var dados = recuperarDados("form3");

  for (var i = dados.length - 1; i >= 0; i--) {
    var card = criarCardQualificacao(dados[i]);
    listaQualificacoes.appendChild(card);
  }
}

// Função para editar uma qualificação
function editarQualificacao(dados) {
  inicioCurso.value = dados.inicioCurso;
  fimCurso.value = dados.fimCurso;
  nomeInstituicao.value = dados.nomeInstituicao;
  nomeCurso.value = dados.nomeCurso;
  tipoDeCurso.value = dados.tipoCurso;
  areaCurso.value = dados.areaCurso;

  var popupEditar = document.querySelector(".popupEditar");
  popupEditar.style.display = "block";

  btnSalvarQualif.addEventListener("click", function (e) {
    e.preventDefault();

    var qualificacoes = recuperarDados("form3");

    for (var i = 0; i < qualificacoes.length; i++) {
      var qualificacao = qualificacoes[i];

      if (
        qualificacao.inicioCurso === dados.inicioCurso &&
        qualificacao.fimCurso === dados.fimCurso &&
        qualificacao.nomeInstituicao === dados.nomeInstituicao &&
        qualificacao.nomeCurso === dados.nomeCurso &&
        qualificacao.tipoCurso === dados.tipoCurso &&
        qualificacao.areaCurso === dados.areaCurso
      ) {
        qualificacao.inicioCurso = inicioCurso.value;
        qualificacao.fimCurso = fimCurso.value;
        qualificacao.nomeInstituicao = nomeInstituicao.value;
        qualificacao.nomeCurso = nomeCurso.value;
        qualificacao.tipoCurso = tipoDeCurso.value;
        qualificacao.areaCurso = areaCurso.value;
        break;
      }
    }

    localStorage.setItem("form3", JSON.stringify(qualificacoes));

    exibirQualificacoes();
    formQualificacoes.reset();
    btnSalvarQualif.removeEventListener("click", editarQualificacao);
    btnSalvarQualif.addEventListener("click", function (e) {
      e.preventDefault();
      adicionarQualificacao();
    });

    popupEditar.style.display = "none";
  });

  var btnCancelarEditar = document.querySelector("#btnCancelarEditar");
  btnCancelarEditar.addEventListener("click", function () {
    formQualificacoes.reset();
    popupEditar.style.display = "none";
  });
}

// Função para excluir uma qualificação
function excluirQualificacao(dados) {
  var qualificacoes = recuperarDados("form3");

  for (var i = 0; i < qualificacoes.length; i++) {
    var qualificacao = qualificacoes[i];

    if (
      qualificacao.inicioCurso === dados.inicioCurso &&
      qualificacao.fimCurso === dados.fimCurso &&
      qualificacao.nomeInstituicao === dados.nomeInstituicao &&
      qualificacao.nomeCurso === dados.nomeCurso &&
      qualificacao.tipoCurso === dados.tipoCurso &&
      qualificacao.areaCurso === dados.areaCurso
    ) {
      qualificacoes.splice(i, 1);
      break;
    }
  }

  localStorage.setItem("form3", JSON.stringify(qualificacoes));

  exibirQualificacoes();
}

// Função para adicionar uma qualificação
function adicionarQualificacao() {
  var qualificacao = {
    inicioCurso: inicioCurso.value,
    fimCurso: fimCurso.value,
    nomeInstituicao: nomeInstituicao.value,
    nomeCurso: nomeCurso.value,
    tipoCurso: tipoDeCurso.value,
    areaCurso: areaCurso.value,
  };

  var qualificacoes = recuperarDados("form3");
  qualificacoes.push(qualificacao);
  localStorage.setItem("form3", JSON.stringify(qualificacoes));

  exibirQualificacoes();
  formQualificacoes.reset();
}

// Exibe as qualificações ao carregar a página
exibirQualificacoes();

// Evento de submit do formulário de qualificações
formQualificacoes.addEventListener("submit", function (e) {
  e.preventDefault();
  adicionarQualificacao();
});
