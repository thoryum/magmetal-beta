const transportadoras = [
  {
    nome: "ASR Transportes",
    regioes: ["SP", "MG", "Curitiba", "Região Metropolitana de Curitiba"],
    transporta6m: "sim",    
    limitesPorRegiao: [
      { regiao: "Interior de SP", comprimentoMaximoMetros: 3 }
    ],
        tiposVeiculo: ["Aberto", "Sider"],
    contatos: {
      expedicao: {
        telefone: "41 3278-8381",
        whatsapp: null,
        email: null
      },
      financeiro: {
        telefone: "41 3278-8381",
        whatsapp: null,
        email: "financeiro@asrtransportes.com.br"
      },
      comercial: {
        telefone: "41 3278-8381",
        whatsapp: "41 9950-6690",
        email: "leticia@asrtransportes.com.br"
      }
    }
  },
    {
    nome: "Transcotempo",
      regioes: ["Brasil Inteiro"],
       transporta6m: "sim",
         limitesPorRegiao: [],
          tiposVeiculo: ["Truck", "Toco", "Carreta"],
              contatos: {
                expedicao:  { telefone: "41 4003-4915", whatsapp: " 41 9868-3685", email: "contato03@transcotempo.com.br" },
             financeiro: { telefone: null, whatsapp: " 41 9868-3685", email: "contato03@transcotempo.com.br" },
      comercial:  { telefone: null, whatsapp: " 41 9868-3685", email: "contato03@transcotempo.com.br" }
    }
  },
    {
    nome: "Transapucarana",
    regioes: [],
    transporta6m: "a_confirmar",
    limitesPorRegiao: [],
    tiposVeiculo: [],
    contatos: {
      expedicao:  { telefone: null, whatsapp: null, email: null },
      financeiro: { telefone: null, whatsapp: null, email: null },
      comercial:  { telefone: null, whatsapp: null, email: null }
    }
  }
];
