// dados e campos do formulário de informações do usuário


const formUsuario = document.querySelector("#formInfBasica");
const campoNomeUsuario = document.querySelector("#nomeUsuario");
const campoSenhaUsuario = document.querySelector("#senhaUsuario");
const campoBioUsuario = document.querySelector("#textoBiografia");
const campoEmailUsuario = document.querySelector("#emailUsuario");
const imagemPerfil = document.querySelector("#imagemPerfil");
const btnSalvarUser = document.querySelector("#salvarUser");
const btnResetFormUser = document.querySelector("#resetFormUser");
const fr = new FileReader();


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


// fim da entrada de dados do formulario de cadastro de experiencias


//Campos do formulario de qualificações
  const formQualificacoes = document.querySelector("#qualificacoes");
  const nomeCurso = document.querySelector("#nomeCurso");
  const tipoCurso = document.querySelector("#tipoCurso");
  const nomeInstituicao = document.querySelector("#nomeInstituicao");
  const areaCurso = document.querySelector("#areaCurso");
  const inicioCurso = document.querySelector("#inicioCurso");
  const fimCurso = document.querySelector("#fimCurso");
  const btnSalvarCurso = document.querySelector("#btnSalvarCurso");
  const listaQualificacoes = document.querySelector("#listaQualificacoes");

