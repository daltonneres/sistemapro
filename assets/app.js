// ====== LOGIN SIMULADO ======
function fakeLogin() {
  window.location.href = "dashboard/painel.html";
}

// ====== CARREGAR INDICADORES NO PAINEL ======
function carregarDashboard() {
  document.getElementById("total-clientes").textContent = DB.indicadores.total_clientes;
  document.getElementById("agendamentos-mes").textContent = DB.indicadores.agendamentos_mes;
  document.getElementById("taxa-confirmacao").textContent = DB.indicadores.taxa_confirmacao + "%";
}

// ====== LISTAR CLIENTES (TABELA) ======
function carregarClientes() {
  const tabela = document.getElementById("tabela-clientes");
  tabela.innerHTML = "";

  DB.clientes.forEach(c => {
    const linha = `
      <tr>
        <td>${c.id}</td>
        <td>${c.nome}</td>
        <td>${c.telefone}</td>
        <td>${c.ultima_visita}</td>
      </tr>
    `;
    tabela.innerHTML += linha;
  });
}

// ====== CARREGAR AGENDA SEMANAL ======
function carregarAgenda() {
  const dias = document.querySelectorAll(".dia-agenda");

  DB.agendamentos.forEach(a => {
    const dia = document.querySelector(`[data-data='${a.data}']`);
    if (dia) {
      const evento = document.createElement("div");
      evento.className = "evento";
      evento.textContent = `${a.hora} - ${a.servico}`;
      dia.appendChild(evento);
    }
  });
}

// ====== SIMULAÇÃO DE WHATSAPP ======
function simularWhatsApp(nome) {
  console.log(`✅ Mensagem enviada para ${nome} no WhatsApp.`);
}
