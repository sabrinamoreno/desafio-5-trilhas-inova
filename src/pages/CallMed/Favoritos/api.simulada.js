export async function getMedicosFavoritos() {
  // Simulação da api
  return [
    {
      id: 1,
      nome: "Dr. Caio Carvalho",
      especialidade: "Dermatologia",
    },
    {
      id: 2,
      nome: "Dra. Maria Oliveira",
      especialidade: "Dermatologista",
    },
    {
      id: 3,
      nome: "Dr. Pedro Souza",
      especialidade: "Ortopedista",
    },

    {
      id: 15,
      nome: "Dra. Camila Mourão Farias",
      email: "camila.farias@bebevital.com",
      telefone: "(85) 99611-4984",
      crm: "CRM-CE0015",
      preco_consulta: "329.98",
    },
    {
      id: 25,
      nome: "Dr. Marcelo Augusto Leite Dias",
      email: "marcelo.leite@endovida.com.br",
      telefone: "(62) 99345-6670",
      crm: "CRM-GO0025",
      preco_consulta: "391.44",
    },
  ];
}
