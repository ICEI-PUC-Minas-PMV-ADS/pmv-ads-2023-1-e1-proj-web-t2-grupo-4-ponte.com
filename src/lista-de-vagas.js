/* const ulrUF = 'https://servicodados.ibg.gov.br/api/v1/localidade/estados'
const cidade = document.getElementById("cidade")
const uf = document.getElementById("uf")

uf.addEventListener('change', async function(){
  const urlCidades = 'https://servicodados.ibge.gov.br/api/v1/localidade/estados/'+uf.value+'municipios'
  const request = await fetch(urlCidades)
  constresponse = await request.json()

  Let options = ''
  response.forEach(function(cidade){
    options += '<option>'+cidades.nome+'</option>'
  })
  cidade.innerHTML = options
})

window.addEventiListener('load', async ()=>{
  const request =await fetch(ulrUF)
  const response = await request.jason()

  const options = document.createElement("optgroup")
  options.setaAttribute('label','UFs')
  response.forEach(function(uf){
    options.innerHTML += '<option>'+uf.sigla+'</option>'
  }) */