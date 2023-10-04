const btnCadastro = document.querySelector('#btn-cadastro');
const btnDisponivel = document.querySelector('#btn-disponivel');
const btnListagem = document.querySelector('#btn-listagem');
const btnVoltar = document.querySelector('#btn-voltar');
const btnExcluir=document.querySelector('#btn-excluir');
const tabela = document.querySelector('#table table-listagem');


// Verifica se o elemento existe
if (document.querySelector('#btn-cadastro')) {
  // Adiciona o ouvinte de evento
  btnCadastro.addEventListener('click', () => {
    // Abre a página cadastro.html
    window.location.href = 'https://lucas-salomao.github.io/controle-estacionamento/html/cadastro.html';
  });
}

// Verifica se o elemento existe
if (document.querySelector('#btn-disponivel')) {
  // Adiciona o ouvinte de evento
  btnDisponivel.addEventListener('click', () => {
    // Abre a página cadastro.html
    window.location.href = 'https://lucas-salomao.github.io/controle-estacionamento/html/disponivel.html';
  });
}

// Verifica se o elemento existe
if (document.querySelector('#btn-listagem')) {
  // Adiciona o ouvinte de evento
  btnListagem.addEventListener('click', () => {
    // Abre a página cadastro.html
    window.location.href = 'https://lucas-salomao.github.io/controle-estacionamento/html/listagem.html';
  });
}

// Verifica se o elemento existe
if (document.querySelector('#btn-voltar')) {
  // Adiciona o ouvinte de evento
  btnVoltar.addEventListener('click', () => {
    // Abre a página index.html
    window.location.href = 'https://lucas-salomao.github.io/controle-estacionamento/html/index.html';
  });
}

if(document.querySelector('#btn-excluir')){

  // Associar a função ao evento de clique do botão "Excluir"

  btnExcluir.addEventListener("click", excluirLinha);

  // btnExcluir.addEventListener("click", () => {
  //   // Obtém o número da vaga digitado pelo usuário
  //   const inputNumeroVaga = document.querySelector('#num-vaga');
  //   const numVaga = inputNumeroVaga.value;

  //   window.alert("Deseja excluir o cadastro da vaga?");
  
  //   // Obtém a linha da tabela com o número da vaga correspondente
  //   //const tabela = document.querySelector("#table-listagem");
  //   //const linhaSelecionada = tabela.querySelector(`tr[num-vaga="${numVaga}"]`);
  
  //   // Remove a linha da tabela
  //   //tabela.removeChild(linhaSelecionada);
  // });
}

if (document.querySelector('#btn-adicionar')){
  // Associar a função ao evento de clique do botão "Adicionar"
document.getElementById("btn-adicionar").addEventListener("click", adicionarLinha);
}

function jsonPage() {
  const queryString = window.location.search;

  console.log(queryString);

  const urlParams = new URLSearchParams(queryString)

  const placa = urlParams.get("placa");
  const nome = urlParams.get("nome");
  const numeroApartamento = urlParams.get("numero-apartamento")
  const bloco = urlParams.get("bloco");
  const modelo = urlParams.get("modelo");
  const cor = urlParams.get("cor");
  const numeroVaga = urlParams.get("numero-vaga");

  console.log(`
  Placa: ${placa}
  Nome: ${nome}
  Número do apartamento: ${numeroApartamento}
  Bloco: ${bloco}
  Modelo: ${modelo}
  Cor: ${cor}
  Número da vaga: ${numeroVaga}
  `);

  const json = {
    placa: placa,
    nome: nome,
    numeroApartamento: numeroApartamento,
    bloco: bloco,
    modelo: modelo,
    cor: cor,
    numeroVaga: numeroVaga,
  };

  let html = `
    {
    <div>placa: "<span>${placa}</span>",</div>
    <div>nome: "<span>${nome}</span>",</div>
    <div>numeroApartamento: "<span>${numeroApartamento}</span>",</div>
    <div>bloco: "<span>${bloco}</span>",</div>
    <div>modelo: "<span>${modelo}</span>",</div>
    <div>cor: "<span>${cor}</span>",</div>
    <div>numeroVaga: "<span>${numeroVaga}</span>"</div>
    }
  `

  htmlBody = document.querySelector("body");
  const div = document.createElement("div");
  div.innerHTML = html;
  //div.innerHTML = JSON.stringify(json, replacer);
  document.body.appendChild(div);

  alert("Vaga cadastrada com sucesso!");
}

// Função para excluir uma linha da tabela com base no número da vaga
function excluirLinha() {
  // Obter o número da vaga digitado pelo usuário
  var numeroVaga = document.getElementById("num-vaga").value;

  // Selecionar a tabela
  var tabela = document.getElementById("table-listagem");

  // Obter todas as linhas da tabela
  var linhas = tabela.getElementsByTagName("tr");

  // Loop pelas linhas da tabela (começando a partir da segunda linha, índice 1)
  for (var i = 1; i < linhas.length; i++) {
    // Obter o atributo 'num-vaga' da linha atual
    var numVagaLinha = linhas[i].getAttribute("num-vaga");

    // Verificar se o número da vaga da linha coincide com o número da vaga digitado
    if (numVagaLinha === numeroVaga) {
      // Remover a linha correspondente da tabela
      tabela.deleteRow(i);
      alert("Linha excluída com sucesso!");
      return; // Sair da função após a exclusão
    }
  }

  // Se o número da vaga não for encontrado, exibir uma mensagem de erro
  alert("Número da vaga não encontrado na tabela.");
}

function adicionarLinha() {
  // Obter os valores dos campos de entrada do formulário
  var placa = document.getElementById("placa").value;
  var nome = document.getElementById("nome").value;
  var numeroApartamento = document.getElementById("numero-apartamento").value;
  var bloco = document.getElementById("bloco").value;
  var modelo = document.getElementById("modelo").value;
  var cor = document.getElementById("cor").value;
  var numeroVaga = document.getElementById("numero-vaga").value;

  // Criar uma nova linha na tabela
  var table = document.getElementById("table-preview").getElementsByTagName('tbody')[0];
  var newRow = table.insertRow(table.rows.length);

  // Inserir as células com os valores
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);
  var cell5 = newRow.insertCell(4);
  var cell6 = newRow.insertCell(5);
  var cell7 = newRow.insertCell(6);

  cell1.innerHTML = placa;
  cell2.innerHTML = nome;
  cell3.innerHTML = numeroApartamento;
  cell4.innerHTML = bloco;
  cell5.innerHTML = modelo;
  cell6.innerHTML = cor;
  cell7.innerHTML = numeroVaga;

  // Limpar os campos de entrada do formulário
  document.getElementById("placa").value = "";
  document.getElementById("nome").value = "";
  document.getElementById("numero-apartamento").value = "";
  document.getElementById("bloco").value = "";
  document.getElementById("modelo").value = "";
  document.getElementById("cor").value = "";
  document.getElementById("numero-vaga").value = "";
}
