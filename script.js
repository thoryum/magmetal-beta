const lista = document.getElementById("lista");

function mostrar(valor) {
  return valor ? valor : "Não informado";
}
function linkWhatsapp(numero) {
  if (!numero) return "Não informado";
  const digitos = numero.replace(/\D/g, "");
  return `<a href="https://wa.me/554199506690" target="_blank">${numero}</a>`;
}
function linkEmail(email) {
  if (!email) return "Não informado";
  return `<a href="mailto:${email}">${email}</a>`;
}
function textoSeis(t) {
  if (t.transporta6m === "sim") return "Sim";
  if (t.transporta6m === "nao") return "Não";
  return "A confirmar";
}

function desenharLimites(t) {
  if (t.limitesPorRegiao.length === 0) return "";
  const itens = t.limitesPorRegiao.map(function (l) {
    return `${l.regiao}: máx. ${l.comprimentoMaximoMetros} m`;
  });
  return `<p><strong>Exceções:</strong> ${itens.join("; ")}</p>`;
}
function textoVeiculos(t) {
  if (!t.tiposVeiculo || t.tiposVeiculo.length === 0) return "Não informado";
  return t.tiposVeiculo.join(", ");
}
function desenharContato(titulo, c) {
  return `
    <div class="contato">
      <h3>${titulo}</h3>
      <p>Telefone: ${mostrar(c.telefone)}</p>
          <p>WhatsApp: ${linkWhatsapp(c.whatsapp)}</p>
            <p>E-mail: ${linkEmail(c.email)}</p>
    </div>
  `;
}

function desenharCartao(t) {
  return `
    <div class="cartao">
      <h2>${t.nome}</h2>
      <p><strong>Regiões:</strong> ${t.regioes.join(", ")}</p>
      <p><strong>Transporta 6 m:</strong> ${textoSeis(t)}</p>
            <p><strong>Tipos de veículo:</strong> ${textoVeiculos(t)}</p>
      ${desenharLimites(t)}
      <div class="contatos">
        ${desenharContato("Expedição", t.contatos.expedicao)}
        ${desenharContato("Financeiro", t.contatos.financeiro)}
        ${desenharContato("Comercial", t.contatos.comercial)}
        
      </div>
    </div>
  `;
}

const campoBusca = document.getElementById("busca");
const filtroRegiao = document.getElementById("filtroRegiao");
const filtroVeiculo = document.getElementById("filtroVeiculo");

function preencherOpcoes(select, valores) {
  const unicos = [...new Set(valores)].sort();
  unicos.forEach(function (v) {
    select.innerHTML += `<option value="${v}">${v}</option>`;
  });
}

preencherOpcoes(filtroRegiao, transportadoras.flatMap(function (t) {
  return t.regioes;
}));

preencherOpcoes(filtroVeiculo, transportadoras.flatMap(function (t) {
  return t.tiposVeiculo || [];
}));

function mostrarLista() {
  const termo = campoBusca.value.toLowerCase().trim();
  const regiao = filtroRegiao.value;
  const veiculo = filtroVeiculo.value;

  const filtradas = transportadoras.filter(function (t) {
    const alvo = (t.nome + " " + t.regioes.join(" ") + " " + (t.tiposVeiculo || []).join(" ")).toLowerCase();
    const bateBusca = alvo.includes(termo);
    const bateRegiao = regiao === "" || t.regioes.includes(regiao);
    const bateVeiculo = veiculo === "" || (t.tiposVeiculo || []).includes(veiculo);
    return bateBusca && bateRegiao && bateVeiculo;
  });

  if (filtradas.length === 0) {
    lista.innerHTML = "<p>Nenhuma transportadora encontrada.</p>";
    return;
  }

  lista.innerHTML = filtradas.map(desenharCartao).join("");
}

campoBusca.addEventListener("input", mostrarLista);
filtroRegiao.addEventListener("change", mostrarLista);
filtroVeiculo.addEventListener("change", mostrarLista);

mostrarLista();
