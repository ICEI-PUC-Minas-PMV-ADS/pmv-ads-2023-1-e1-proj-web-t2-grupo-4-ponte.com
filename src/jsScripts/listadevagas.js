/* function gerarVagas() {
  var vagasAbertas = [
    {
      nomeVaga: "Social Media",
      localVaga: "Boa Viagem",
      periodoVaga: "10/06/23 - 10/06/24",
      descricaoVaga:
        "Estamos em busca de uma pessoa criativa e engajada para gerenciar nossas redes sociais, criar conteúdos relevantes e impactantes, e promover nossa causa animal. Se você é apaixonado(a) por animais e tem habilidades em marketing digital, essa vaga é para você!",
    },
    // Adicione mais objetos de vaga aqui, se necessário
  ];

  var listaVagas = document.querySelector(".listadevagas");

  vagasAbertas.forEach(function (vaga) {
    var vagaHTML = `
      <hr>
      <div class="campo-vagas">
        <h2>${vaga.nomeVaga}</h2>
        <ul>
          <li>período: ${vaga.periodoVaga}</li>
          <li>local: ${vaga.localVaga}</li>
          <li>descrição: ${vaga.descricaoVaga}</li>
        </ul>            
      </div>`;

    listaVagas.innerHTML += vagaHTML;
  });
} */