//Fim do campo do formulario de qualificações

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

  let divInteresse = document.createElement('div');
  divInteresse.setAttribute("class","cardInteresse");
  divInteresse.setAttribute("id","cardInteresse");

  let ulInteresse = document.createElement('ul');

  let liInteresse = document.createElement('li');

  let liPrioridade = document.createElement('li');

  let liBotao = document.createElement('li');

  let btnExcluir = document.createElement('button');
  btnExcluir.innerText = "excluir";
  btnExcluir.setAttribute("class","formBtn");

  liBotao.appendChild(btnExcluir);
  liInteresse.innerText = campoInteresse.value;
  liPrioridade.innerText = campoPrioridade.value;
  // btnExcluir.setAttribute("id", "#excluirLinhaBtn");

  ulInteresse.appendChild(liInteresse);
  ulInteresse.appendChild(liPrioridade);
  ulInteresse.appendChild(liBotao);


  divInteresse.appendChild(ulInteresse);




    return (divInteresse);
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
  let liSpanDe = document.createElement("span");
  let liSpanAte = document.createElement("span");

  titulo.setAttribute("class", "titulosH3");
  divGroupBtn.setAttribute("id","btnArea");

  divDetalhes.setAttribute("class","listaDetalhes");
  divDetalhes.setAttribute("class","listaDetalhes");
  campoDetalhe.setAttribute("class", ".campoDetalhe");
  divGroupBtn.setAttribute("class", "groupBtn");
  btnEditar.setAttribute("class", "formBtn");
  btnExcluir.setAttribute("class", "formBtn");



  liSpanDe.innerText ="de:";
  liSpanAte.innerText ="até:"

  liPeriodoInicio.appendChild(liSpanDe);
  liPeriodoFim.appendChild(liSpanAte);

  liPeriodoInicio.innerText = "De:  "+ campoInicioPeriodoAtuacao.value;
  liPeriodoFim.innerText = "Até:  "+campoFimPeriodoAtuacao.value;
  liLocal.innerText ="Local de atuação:  "+ campoLocalAtuacao.value;
  liCargo.innerText ="Cargo ocupado:  "+ campoCargoAtuacao.value;
  liDescricao.innerText ="Descrição das atividades:  " +campoDescricaoAtuacao.value;

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


  campoDetalhe.setAttribute("classe","cardExp");
  campoDetalhe.setAttribute("id","cardExp")
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



    if(!window.localStorage.valores && !window.localStorage.prioridades){
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


function salvarDadosDoFormQualificacoes(formulario){

  let nomeCurso = formulario.querySelector("#nomeCurso").value;
  let tipoCurso = formulario.querySelector("#tipoCurso").value;
  let nomeInstituicao = formulario.querySelector("#nomeInstituicao").value;
  let areaCurso = formulario.querySelector("#areaCurso").value;
  let dataInicio = formulario.querySelector("#inicioCurso").value;
  let dataFim = formulario.querySelector("#fimCurso").value;

  let nomesCursos = [];
  let tiposCursos = [];
  let nomesInstituicoes = [];
  let areasCursos = [];
  let datasInicio = [];
  let datasFim = [];


  if(!window.localStorage.nomesCursos
      && !window.localStorage.tiposCursos
      && !window.localStorage.nomesInstituicoes
      && !window.localStorage.areasCursos
      && !window.localStorage.datasInicio
      && !window.localStorage.datasFim
    ){
          let nomesCursos = [];
          let tiposCursos = [];
          let nomesInstituicoes = [];
          let areasCursos = [];
          let datasInicio = [];
          let datasFim = [];

        window.localStorage.nomesCursos = [];
        window.localStorage.tiposCursos = [];
        window.localStorage.nomesInstituicoes = [];
        window.localStorage.areasCursos = [];
        window.localStorage.datasInicio = [];
        window.localStorage.datasFim = [];
    }else{
      nomesCursos = JSON.parse(window.localStorage.nomesCursos);
      tiposCursos = JSON.parse(window.localStorage.tiposCursos);
      nomesInstituicoes = JSON.parse(window.localStorage.nomesInstituicoes);
      areasCursos = JSON.parse(window.localStorage.areasCursos);
      datasInicio = JSON.parse(window.localStorage.datasInicio);
      datasFim = JSON.parse(window.localStorage.datasFim);
    }


      // valores.push(valorInteresse);
      // window.localStorage.valores = JSON.stringify(valores);
      // prioridades.push(prioridadeInteresse);
      // window.localStorage.prioridades = JSON.stringify(prioridades);

  // console.log(nomeCurso);
  // console.log(tipoCurso);
  // console.log(nomeInstituicao);
  // console.log(areaCurso);
  // console.log(dataInicio);
  // console.log(dataFim);

    nomesCursos.push(nomeCurso);
    window.localStorage.nomesCursos = JSON.stringify(nomesCursos);
    tiposCursos.push(tipoCurso);
    window.localStorage.tiposCursos = JSON.stringify(tiposCursos);
    nomesInstituicoes.push(nomeInstituicao);
    window.localStorage.nomesInstituicoes = JSON.stringify(nomesInstituicoes);
    areasCursos.push(areaCurso);
    window.localStorage.areasCursos = JSON.stringify(areasCursos);
    datasInicio.push(dataInicio);
    window.localStorage.datasInicio = JSON.stringify(datasInicio);
    datasFim.push(dataFim);
    window.localStorage.datasFim = JSON.stringify(datasFim);


}


function lerImagemPerfil(){

  imagemPerfil.addEventListener("change", function(e){
  const fr = new FileReader();
  fr.readAsDataURL(imagemPerfil.files[0]);
  fr.addEventListener("load", function(e){
    const url = fr.result;
    return (url);
  });


    e.preventDefault();
  });
}

function salvarDadosUser(formulario){


    let nomeUsuario = formulario.querySelector("#nomeUsuario").value;
    let emailUsuario = formulario.querySelector("#emailUsuario").value;
    let senhaUsuario = formulario.querySelector("#senhaUsuario").value;
    let bioUsuario = formulario.querySelector("#textoBiografia").value;
    // let imagemPerfil = lerImagemPerfil();

    let nomes= [];
    let emails = [];
    let senhas = [];
    let bios = [];
    // let imgsP = [];

    if(
        !window.localStorage.nomes
        && !window.localStorage.emails
        && !window.localStorage.senhas
        && !window.localStorage.bios
        && !window.localStorage.imgsP
      ){

        window.localStorage.nomes = nomes;
        window.localStorage.emails = emails;
        window.localStorage.senhas = senhas;
        window.localStorage.bios = bios;
        // window.localStorage.imgsP = imgsP;

    }else{

        nomes = JSON.parse(window.localStorage.nomes);
        emails = JSON.parse(window.localStorage.emails);
        senhas = JSON.parse(window.localStorage.senhas);
        bios = JSON.parse(window.localStorage.bios);
        // imgsP = JSON.parse(window.localStorage.imgsP);
    }




   nomes.push(nomeUsuario);
   window.localStorage.nomes = JSON.stringify(nomes);
   emails.push(emailUsuario);
   window.localStorage.emails = JSON.stringify(emails);
   senhas.push(senhaUsuario);
   window.localStorage.senhas = JSON.stringify(senhas);
   bios.push(bioUsuario);
   window.localStorage.bios = JSON.stringify(bios);
  //  imgsP.push(imagemPerfil);
  //  window.localStorage.imgsP = JSON.stringify(imgsP);



    return(true);

}


function criarDivListaQualif(){

  let divContainer = document.createElement("div");
  divContainer.setAttribute("id", "cardCurso");
  divContainer.setAttribute("class", "campoDetalhe");

  let tituloH2 = document.createElement("h2");
  tituloH2.setAttribute("class", "titulosH3");
  tituloH2.innerText = nomeCurso.value;

  let ulDados = document.createElement("ul");

  let liPeriodoInicio = document.createElement("li");
  let liPeriodoFim = document.createElement("li");
  let liInstituicao = document.createElement("li");
  let liAreaCurso = document.createElement("li");
  let liTipoCurso = document.createElement("li");


  liPeriodoInicio.innerText ="de: "+ inicioCurso.value;
  liPeriodoFim.innerText = "até: "+fimCurso.value;
  liTipoCurso.innerText ="tipo de curso: "+ tipoCurso.value
  liInstituicao.innerText = "instituição: "+nomeInstituicao.value;
  liAreaCurso.innerText ="área: "+ areaCurso.value;



  ulDados.appendChild(liPeriodoInicio);
  ulDados.appendChild(liPeriodoFim);
  ulDados.appendChild(liTipoCurso);
  ulDados.appendChild(liInstituicao);
  ulDados.appendChild(liAreaCurso);



  let divBtn = document.createElement("div");
  divBtn.setAttribute("class", "groupBtn");
  divBtn.setAttribute("class", "btnArea");
  divBtn.setAttribute("id","btnArea");

  let btnEditar = document.createElement("button");
  btnEditar.innerText ="editar";
  btnEditar.setAttribute("class", "formBtn");
  let btnExcluir = document.createElement("button");
  btnExcluir.setAttribute("class", "formBtn");
  btnExcluir.innerText = "excluir";

  btnEditar.setAttribute("type", "submit");
  btnExcluir.setAttribute("type", "submit");

  divBtn.appendChild(btnEditar);
  divBtn.appendChild(btnExcluir);

  divContainer.appendChild(tituloH2);
  divContainer.appendChild(ulDados);
  divContainer.appendChild(divBtn);

  return(divContainer);
}

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//Fluxo Principal<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<FLUXO PRINCIPAL
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


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

//está criando os campos e inserindo na tabela, falta local Storage
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


//guardar no localStorage os dados do usuário falta a imagem
btnSalvarUser.addEventListener("click",function(e){
  let campoVazio = verificarCamposVazios(formUsuario);
  let dadosSalvos = salvarDadosUser(formUsuario);

  if(campoVazio){

    mostrarAlertaParaCampoVazio(campoVazio);
    campoVazio.addEventListener("click", function(e){
    retiraAlertaParaCampoVazio(campoVazio);
    e.preventDefault()});

  }else{

    salvarDadosUser(formUsuario);
    alert("Dados Salvos");

  }
  e.preventDefault();
})


btnSalvarCurso.addEventListener("click",function(e){

  let campoVazio = verificarCamposVazios(formQualificacoes);

  if(campoVazio){
     mostrarAlertaParaCampoVazio(campoVazio);
     campoVazio.addEventListener("click", function(e){
     retiraAlertaParaCampoVazio(campoVazio);
     e.preventDefault();
  });

  }else{

    let divCriada = criarDivListaQualif();
    if(!divCriada){
     console.log("erro na criação da div");
    }else{
      listaQualificacoes.appendChild(divCriada);
      salvarDadosDoFormQualificacoes(formQualificacoes);
    }
  }

  e.preventDefault();
});
