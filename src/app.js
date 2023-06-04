
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

// console.log(formBtnExcluirLinha);
// dados do formulario de cadastro de experiências

const campoAreaAtuacao = document.querySelector("#areaAtuacao");
const campoLocalAtuacao = document.querySelector("#localAtuacao");
const campoCargoAtuacao = document.querySelector("#cargoAtuacao");
const campoDescricaoAtuacao = document.querySelector("#descricaoAtuacao");
const campoInicioPeriodoAtuacao = document.querySelector("#inicioPeriodoAtuacao");
const campoFimPeriodoAtuacao = document.querySelector("#fimPeriodoAtuacao");
const btnFormXpSalvar = document.querySelector("#btnSalvar");
const btnFormXpLimpar = document.querySelector("#btnLimpar");


// fim da entrada de dados do formulario de cadastro de experiencias




function mostraPrioridade(campoPrioridade, valorPrioridade){
//   // console.log(campoPrioridade.value);
//   // console.log(valorPrioridade.innerText);
  valorPrioridade.innerText = campoPrioridade.value;

}

function limpaPrioridade(){
    let prior = document.querySelector("#valorPrioridade");
    prior.value = '1';
}

function limparCampos(form){
  let inputs = form.querySelectorAll("input");
  // let i =0;
  // let tamanho = toInt(inputs.length);
  console.log(inputs.length);

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
  // btnExcluir.setAttribute("class","formBtnExcluir");
  btnExcluir.setAttribute("id", "#excluirLinhaBtn");
  btnExcluir.innerText = "excluir";
  // iconClass.setAttribute("class","fa-solid fa-trash");
  // linhaIconExcluir.appendChild(iconClass);
  interesse.innerText = campoInteresse.value;
  prioridade.innerText = campoPrioridade.value;

  // console.log(btnExcluir);

  linha.appendChild(interesse);
  linha.appendChild(prioridade);
  linha.appendChild(btnExcluir);

  // console.log(linha);

    return (linha);
}


function adicionarInteresse(){

  let linha = criarLinhaInteresse();
  let contInteresses = 0;
  tabelaInteresses.appendChild(linha);
  console.log(linha);
  console.log(tabelaInteresses);
  contInteresses += 1;

  return(contInteresses);

}


function excluirLinha(lista, e){  //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Deve excluir a linha quando clicar na lixeira

 var elementoClicado = e.target;

  if(elementoClicado.classList.contains("formBtn")){
    let linha = elementoClicado.parentNode;
    linha.remove();
  }

}


//Fluxo Principal

mostraPrioridade(campoPrioridade, valorPrioridade); //Mostra e atualiza o número de prioridade do interesse conforme seleção do user.

campoPrioridade.addEventListener('input', ()=>{mostraPrioridade(campoPrioridade, valorPrioridade)}); // adiciona o evento input para o seletor range

btnInteressesLimpar.addEventListener("click",function(e){ //adiciona o evento click ao botão limpar
  limparCampos(formInteresses);

  e.preventDefault();
});

contInteresses = btnInteressesAdicionar.addEventListener('click', function(e){
  adicionarInteresse();
  e.preventDefault();
})


formBtnExcluirLinha.addEventListener("click", function(e){

    excluirLinha(tabelaInteresses, e);
    e.preventDefault();

})




// console.log(contInteresses);
