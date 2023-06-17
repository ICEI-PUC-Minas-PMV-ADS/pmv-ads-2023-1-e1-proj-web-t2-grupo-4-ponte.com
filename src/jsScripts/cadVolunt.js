const formInteresses = document.querySelector("#formInteresses");
const formInformacoes = document.querySelector("#formInfBasica");
const formQualificacoes = document.querySelector("#qualificacoes");
const interesse = document.querySelector("#campoInteresse");
const prioridade = document.querySelector("#campoPrioridade");
const btnSalvar = document.querySelector("#salvarUser");






function salvarFormulario(formulario) {
  // Captura os valores já existentes no localStorage
  var dadosExistentes = localStorage.getItem('dadosFormulario');

  // Verifica se existem dados no localStorage
  var dados = dadosExistentes ? JSON.parse(dadosExistentes) : [];

  // Objeto para armazenar os valores capturados do formulário
  var valores = {};

  // Captura todos os elementos de input e textarea do formulário
  var inputs = formulario.getElementsByTagName('input');
  var textareas = formulario.getElementsByTagName('textarea');

  // Itera sobre os inputs e armazena os valores no objeto
  for (var i = 0; i < inputs.length; i++) {
    var input = inputs[i];
    valores[input.name] = input.value;
  }

  // Itera sobre as textareas e armazena os valores no objeto
  for (var j = 0; j < textareas.length; j++) {
    var textarea = textareas[j];
    valores[textarea.name] = textarea.value;
  }

  // Adiciona o objeto de valores ao array de dados
  dados.push(valores);

  // Converte o array de dados em uma string JSON
  var dadosJSON = JSON.stringify(dados);

  // Armazena a string JSON no localStorage
  localStorage.setItem('dadosFormulario', dadosJSON);
}



//SALVA NO LOCALSTORAGE OS DADOS DO FORMULÀRIO DE INFORMAÇÕES
btnSalvar.addEventListener("click", function(e){

     salvarFormulario(formInformacoes);


    e.preventDefault();

})