let listadevagas = [
  {
    ONG: "Quatro Patas",
    nomeVaga: "Social Media",
    localVaga: "Boa Viagem",
    periodoVaga: "10/06/23 - 10/06/24",
    descricaoVaga:
      "Estamos em busca de uma pessoa criativa e engajada para gerenciar nossas redes sociais, criar conteúdos relevantes e impactantes, e promover nossa causa animal. Se você é apaixonado(a) por animais e tem habilidades em marketing digital, essa vaga é para você!",
  },
  {
    ONG: "Quatro Patas",
    nomeVaga: "Financeiro",
    localVaga: "Boa Viagem",
    periodoVaga: "10/06/23 - 10/06/24",
    descricaoVaga:
      "Estamos montando uma equipe financeira para cuidar das finanças da ONG. Se você possui experiência na área financeira, tem habilidades em gestão financeira e quer contribuir com a causa animal, venha fazer parte do nosso time!",
  },
  {
    ONG: "Quatro Patas",
    nomeVaga: "Voluntário de Eventos",
    localVaga: "Boa Viagem",
    periodoVaga: "10/06/23 - 10/06/24",
    descricaoVaga:
      "Precisamos de pessoas voluntárias para auxiliar na produção dos eventos solidários realizados pela ONG. Se você gosta de trabalhar em equipe, tem habilidades em organização e quer contribuir para o sucesso dos nossos eventos, venha fazer parte do nosso time!",
  },
  {
    ONG: "Amigos dos Animais",
    nomeVaga: "Assistente Administrativo",
    localVaga: "Cidade",
    periodoVaga: "01/07/23 - 01/07/24",
    descricaoVaga:
      "Estamos em busca de um(a) assistente administrativo(a) para auxiliar nas atividades do escritório da ONG. Se você tem habilidades organizacionais e deseja contribuir para a causa animal, junte-se a nós!",
  },
  {
    ONG: "Amigos dos Animais",
    nomeVaga: "Voluntário de Limpeza",
    localVaga: "Cidade",
    periodoVaga: "01/07/23 - 01/07/24",
    descricaoVaga:
      "Precisamos de voluntários(as) para ajudar na limpeza dos abrigos de animais. Se você é uma pessoa dedicada e quer fazer a diferença na vida dos nossos amigos de quatro patas, venha nos ajudar!",
    requisitosVaga:
      "Disponibilidade de horário. Comprometimento com a limpeza e organização dos abrigos.",
  },
  {
    ONG: "Educa+",
    nomeVaga: "Professor(a) de Matemática",
    localVaga: "Cidade",
    periodoVaga: "01/07/23 - 01/07/24",
    descricaoVaga:
      "Estamos em busca de um(a) professor(a) de matemática para ministrar aulas de reforço escolar. Se você é apaixonado(a) pela área da educação e tem habilidades em ensino, venha fazer parte da nossa equipe!",
  },
  {
    ONG: "Educa+",
    nomeVaga: "Voluntário(a) de Apoio",
    localVaga: "Cidade",
    periodoVaga: "01/07/23 - 01/07/24",
    descricaoVaga:
      "Precisamos de voluntários(as) para auxiliar nas atividades educacionais, como apoio aos professores, organização de materiais e suporte administrativo. Se você deseja contribuir para a educação e tem disponibilidade de horário, junte-se a nós!",
  },
  {
    ONG: "Hospital Solidário",
    nomeVaga: "Enfermeiro(a)",
    localVaga: "Cidade",
    periodoVaga: "01/07/23 - 01/07/24",
    descricaoVaga:
      "Estamos em busca de um(a) enfermeiro(a) para atuar em nossa equipe. Se você é apaixonado(a) pela área da saúde, tem habilidades em cuidados médicos e deseja fazer a diferença, venha fazer parte do nosso time!",
  },
  {
    ONG: "Hospital Solidário",
    nomeVaga: "Voluntário(a) de Apoio",
    localVaga: "Cidade",
    periodoVaga: "01/07/23 - 01/07/24",
    descricaoVaga:
      "Precisamos de voluntários(as) para auxiliar nas atividades de apoio aos pacientes, organização de materiais e suporte administrativo. Se você tem interesse pela área da saúde e deseja ajudar, junte-se a nós!",
  },
  {
    ONG: "Natureza Viva",
    nomeVaga: "Voluntário(a) de Educação Ambiental",
    localVaga: "Cidade",
    periodoVaga: "01/07/23 - 01/07/24",
    descricaoVaga:
      "Estamos em busca de voluntários(as) para atuar na educação ambiental, ministrando palestras, organizando eventos e desenvolvendo materiais educativos. Se você é apaixonado(a) pela natureza e deseja transmitir conhecimentos, junte-se a nós!",
  },
  {
    ONG: "Natureza Viva",
    nomeVaga: "Coordenador(a) de Projetos",
    localVaga: "Cidade",
    periodoVaga: "01/07/23 - 01/07/24",
    descricaoVaga:
      "Estamos procurando um(a) coordenador(a) de projetos para liderar nossas iniciativas ambientais. Se você tem experiência em gestão de projetos e paixão pelo meio ambiente, venha fazer parte da nossa equipe!",
  },
  {
    ONG: "Direitos em Ação",
    nomeVaga: "Assistente Social",
    localVaga: "Cidade",
    periodoVaga: "01/07/23 - 01/07/24",
    descricaoVaga:
      "Estamos em busca de um(a) assistente social para atuar no atendimento e suporte às pessoas atendidas pela ONG. Se você é formado(a) em Serviço Social e tem paixão pelos direitos humanos, venha fazer parte da nossa equipe!",
  },
  {
    ONG: "Direitos em Ação",
    nomeVaga: "Voluntário(a) de Comunicação",
    localVaga: "Cidade",
    periodoVaga: "01/07/23 - 01/07/24",
    descricaoVaga:
      "Precisamos de voluntários(as) para auxiliar nas atividades de comunicação da ONG, como produção de conteúdo, gestão de redes sociais e elaboração de materiais informativos. Se você tem habilidades em comunicação e quer contribuir com os direitos humanos, junte-se a nós!",
  },
  {
    ONG: "Mãos Solidárias",
    nomeVaga: "Assistente Social",
    localVaga: "Cidade",
    periodoVaga: "01/07/23 - 01/07/24",
    descricaoVaga:
      "Estamos em busca de um(a) assistente social para realizar atendimentos e acompanhamentos individuais junto às pessoas em situação de rua, auxiliando na busca por soluções e na reintegração social. Se você tem formação em Serviço Social e deseja fazer parte dessa transformação, junte-se a nós!",
  },
  {
    ONG: "Esporte para Todos",
    nomeVaga: "Instrutor(a) de Esportes",
    localVaga: "Cidade",
    periodoVaga: "01/08/23 - 01/08/24",
    descricaoVaga:
      "Estamos em busca de um(a) instrutor(a) de esportes para ministrar aulas e coordenar atividades esportivas em nossa ONG. Se você é apaixonado(a) por esportes, possui conhecimento em diversas modalidades e deseja fazer a diferença na vida de crianças e jovens, essa vaga é para você!",
  },
  {
    ONG: "Crianças Felizes",
    nomeVaga: "Educador(a) Social",
    localVaga: "Cidade",
    periodoVaga: "01/08/23 - 01/08/24",
    descricaoVaga:
      "Estamos em busca de um(a) educador(a) social para atuar diretamente com as crianças, desenvolvendo atividades educativas, recreativas e de apoio emocional. Se você é apaixonado(a) por trabalhar com crianças, tem habilidades de comunicação e empatia, essa vaga é para você!",
  },
  {
    ONG: "Cuidado e Carinho",
    nomeVaga: "Voluntário de Recreação",
    localVaga: "Cidade",
    periodoVaga: "01/08/23 - 01/08/24",
    descricaoVaga:
      "Estamos em busca de voluntários para ajudar nas atividades recreativas com os idosos, como jogos, música, dança e leitura. Se você tem afinidade com idosos, é criativo, paciente e gosta de proporcionar momentos de alegria, essa vaga é para você!",
  },
];

localStorage.setItem("listadevagas", JSON.stringify(listadevagas));

/* Teste Filtrar */
/* var estadosFiltrados = estadosJSON.estados.filter(function(estado) {
  return estado.sigla.startsWith("A");
});

console.log(estadosFiltrados); */

/*  */

/* var vagasCE = listadevagas.filter(function(vaga) {
  return vaga.localVaga === "CE";
});

console.log(vagasCE);
 */