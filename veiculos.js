const btnNovo=document.getElementById('btnnovo');
const btnMudar=document.getElementById('btnmudar');
const aba=document.getElementById('aba');
const container=document.getElementById('container');
const bodyEl=document.getElementById('body');
const navegacao=document.getElementById('navegação');
const escolhas=document.getElementById('escolhas');
const cabecalho=document.getElementById('cabeçalho');
const tbody=document.querySelectorAll('tbody');
const novocarro=document.getElementById('novocarro');
const carrosdisponiveis=document.getElementById('carrosdisponiveis')
const botaoaba=document.getElementById('botaoaba')
function clicar() {
  aba.classList.toggle('ativa');
  container.classList.toggle('ativa2');
  bodyEl.classList.toggle('ativa3');
}
function verificarCarro() {
  const modelo = document.getElementById('modelo').value.trim();
  const marca = document.getElementById('marca').value.trim();
  const placa = document.getElementById('placa').value.trim();
  const ano = document.getElementById('ano').value.trim();
  const status = document.getElementById('status').value.trim();
  if (!modelo || !marca || !placa || !ano || !status) {
    alert('Preencha todos os campos corretamente!');
    return false;
  }
  alert('Carro cadastrado com sucesso!');
  return true;
}
function entrar() {
  btnNovo.classList.add('hovering');
}
function sair() {
  btnNovo.classList.remove('hovering');
}
function entrar3() {
  btnMudar.classList.add('hovering');
}
function sair3() {
  btnMudar.classList.remove('hovering');
}
function clicar3() {
  bodyEl.classList.toggle('ativa4');
  navegacao.classList.toggle('ativa5');
  escolhas.classList.toggle('ativa6');
  btnNovo.classList.toggle('ativa8');
  btnMudar.classList.toggle('ativa9');
  cabecalho.classList.toggle('ativa10');
  aba.classList.toggle('ativa12');
  tbody.forEach(t => t.classList.toggle('ativa11'));
  novocarro.classList.toggle('ativa13');
  carrosdisponiveis.classList.toggle('ativa14')
  botaoaba.classList.toggle('ativa14')
  document.querySelectorAll('.botao, .editar, .excluir').forEach(b => {
    b.classList.toggle('dark');
  });
}