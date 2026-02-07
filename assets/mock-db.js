const DB = {
  empresa: {
    id: 1,
    nome: "AgendAqui PRO",
    plano: "Enterprise",
    unidade: "Dois Vizinhos - PR"
  },

  usuarios: [
    { id: 1, nome: "Administrador", email: "admin@agendaqui.com", papel: "admin" },
    { id: 2, nome: "Recepção", email: "recepcao@agendaqui.com", papel: "atendente" }
  ],

  clientes: [
    { id: 101, nome: "Ana Souza", telefone: "(46) 99999-1111", ultima_visita: "2026-02-01" },
    { id: 102, nome: "Bruno Pereira", telefone: "(46) 99999-2222", ultima_visita: "2026-02-03" },
    { id: 103, nome: "Carla Mendes", telefone: "(46) 99999-3333", ultima_visita: "2026-02-05" },
    { id: 104, nome: "Diego Neres", telefone: "(46) 99999-4444", ultima_visita: "2026-02-06" }
  ],

  agendamentos: [
    { id: 9001, cliente: 101, data: "2026-02-10", hora: "09:00", servico: "Consulta", status: "confirmado" },
    { id: 9002, cliente: 102, data: "2026-02-10", hora: "10:00", servico: "Retorno", status: "pendente" },
    { id: 9003, cliente: 103, data: "2026-02-11", hora: "14:00", servico: "Procedimento", status: "confirmado" },
    { id: 9004, cliente: 104, data: "2026-02-12", hora: "11:00", servico: "Avaliação", status: "confirmado" }
  ],

  indicadores: {
    total_clientes: 840,
    agendamentos_mes: 1260,
    taxa_confirmacao: 92,
    taxa_faltas: 8
  },

  crescimento_semanal: [80, 95, 110, 130]
};
