
# Projeto de Interface

<span style="color:red">Pré-requisitos: <a href="02-Especificação do Projeto.md"> Documentação de Especificação</a></span>

<div align="justify">
 
A interface da aplicação foi projetada a partir das histórias de usuários, de forma a atender os requisitos funcionais e não funcionais abordados na <a href="02-Especificação do Projeto.md"> Documentação de Especificação</a>.
 
</div>

## User Flow

<div align="justify">
 
A plataforma possui dois tipos centrais de usuário: os voluntários e as ONGs. Da mesma forma, o fluxo de interação é dividido no uso específico de cada uma das personas. *Todas as páginas possuem retorno direto para as demais páginas da aplicação, a pertir do menu de navegação superior*. As telas serão detalhadas a seguir, na seção de Wireframes.

 </div>
 
> **CADASTRO**
<div align="center">

<img width="800" src="img/userflowCadastro.png">
 
</div>

<div align="justify">
 
O primeiro fluxo desenhado é também o primeiro fluxo executado no uso da aplicação, a etapa de cadastro. O usuário que deseja se voluntariar a trabalhos sociais possui formulário de cadastro diferente do usuário que deseja cadastrar sua ONG no site. Além disso, o usuário do tipo ONG possui uma página de cadastro de anúncio de vagas.
 
</div>

> **USO PADRÃO VOLUNTÁRIO**

<div align="center">

<img width="600" src="img/userflowPadraoVol.png">
 
</div>

<div align="justify">
 
O fluxo de interação do usuário voluntário inclui a personalização de seu perfil e a busca por vagas de voluntariado e por ONGs.

 </div>
 
> **USO PADRÃO ONG**
 
<div align="center">
 
<img width="600" src="img/userflowPadraoONG.png">
 
 </div>

<div align="justify">
 
Já o fluxo de interação do usuário ONG inclui a personalização de seu perfil, o anúncio de vagas e a busca por voluntários.
 
</div>

## Wireframes

A seguir, estão descritas as páginas da aplicação.

>**TELA 01 - Homepage** 

<div align="center"> 

<img width="300" src="https://user-images.githubusercontent.com/19398297/233782698-420826b0-7c0f-425f-a395-97b4b4a31034.png">

</div> 

<div align="justify">
 
A Homepage é a página que conterá a apresentação inicial do sistema para os usuários, tanto voluntários, quanto ONGs. O objetivo é que seja suscinta e simples, de modo que o usuário consiga facilmente entender do que se trata o site e se cadastrar utilizando, inicialmente, apenas um email e senha.
 
</div>


>**TELA 02 - Login**

<div align="center">

<img width="450" src="https://user-images.githubusercontent.com/19398297/233782905-56122e03-21c7-4447-91b1-78fe3bea832f.png">
 
</div>
<div align="justify">
 
Na página Login, o usuário precisará autenticar através de senha o seu acesso à plataforma. Deverá ser uma página simples, de modo que não haja qualquer dubiedade quanto aos locais de inserção de e-mail e senha.
 
</div>


>**TELA 03 - Formulário Cadastro ONG**

<div align="center">

<img width="300" src="https://user-images.githubusercontent.com/19398297/233783321-55ac401d-5771-4628-af5e-30774f302485.png">

</div>

<div align="justify">
 
O formulário detalhado para as ONGs é a página responsável pelo cadastro das informações específicas de cada ONG. Por exemplo, suas missões e áreas de atuação. Deverá, principalmente, capturar todas as informações necessárias para que as ONGs consigam descrever do que se tratam seus serviços prestados a sociedade.
 
</div>


>**TELA 04 - Formulário Cadastro Voluntário**

<div align="center">

<img width="300" src="https://user-images.githubusercontent.com/19398297/233783334-07e34ce4-e58a-4a7b-949b-648c3d70994d.png">
 
</div>

<div align="justify">
 
Do mesmo modo, o formulário detalhado para voluntários é a página onde o voluntário irá fornecer informações detalhadas sobre suas experiências e qualificações. O objetivo é gerar um currículo resumido que possa, depois, ser facilmente pesquisado e analisado pelas ONGs que estejam em busca de mão de obra.
 
</div>


>**TELA 05 - Feed**

<div align="center">

