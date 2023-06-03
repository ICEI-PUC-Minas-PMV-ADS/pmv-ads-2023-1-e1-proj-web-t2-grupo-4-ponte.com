
// dados do formulario de prioridades
const formInteresses = document.querySelector("#cadastroInteresses");
const campoInteresse = document.querySelector("#campoInteresse");
const campoPrioridade = document.querySelector("#campoPrioridade");
const valorPrioridade = document.querySelector("#valorPrioridade");
const btnInteressesLimpar = document.querySelector("#limpar");
const btnInteressesAdicionar = document.querySelector("#adicionar");
const tabelaInteresses = document.querySelector("#tabelaInteresses");
// fim da entrada de dados do formulario prioridades


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
  inputs[0].value = "";
  inputs[1].value = 1;
  if(form.id == "cadastroInteresses"){

    limpaPrioridade();

  }

}

function criarLinhaInteresse(){//cria para o formulario de interesses uma linha e captura os valores inseridos
  let linha = document.createElement('tr');
  linha.setAttribute("class","linha");

  let interesse = document.createElement('td');
  let prioridade = document.createElement('td');
  let linhaIconExcluir = document.createElement('td');
  let iconClass = document.createElement('i');
  iconClass.setAttribute("class","fa-solid fa-trash");
  linhaIconExcluir.appendChild(iconClass);

  interesse.innerText = campoInteresse.value;
  prioridade.innerText = campoPrioridade.value;



  linha.appendChild(interesse);
  linha.appendChild(prioridade);
  linha.appendChild(linhaIconExcluir);

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

// console.log(contInteresses);
