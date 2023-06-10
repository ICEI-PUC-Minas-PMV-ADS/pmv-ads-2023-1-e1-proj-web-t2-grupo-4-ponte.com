//Cria lista de usuários
//// Os operadores (??) (?) e (:) substituem a formatação condicional
let sPerfilONG = localStorage.getItem("perfilONG") ?? "[]";
let perfilONG = JSON.parse(sPerfilONG);

//Função para gerar o perfil do usuário
let htmlPerfilVol = function (f) {
  return `
  <div class="cabecalho">
  <div class="cabecalhoUsuario">
    <div class="cabecalhoEsq">
      <img src="img/foto-perfilONG.png" alt="Foto de pefil do usuário." />
    </div>
    <div class="cabecalhoDir">
      <section class="cabecalhoBio">
        <h1 id="nomeUsuario">${f.nomeUsuario}</h1>
        <p id="bio">
          ${f.textoBio}
        </p>
        <div class="cabecalho-interesses">
          <h3>Causas:</h3>
          <ul id="campoInteresse">
          ${f.interesses
            .map(function (e) {
              return "<li>" + e + "</li>";
            })
            .join("")}
          </ul>
        </div>
        <div class="contato">
          <h3>Contato:</h3>
          <div class="social">
            <a href="${f.facebook}" class="socialButton"
              ><i class="fa-brands fa-facebook fa-2xl"></i
            ></a>
            <a href="${f.instagram}" class="socialButton"
              ><i class="fa-brands fa-instagram fa-2xl"></i
            ></a>
            <a
              href="${f.whatsapp}"
              class="socialButton"
            >
              <i class="fa-brands fa-whatsapp fa-2xl"></i
            ></a>
          </div>
        </div>
      </section>
    </div>
  </div>
</div>

<!-- Detalhes da ONG -->
<div class="conteudo-perfil">
  <h2 class="titulo">Ações</h2>
  <!-- Ações da ONG -->
  <section class="acoes">
    <div class="listaAcoes">
      <div class="campoAcoes">
        <h3 id="nomeAcao">Ação 1</h3>
        <ul>
          <li id="localAcao">Local da ação</li>
          <li id="periodoAcao">Período: de dd/mm/aa até dd/mm/aa</li>
          <li id="descricaoAcao">
            Descrição da ação. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Esse vitae laboriosam accusantium voluptatum
            libero minima. Sapiente asperiores commodi ex quos ratione
            illo optio veritatis, eveniet atque natus, dicta nesciunt
            corrupti aspernatur illum. Perferendis accusamus, nulla sequi
            tenetur dolorum dignissimos praesentium veniam! Voluptates
            fugiat impedit fugit, excepturi error consectetur laudantium
            eligendi possimus vel provident assumenda hic ipsa atque quod
            facilis unde officia, sunt eos odio, sequi praesentium ipsam
            dignissimos. Aspernatur tenetur optio, deserunt eos atque
            minus, fugiat non repellat hic iste nobis repellendus libero
            amet eum. Atque vero pariatur odio accusantium molestias
            illum, amet aut itaque id corrupti? Consequatur, voluptas
            ipsa!
          </li>
        </ul>
      </div>

      <div class="campoAcoes">
        <h3 id="nomeAcao">Ação 1</h3>
        <ul>
          <li id="localAcao">Local da ação</li>
          <li id="periodoAcao">Período: de dd/mm/aa até dd/mm/aa</li>
          <li id="descricaoAcao">
            Descrição da ação. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Esse vitae laboriosam accusantium voluptatum
            libero minima. Sapiente asperiores commodi ex quos ratione
            illo optio veritatis, eveniet atque natus, dicta nesciunt
            corrupti aspernatur illum. Perferendis accusamus, nulla sequi
            tenetur dolorum dignissimos praesentium veniam! Voluptates
            fugiat impedit fugit, excepturi error consectetur laudantium
            eligendi possimus vel provident assumenda hic ipsa atque quod
            facilis unde officia, sunt eos odio, sequi praesentium ipsam
            dignissimos. Aspernatur tenetur optio, deserunt eos atque
            minus, fugiat non repellat hic iste nobis repellendus libero
            amet eum. Atque vero pariatur odio accusantium molestias
            illum, amet aut itaque id corrupti? Consequatur, voluptas
            ipsa!
          </li>
        </ul>
      </div>

      <div class="campoAcoes">
        <h3 id="nomeAcao">Ação 1</h3>
        <ul>
          <li id="localAcao">Local da ação</li>
          <li id="periodoAcao">Período: de dd/mm/aa até dd/mm/aa</li>
          <li id="descricaoAcao">
            Descrição da ação. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Esse vitae laboriosam accusantium voluptatum
            libero minima. Sapiente asperiores commodi ex quos ratione
            illo optio veritatis, eveniet atque natus, dicta nesciunt
            corrupti aspernatur illum. Perferendis accusamus, nulla sequi
            tenetur dolorum dignissimos praesentium veniam! Voluptates
            fugiat impedit fugit, excepturi error consectetur laudantium
            eligendi possimus vel provident assumenda hic ipsa atque quod
            facilis unde officia, sunt eos odio, sequi praesentium ipsam
            dignissimos. Aspernatur tenetur optio, deserunt eos atque
            minus, fugiat non repellat hic iste nobis repellendus libero
            amet eum. Atque vero pariatur odio accusantium molestias
            illum, amet aut itaque id corrupti? Consequatur, voluptas
            ipsa!
          </li>
        </ul>
      </div>
    </div>
  </section>
  <h2 class="titulo">Vagas abertas</h2>
  <section class="vagasAbertas">
    <div class="listaVagas">
      <div class="campoVagas">
        <h3 id="nomeVaga">Vaga 1</h3>
        <ul>
          <li id="localVaga">Local da vaga</li>
          <li id="periodoVaga">Período: de dd/mm/aa até dd/mm/aa</li>
          <li id="descricaoVaga">
            Descrição da vaga. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Esse vitae laboriosam accusantium voluptatum
            libero minima. Sapiente asperiores commodi ex quos ratione
            illo optio veritatis, eveniet atque natus, dicta nesciunt
            corrupti aspernatur illum. Perferendis accusamus, nulla sequi
            tenetur dolorum dignissimos praesentium veniam! Voluptates
            fugiat impedit fugit, excepturi error consectetur laudantium
            eligendi possimus vel provident assumenda hic ipsa atque quod
            facilis unde officia, sunt eos odio, sequi praesentium ipsam
            dignissimos. Aspernatur tenetur optio, deserunt eos atque
            minus, fugiat non repellat hic iste nobis repellendus libero
            amet eum. Atque vero pariatur odio accusantium molestias
            illum, amet aut itaque id corrupti? Consequatur, voluptas
            ipsa!
          </li>
        </ul>
      </div>

      <div class="campoVagas">
        <h3 id="nomeVaga">Vaga 2</h3>
        <ul>
          <li id="localVaga">Local da vaga</li>
          <li id="periodoVaga">Período: de dd/mm/aa até dd/mm/aa</li>
          <li id="descricaoVaga">
            Descrição da vaga. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Esse vitae laboriosam accusantium voluptatum
            libero minima. Sapiente asperiores commodi ex quos ratione
            illo optio veritatis, eveniet atque natus, dicta nesciunt
            corrupti aspernatur illum. Perferendis accusamus, nulla sequi
            tenetur dolorum dignissimos praesentium veniam! Voluptates
            fugiat impedit fugit, excepturi error consectetur laudantium
            eligendi possimus vel provident assumenda hic ipsa atque quod
            facilis unde officia, sunt eos odio, sequi praesentium ipsam
            dignissimos. Aspernatur tenetur optio, deserunt eos atque
            minus, fugiat non repellat hic iste nobis repellendus libero
            amet eum. Atque vero pariatur odio accusantium molestias
            illum, amet aut itaque id corrupti? Consequatur, voluptas
            ipsa!
          </li>
        </ul>
      </div>

      <div class="campoVagas">
        <h3 id="nomeVaga">Vaga 3</h3>
        <ul>
          <li id="localVaga">Local da vaga</li>
          <li id="periodoVaga">Período: de dd/mm/aa até dd/mm/aa</li>
          <li id="descricaoVaga">
            Descrição da vaga. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Esse vitae laboriosam accusantium voluptatum
            libero minima. Sapiente asperiores commodi ex quos ratione
            illo optio veritatis, eveniet atque natus, dicta nesciunt
            corrupti aspernatur illum. Perferendis accusamus, nulla sequi
            tenetur dolorum dignissimos praesentium veniam! Voluptates
            fugiat impedit fugit, excepturi error consectetur laudantium
            eligendi possimus vel provident assumenda hic ipsa atque quod
            facilis unde officia, sunt eos odio, sequi praesentium ipsam
            dignissimos. Aspernatur tenetur optio, deserunt eos atque
            minus, fugiat non repellat hic iste nobis repellendus libero
            amet eum. Atque vero pariatur odio accusantium molestias
            illum, amet aut itaque id corrupti? Consequatur, voluptas
            ipsa!
          </li>
        </ul>
      </div>
    </div>
  </section>
</div>
        `;
};