<img width="300" src="https://user-images.githubusercontent.com/19398297/233782775-ab63453f-5b2b-4ac2-86db-fb191f48d0c0.png">

</div>

<div align="justify">
 
Na página Feed, todos os post, tanto de voluntários, quanto de ONGs, podem ser visualizados em um feed de rolagem vertical. O Feed será, juntamente com os perfis, uma importante ferramenta de divulgação de ações. Deverá possibilitar comentários, curtidas e compartilhamentos.
 
</div>


>**TELA 06 - Perfil ONG**

<div align="center">

<img width="300" src="https://user-images.githubusercontent.com/19398297/233784303-bf8aca8e-b4e3-4029-be78-a479a6f5230f.png">
            
</div>

<div align="justify">
 
A página de Perfil de ONG será onde todas as ações das ONGs poderão ser postadas de modo a divulgar sua atuação. Também é onde poderá se encontrar as informações sobre a ONG. O perfil da ONG será sua principal ferramenta de divulgação.
 
</div>


>**TELA 07 - Perfil Voluntário**

<div align="center"> 

<img width="300" src="https://user-images.githubusercontent.com/19398297/233787332-a2db89f2-02f9-4345-a9d2-357c375e453e.png">
 
</div>

<div align="justify">
 
A página Perfil de Voluntário é onde todos os posts de divulgação das ações do voluntário poderão ser postados, e é onde também haverão algumas informações como, por exemplo, a bio do voluntário e seu currículo.
 
</div>


>**TELA 08 - Currículo Voluntário**

<div align="center">

<img width="300" src="https://user-images.githubusercontent.com/19398297/233783394-abee6eb7-be41-4e2d-8def-6f584a938ebf.png">

</div>

<div align="justify">
 
É a página que detalha as qualificações e aptidões dos voluntários, assim também como suas experiências de modo a deixar claro suas informações para que sejam pesquisadas por ONGs que estejam selecionando mão de obra.
 
</div>


>**TELA 09 - CRUD Anúncios de Vagas**

<div align="center">

<img width="300" src="https://user-images.githubusercontent.com/19398297/233783200-f6fcd588-3bc5-4932-919a-bac6b845011c.png">

</div>

<div align="justify">
 
A página CRUD para anúncios de vagas possibilitará para as ONGs a criação e a edição de seus anúncios de vagas.É a página onde serão cadastradas as vagas de voluntariado disponíveis.
 
</div>


>**TELA 10 - Lista de Vagas**

<div align="center">

<img width="300" src="https://user-images.githubusercontent.com/19398297/233782537-4d56aaeb-27a9-454d-9c73-f62d8dad880e.png">

</div>

<div align="justify">
 
Após o cadastro das vagas de voluntariado disponíveis, as mesmas ficarão dispostas em uma lista de vagas. Nesta página deverá ser possível, para os voluntários, pesquisar e filtrar os tipos de vagas que mais se adequem às sua habilidades e disponibilidades.
 
</div>


>**TELA 11 - Dashboard ONG**

<div align="center">

<img width="300" src="https://user-images.githubusercontent.com/19398297/233784588-7508cd8d-d971-4a69-8e71-11211395873c.png">

</div>

<div align="justify">
 
O Dashboard para ONGs é a página que fornecerá os dados de gestão de equipes e mão de obra para as ONGs.
 
</div>


>**TELA 12 - Dashboard Voluntário**

<div align="center">

<img width="300" src="https://user-images.githubusercontent.com/19398297/233784591-0df3334c-a813-4457-b877-8c7ba716d8ca.png">
 
</div>

<div align="justify">
 
O Dashboard para voluntários é a página onde constarão as atividades demandadas pelas ONGs aos seus voluntários. É onde o voluntário encontrará um sistema de gestão de suas tarefas para as vagas de voluntariado as quais aplicou.
 
</div>


>**TELA 13 - Lista de Amigos/Chat**

<div align="center">

<img width="300" src="https://user-images.githubusercontent.com/19398297/233784972-2cae57e9-6f2b-4bce-a489-cc66310c8151.png">
 
</div>

<div align="justify">
A lista de amigos e o chat compõem uma página onde tanto o voluntários, quanto ONGs podem interagir entre si através de conversa.
 
</div>
