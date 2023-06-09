// dados e campos do formulário de informações do usuário


const formUsuario = document.querySelector("#formInfBasica");
const campoNomeUsuario = document.querySelector("#nomeUsuario");
const campoBioUsuario = document.querySelector("#textoBiografia");
const imagemPerfil = document.querySelector("#imagemPerfil");
const btnSalvarUser = document.querySelector("#salvarUser");
const btnResetFormUser = document.querySelector("#resetFormUser");


// dados do formulario de prioridades
const formInteresses = document.querySelector("#cadastroInteresses");
const campoInteresse = document.querySelector("#campoInteresse");
const campoPrioridade = document.querySelector("#campoPrioridade");
const valorPrioridade = document.querySelector("#valorPrioridade");
const btnInteressesLimpar = document.querySelector("#limpar");
const btnInteressesAdicionar = document.querySelector("#adicionar");
const tabelaInteresses = document.querySelector("#tabelaInteresses");
const formBtnExcluirLinha = document.querySelector("#tabelaInteresses");
// fim da entrada de dados do formulario prioridades


// dados do formulario de cadastro de experiências

const formExperiencias = document.querySelector("#experiencias");
const campoAreaAtuacao = document.querySelector("#areaAtuacao");
const campoLocalAtuacao = document.querySelector("#localAtuacao");
const campoCargoAtuacao = document.querySelector("#cargoAtuacao");
const campoDescricaoAtuacao = document.querySelector("#descricaoAtuacao");
const campoInicioPeriodoAtuacao = document.querySelector("#inicioPeriodoAtuacao");
const campoFimPeriodoAtuacao = document.querySelector("#fimPeriodoAtuacao");
const btnFormXpSalvar = document.querySelector("#btnSalvar");
const btnFormXpLimpar = document.querySelector("#btnLimpar");
const listaDetalhes = document.querySelector("#listaDetalhes");

// console.log(listaDetalhes);
// fim da entrada de dados do formulario de cadastro de experiencias

function mostraPrioridade(campoPrioridade, valorPrioridade){

  valorPrioridade.innerText = campoPrioridade.value;

}

function limpaPrioridade(){
    let prior = document.querySelector("#valorPrioridade");
    prior.value = '1';
}

function limparCampos(form){
  let inputs = form.querySelectorAll("input");
    inputs[0].value = "";

      if(form.id == "cadastroInteresses"){
        inputs[1].value = 1;
        limpaPrioridade();

      }
}

function criarLinhaInteresse(){//cria para o formulario de interesses uma linha e captura os valores inseridos
  let linha = document.createElement('tr');
  linha.setAttribute("class","linha");

  let interesse = document.createElement('td');
  let prioridade = document.createElement('td');
  let linhaIconExcluir = document.createElement('td');
  let btnExcluir = document.createElement('button');

  btnExcluir.setAttribute("class","formBtn");
  btnExcluir.setAttribute("id", "#excluirLinhaBtn");
  btnExcluir.innerText = "excluir";

  interesse.innerText = campoInteresse.value;
  prioridade.innerText = campoPrioridade.value;

  linha.appendChild(interesse);
  linha.appendChild(prioridade);
  linha.appendChild(btnExcluir);



    return (linha);
}


function adicionarInteresse(){

  let linha = criarLinhaInteresse();
  let contInteresses = 0;
  tabelaInteresses.appendChild(linha);

  contInteresses += 1;

  return(contInteresses);

}


function excluirLinha(lista, e){  //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Deve excluir a linha quando clicar no botao excluir

 var elementoClicado = e.target;

  if(elementoClicado.classList.contains("formBtn")){
    let linha = elementoClicado.parentNode;
    linha.remove();
  }

}


function retiraAlertaParaCampoVazio(campoVazio){

  campoVazio.style.border="1px solid black";
  campoVazio.style.backgroundColor="#ffff";

}

function mostrarAlertaParaCampoVazio(campoVazio){

    alert("você precisa preencher todos os campos");
    campoVazio.style.backgroundColor ="#FFBEBE";
    campoVazio.style.borderColor ="#FB0A0A";

}



function verificarCamposVazios(formulario){ //Verifica se um campo de um form está vazio, se sim o retorna.

  let inputList = formulario.querySelectorAll('INPUT');
  let areaTexto = formulario.querySelectorAll("TEXTAREA");

    for(let i = 0; i<inputList.length; i++){
      if(inputList[i].value==""){

          return(inputList[i]);

      }else if(areaTexto[i] && areaTexto[i].value==""){

          return(areaTexto[i]);

      }else{

        return null;

      }
    }


}

