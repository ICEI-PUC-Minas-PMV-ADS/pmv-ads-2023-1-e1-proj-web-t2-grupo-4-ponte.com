# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="01-Documentação de Contexto.md"> Documentação de Contexto</a></span>

A definição do problema e dos pontos a serem tratados neste projeto foram consolidados em um trabalho de imersão feito pelos membros da equipe, a partir da observação de possíveis usuários. Os detalhes levantados foram traduzidos na forma de personas e histórias de usuários. 

## Personas

### Joana Drupe

![JoanaDrupe](https://user-images.githubusercontent.com/127978114/233849978-b1b48294-791a-4dc9-9931-2f1c59688431.png)

> 32 anos, Advogada.

|                   |                                                                                                              |
| ----------------- | ------------------------------------------------------------------------------------------------------------ |
| **Motivações:**       | Me encontrei no trabalho voluntário. Participei de projetos sociais com moradores de rua e crianças em vulnerabilidade social. Meu foco é contribuir para um mundo melhor e ser exemplo para os demais |
| **Frustrações:** | Formada em Direito, ao atuar na área acabei percebendo que não estava realizada e sentia que precisava de algo mais                          |
| **Hobbies, História:**      | Aos 30 anos conheci um projeto que leva refeições para pessoas em situação de rua. Além de participar das dinâmicas, entrei na equipe de comunicação da ONG, fazendo postagem para redes sociais. Até hoje sou ativa, mas também colaboro com o trabalho de outras organizações                       |

### Daniel Garcia

![DanielGarcia](https://user-images.githubusercontent.com/127978114/233851557-f8130be2-f1e0-4be2-ace2-b3c4386bac86.png)

> 40 anos, Médico Veterinário.

|                   |                                                                                                              |
| ----------------- | ------------------------------------------------------------------------------------------------------------ |
| **Motivações:**       | Defensor da causa animal. Fundei uma organização sem fins lucrativos para resgatar animais de rua e em estado de risco |
| **Frustrações:** | Não conseguir ajudar todos os animais e pessoas em situações críticas                          |
| **Hobbies, História:**      | Adoro ajudar o próximo e gosto de trabalhar em equipe. Depois de atuar muitos anos em clínicas veterinárias decidi me dedicar integralmente a esta causa                       |  

## Histórias de Usuários

A partir da compreensão do cotidiano das personas identificadas para o projeto, foram registradas as seguintes histórias de usuários: 

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Joana (Voluntário)  | Encontrar ONGs que estejam precisando de voluntários            | poder escolher uma e me alistar como colaboradora               |
|Joana (Voluntário)      | Criar um perfil que contenha minhas habilidades e minha disponibilidade para voluntariado                  | ONGs que estejam precisando de trabalho como o que faço possam me encontrar |
|Daniel Garcia (ONG)       | Divulgar o trabalho da minha ONG e as oportunidades de colaboração                   | encontrar voluntários capacitados e com disponibilidade |
|Daniel Garcia (ONG)       | Ter a possibilidade de entrar em contato com outras ONGs                   | fazer parcerias com outras instituições   |


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Possibilitar a pesquisa de novas ONGs | ALTA | 
|RF-002| Apresentar o perfil das ONGs com informações como causas defendidas, projetos realizados, vagas para voluntariado, endereço e contato   | ALTA |
|RF-003| Possibilitar a criação de perfil de voluntários com informações como causas defendidas, capacitações, disponibilidade para voluntariado e contato   | ALTA |
|RF-004| Permitir que o cliente tenha meio de contato direto com as ONGs ou voluntários escolhidos   | BAIXA |
|RF-005| Possuir um filtro para perfil de voluntários a ser utilizado pelas ONGs  | ALTA |
|RF-006| Possuir um filtro para perfil de ONGs e trabalhos voluntários disponíveis, a ser utilizado pelos voluntários   | ALTA |
|RF-007| Permitir ao voluntário o compartilhamento de candidaturas de trabalhos voluntários em suas redes sociais   | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em dispositivos móveis | ALTA | 
|RNF-002| O site deve ser publicado em um ambiente acessível publicamente na internet  |  ALTA | 
|RNF-003| O site deve ser compatível com os principais navegadores do mercado  |  ALTA | 
|RNF-004| O site deve ter bom nível de contraste entre os elementos da tela em conformidade  |  MÉDIA |


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir:

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue no final do semestre letivo, não podendo extrapolar a data proposta |
|02| O aplicativo deve se restringir às tecnologias básicas da Web no Front-end        |
|03| A equipe não pode subcontratar o desenvolvimento do trabalho        |
