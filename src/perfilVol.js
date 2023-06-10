let perfilVol = [
  {
    "dadosVol": [
      {
        "nomeUsuario": "Nome do Usuário 1",
        "email": "email1@exemplo.com",
        "senha": "senha123",
        "textoBio": "Texto de biografia do usuário",
        "fotoPerfil": "caminho/para/foto_perfil.jpg",
        "interesses": ["interesse 1", "interesse 2", "interesse 3", "interesse 4", "interesse 5"],
        "qualificacao": [
          {
            "nomeQuali": "Nome da Qualificação 1",
            "tipoQuali": "Tipo da Qualificação 1",
            "instituicaoQuali": "Instituição da Qualificação 1",
            "areaQuali": "Área do Conhecimento da Qualificação 1",
            "periodoQuali": "DD/MM/AA (início) - DD/MM/AA (fim)"
          },
          {
            "nomeQuali": "Nome da Qualificação 2",
            "tipoQuali": "Tipo da Qualificação 2",
            "instituicaoQuali": "Instituição da Qualificação 2",
            "areaQuali": "Área do Conhecimento da Qualificação 2",
            "periodoQuali": "DD/MM/AA (início) - DD/MM/AA (fim)"
          },
          {
            "nomeQuali": "Nome da Qualificação 3",
            "tipoQuali": "Tipo da Qualificação 3",
            "instituicaoQuali": "Instituição da Qualificação 3",
            "areaQuali": "Área do Conhecimento da Qualificação 3",
            "periodoQuali": "DD/MM/AA (início) - DD/MM/AA (fim)"
          },
          {
            "nomeQuali": "Nome da Qualificação 4",
            "tipoQuali": "Tipo da Qualificação 4",
            "instituicaoQuali": "Instituição da Qualificação 4",
            "areaQuali": "Área do Conhecimento da Qualificação 4",
            "periodoQuali": "DD/MM/AA (início) - DD/MM/AA (fim)"
          },
          {
            "nomeQuali": "Nome da Qualificação 5",
            "tipoQuali": "Tipo da Qualificação 5",
            "instituicaoQuali": "Instituição da Qualificação 5",
            "areaQuali": "Área do Conhecimento da Qualificação 5",
            "periodoQuali": "DD/MM/AA (início) - DD/MM/AA (fim)"
          }
        ],
        experiencias: [
          {
            "nomeExp": "Nome da Experiência 1",
            "areaExp": "Área de Atuação da Experiência 1",
            "localExp": "Local da Experiência 1",
            "cargoExp": "Cargo cumprido na Experiência 1",
            "descricaoExp": "Texto de descrição da Experiência 1",
            "periodoExp": "DD/MM/AA (início) - DD/MM/AA (fim)"
          },
          {
            "nomeExp": "Nome da Experiência 2",
            "areaExp": "Área de Atuação da Experiência 2",
            "localExp": "Local da Experiência 2",
            "cargoExp": "Cargo cumprido na Experiência 2",
            "descricaoExp": "Texto de descrição da Experiência 2",
            "periodoExp": "DD/MM/AA (início) - DD/MM/AA (fim)"
          },
          {
            "nomeExp": "Nome da Experiência 3",
            "areaExp": "Área de Atuação da Experiência 3",
            "localExp": "Local da Experiência 3",
            "cargoExp": "Cargo cumprido na Experiência 3",
            "descricaoExp": "Texto de descrição da Experiência 3",
            "periodoExp": "DD/MM/AA (início) - DD/MM/AA (fim)"
          },
          {
            "nomeExp": "Nome da Experiência 4",
            "areaExp": "Área de Atuação da Experiência 4",
            "localExp": "Local da Experiência 4",
            "cargoExp": "Cargo cumprido na Experiência 4",
            "descricaoExp": "Texto de descrição da Experiência 4",
            "periodoExp": "DD/MM/AA (início) - DD/MM/AA (fim)"
          },
          {
            "nomeExp": "Nome da Experiência 5",
            "areaExp": "Área de Atuação da Experiência 5",
            "localExp": "Local da Experiência 5",
            "cargoExp": "Cargo cumprido na Experiência 5",
            "descricaoExp": "Texto de descrição da Experiência 5",
            "periodoExp": "DD/MM/AA (início) - DD/MM/AA (fim)"
          },
        ]
      }
    ]    
  }
];

  
//localStorage.clear();
localStorage.setItem("perfilVol", JSON.stringify(perfilVol));