function criarDivListaXP(){
  let divDetalhes = document.createElement("div");
  let campoDetalhe = document.createElement("div");
  let titulo = document.createElement("h2");
  let ul = document.createElement("ul");
  let liPeriodoInicio = document.createElement("li");
  let liPeriodoFim = document.createElement("li");
  let liLocal = document.createElement("li");
  let liCargo = document.createElement("li");
  let liDescricao = document.createElement("li");
  let divGroupBtn = document.createElement("div");
  let btnEditar = document.createElement("button");
  let btnExcluir = document.createElement("button");

  divDetalhes.setAttribute("class","listaDetalhes");
  campoDetalhe.setAttribute("class", ".campoDetalhe");
  divGroupBtn.setAttribute("class", "groupBtn");
  btnEditar.setAttribute("class", "formBtn");
  btnExcluir.setAttribute("class", "formBtn");


  liPeriodoInicio.innerText = campoInicioPeriodoAtuacao.value;
  liPeriodoFim.innerText = campoFimPeriodoAtuacao.value;
  liLocal.innerText = campoLocalAtuacao.value;
  liCargo.innerText = campoCargoAtuacao.value;
  liDescricao.innerText = campoDescricaoAtuacao.value;

  ul.appendChild(liPeriodoInicio);
  ul.appendChild(liPeriodoFim);
  ul.appendChild(liLocal);
  ul.appendChild(liCargo);
  ul.appendChild(liDescricao);

  btnEditar.innerText = "editar";
  btnExcluir.innerText = "excluir";
  divGroupBtn.appendChild(btnEditar);
  divGroupBtn.appendChild(btnExcluir);
  titulo.innerText = campoCargoAtuacao.value;
  campoDetalhe.appendChild(titulo);
  campoDetalhe.appendChild(ul)
  campoDetalhe.appendChild(divGroupBtn);

  // divDetalhes.appendChild(campoDetalhe);

  console.log(campoDetalhe);

  return(campoDetalhe);
}

function inserirDadosNaDiv(){

}



function salvarDadosDoFormInteresses(formulario){

    let valorInteresse = formulario.querySelector("#campoInteresse").value;
    let prioridadeInteresse = formulario.querySelector("#campoPrioridade").value;
    // let labels = formulario.querySelector("#prioridade").value;
    let valores =[];
    let prioridades = [];



    if(!window.localStorage.valores){
        valores = [];
        prioridades = [];
        window.localStorage.valores = [];
        window.localStorage.prioridades = [];

    }else{

      valores = JSON.parse(window.localStorage.valores);
      prioridades = JSON.parse(window.localStorage.prioridades);

    }

      valores.push(valorInteresse);
      window.localStorage.valores = JSON.stringify(valores);
      prioridades.push(prioridadeInteresse);
      window.localStorage.prioridades = JSON.stringify(prioridades);




}


//Fluxo Principal

mostraPrioridade(campoPrioridade, valorPrioridade); //Mostra e atualiza o número de prioridade do interesse conforme seleção do user.

campoPrioridade.addEventListener('input', ()=>{mostraPrioridade(campoPrioridade, valorPrioridade)}); // adiciona o evento input para o seletor range

btnInteressesLimpar.addEventListener("click",function(e){ //adiciona o evento click ao botão limpar
  limparCampos(formInteresses);

  e.preventDefault();
});

btnInteressesAdicionar.addEventListener('click', function(e){

  let campoVazio = verificarCamposVazios(formInteresses);

  if(campoVazio){

    mostrarAlertaParaCampoVazio(campoVazio);
    campoVazio.addEventListener("click", (e)=>{
    retiraAlertaParaCampoVazio(campoVazio);
    e.preventDefault();

  });

  }else{

     adicionarInteresse();
     salvarDadosDoFormInteresses(formInteresses);

  }

  e.preventDefault();
});

formBtnExcluirLinha.addEventListener("click", function(e){

    excluirLinha(tabelaInteresses, e);
    e.preventDefault();

});


btnFormXpSalvar.addEventListener("click", function(e){
  let campoVazio = verificarCamposVazios(formExperiencias);
  if(campoVazio){
      mostrarAlertaParaCampoVazio(campoVazio);
      campoVazio.addEventListener("click", function(e){
      retiraAlertaParaCampoVazio(campoVazio);
      e.preventDefault();
    });
  }
  let divCriada = criarDivListaXP();
  if(!divCriada){
    console.log("erro na criação da div");
  }else{
    listaDetalhes.appendChild(divCriada);
  }
  e.preventDefault();

});
