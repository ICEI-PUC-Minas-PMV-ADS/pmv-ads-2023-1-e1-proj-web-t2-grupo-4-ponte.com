//Cria lista de usuários
//// Os operadores (??) (?) e (:) substituem a formatação condicional
let sPerfilVol = localStorage.getItem("perfilVol") ?? "[]";
let perfilVol = JSON.parse(sPerfilVol);

//Função para gerar o perfil do usuário
let htmlPerfilVol = function (f) {
  return `
    <div class="cabecalho">
    <div class="cabecalhoUsuario">
      <div class="cabecalhoEsq">
        <img src="img/foto-perfil.png" alt="Foto de pefil do usuário." />
      </div>
      <div class="cabecalhoDir">
        <section class="cabecalhoBio">
          <h1 id="nomeUsuario">${f.nome}</h1>
          <p id="bio">
            ${f.textoBio}
          </p>
          <div class="cabecalho-interesses">
            <h3>Interesses:</h3>
            <ul id="campoInteresse">
            ${f.tabelaInteresses
              .map(function (e) {
                return "<li>" + e + "</li>";
              })
              .join("")}
            </ul>
          </div>
        </section>
      </div>
    </div>
    </div>

        <!-- Experiências e qualificação do usuário -->
        <div class="conteudo-perfil">
            <h2 class="titulo">Qualificação e Experiências</h2>
            <!-- Qualificação do usuário -->
            <section class="qualificacao">
            <h2>Qualificação</h2>
            <div class="listaQuali">
                <div class="campoQuali">
                <h3 id="nomeCurso">Curso 1</h3>
                <ul>
                ${f.qualificacao
                    .map(function (e) {
                      return "<li>" + e + "</li>";
                    })
                    .join("")}
                </ul>
            </div>

        <div class="campoQuali">
            <h3 id="nomeCurso">Curso 1</h3>
            <ul>
                <li id="tipoCurso">Tipo do curso</li>
                <li id="nomeInstituicao">Instituição: local onde cursou</li>
                <li id="areaCurso">Área do curso: informática</li>
                <li id="periodoCurso">Período: de dd/mm/aa até dd/mm/aa</li>
            </ul>
        </div>

        <div class="campoQuali">
            <h3 id="nomeCurso">Curso 1</h3>
            <ul>
                <li id="tipoCurso">Tipo do curso</li>
                <li id="nomeInstituicao">Instituição: local onde cursou</li>
                <li id="areaCurso">Área do curso: informática</li>
                <li id="periodoCurso">Período: de dd/mm/aa até dd/mm/aa</li>
            </ul>
        </div>
        </div>
        </section>
        <!-- Experiências do usuário -->
        <h2>Experiências</h2>
        <div class="listaExp">
        <div class="campoExp">
            <h3 id="areaAtuacao">Experiência 1</h3>
            <ul>
            ${f.experiencias
                .map(function (e) {
                  return "<li>" + e + "</li>";
                })
                .join("")}
            </ul>
        </div>

        <div class="campoExp">
            <h3 id="areaAtuacao">Experiência 1</h3>
            <ul>
            <li id="cargoAtuacao">Cargo: cargo ocupado</li>
            <li id="localAtuacao">Local: local da experiência</li>
            <li id="periodoAtuacao">Período: de dd/mm/aa até dd/mm/aa</li>
            <li id="descricaoAtuacao">
                Descrição: Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Tempore amet blanditiis itaque neque nostrum dolorem,
                aliquid praesentium labore soluta doloremque in fugit nemo
                exercitationem expedita? Voluptates reprehenderit delectus
                facilis fugit?
            </li>
            </ul>
        </div>

        <div class="campoExp">
            <h3 id="areaAtuacao">Experiência 1</h3>
            <ul>
            <li id="cargoAtuacao">Cargo: cargo ocupado</li>
            <li id="localAtuacao">Local: local da experiência</li>
            <li id="periodoAtuacao">Período: de dd/mm/aa até dd/mm/aa</li>
            <li id="descricaoAtuacao">
                Descrição: Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Tempore amet blanditiis itaque neque nostrum dolorem,
                aliquid praesentium labore soluta doloremque in fugit nemo
                exercitationem expedita? Voluptates reprehenderit delectus
                facilis fugit?
            </li>
            </ul>
        </div>
        </div>
    </div>
        `;
};

let fID = location.search.substring(location.search.search("=")+ 1,10);
let i = perfilVol.findIndex(function (f) {
  if (f.id == fID) return true;
  else return false;
});
fSelecionado.innerHTML = htmlPerfilVol(perfilVol[i]);
