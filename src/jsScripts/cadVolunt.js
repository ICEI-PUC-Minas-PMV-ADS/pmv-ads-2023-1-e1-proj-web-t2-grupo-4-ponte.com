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

function converteDataParaPadraoBrasileiro(data) {
  let dataBrasileira;
  dataBrasileira = data.split('-').reverse().join("/");
  return dataBrasileira;
}

function criarCardQualificacao(dados) {
  var cardDetalhes = document.createElement('div');
  cardDetalhes.className = 'campoDetalhe cardExp';
  cardDetalhes.id = 'cardCurso';

  var listaUl = document.createElement('ul');
  var dataInicioLi = document.createElement('li');
  dataInicioLi.textContent = 'de: ' + converteDataParaPadraoBrasileiro(dados.inicioCurso);
  var dataFimLi = document.createElement('li');
  dataFimLi.textContent = 'até: ' + converteDataParaPadraoBrasileiro(dados.fimCurso);
  var instituicaoLi = document.createElement('li');
  instituicaoLi.textContent = 'instituição: ' + dados.nomeInstituicao;
  var nomeCursoLi = document.createElement('li');
  nomeCursoLi.textContent = dados.nomeCurso;
  var tipoDeCursoLi = document.createElement('li');
  tipoDeCursoLi.textContent = 'tipo de curso: ' + dados.tipoCurso;
  var areaCursoLi = document.createElement('li');
  areaCursoLi.textContent = 'área do curso: ' + dados.areaCurso;
  var tituloCard = document.createElement('h2');
  tituloCard.textContent = dados.nomeCurso;
  tituloCard.setAttribute("class", "titulosH3");

  listaUl.appendChild(dataInicioLi);
  listaUl.appendChild(dataFimLi);
  listaUl.appendChild(instituicaoLi);
  listaUl.appendChild(tipoDeCursoLi);
  listaUl.appendChild(areaCursoLi);

  var divGroupBtn = document.createElement('div');
  divGroupBtn.className = 'groupBtn btnArea';
  divGroupBtn.id = 'btnArea';

  var botaoEditar = document.createElement('button');
  botaoEditar.type = 'submit';
  botaoEditar.className = 'formBtn';
  botaoEditar.textContent = 'editar';

  var botaoExcluir = document.createElement('button');
  botaoExcluir.type = 'submit';
  botaoExcluir.className = 'formBtn';
  botaoExcluir.textContent = 'excluir';

  divGroupBtn.appendChild(botaoEditar);
  divGroupBtn.appendChild(botaoExcluir);
  cardDetalhes.appendChild(tituloCard);
  cardDetalhes.appendChild(listaUl);
  cardDetalhes.appendChild(divGroupBtn);

  return cardDetalhes;
}

function recuperarDados(formId) {
  var dados = localStorage.getItem(formId);

  if (dados) {
    return JSON.parse(dados);
  } else {
    return [];
  }
}

document.addEventListener("DOMContentLoaded", function (e) {
  var dados = recuperarDados('form3'); // Recupera os dados do localStorage

  // Inverte a ordem dos dados
  dados.reverse();

  for (var i = 0; i < dados.length; i++) {
    var card = criarCardQualificacao(dados[i]);
    listaQualificacoes.appendChild(card);
  }

  e.preventDefault();
});

btnSalvarQualif.addEventListener('click', function (e) {
  e.preventDefault();

  var dados = recuperarDados('form3'); // Recupera os dados do localStorage

  var qualificacao = {
    inicioCurso: inicioCurso.value,
    fimCurso: fimCurso.value,
    nomeInstituicao: nomeInstituicao.value,
    nomeCurso: nomeCurso.value,
    tipoCurso: tipoDeCurso.value,
    areaCurso: areaCurso.value
  };

  dados.push(qualificacao);

  localStorage.setItem('form3', JSON.stringify(dados));

  var card = criarCardQualificacao(qualificacao);
  listaQualificacoes.insertBefore(card, listaQualificacoes.firstChild);

  formQualificacoes.reset();
});
