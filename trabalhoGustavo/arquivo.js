  const btnNovo=document.getElementById('btnnovo');
  const btnMudar=document.getElementById('btnmudar');
  const aba=document.getElementById('aba');
  const container=document.getElementById('container');
  const bodyEl=document.getElementById('body')
  const navegacao=document.getElementById('navegação');
  const escolhas=document.getElementById('escolhas');
  const clientes=document.getElementById('clientes');
  const novocliente=document.getElementById('novocliente')
  const cabecalho=document.getElementById('cabeçalho')
  const tbody=document.querySelectorAll('tbody')
  const clientenovo=document.getElementById('clientenovo')
  const botaoaba=document.getElementById('botaoaba')
  document.querySelectorAll("[data-bs-toggle='popover']").forEach(btn => {
    new bootstrap.Popover(btn);
    });
function clicar(){
  aba.classList.toggle('ativa');
  container.classList.toggle('ativa2');
  bodyEl.classList.toggle('ativa3');
}
  function verificar(){
  const nome = document.getElementById('nome').value;
  const cpf = document.getElementById('CPF').value;
  const telefone = document.getElementById('telefone').value;
  const endereco = document.getElementById('endereco').value;
if(nome.length === 0 || cpf.length === 0 || telefone.length === 0 || endereco.length === 0){
  window.alert('campos invalidos');
  return false;
  }
  return true;
}
function entrar(){
  btnNovo.classList.add('hovering');
}
function sair(){
  btnNovo.classList.remove('hovering');
}
function entrar3(){
  btnMudar.classList.add('hovering');
}
function sair3(){
  btnMudar.classList.remove('hovering');
}
function clicar3(){
    bodyEl.classList.toggle('ativa4');
    navegacao.classList.toggle('ativa5');
    escolhas.classList.toggle('ativa6');
    clientes.classList.toggle('ativa7');
    btnNovo.classList.toggle('ativa8')
    btnMudar.classList.toggle('ativa9')
    cabecalho.classList.toggle('ativa10')
    aba.classList.toggle('ativa12')
    tbody.forEach(t => t.classList.toggle('ativa11'));
    clientenovo.classList.toggle('ativa13')
    botaoaba.classList.toggle('ativa14')
if (novocliente) novocliente.classList.toggle('ativa8');
  document.querySelectorAll('.botao').forEach(b => b.classList.toggle('dark'));
}
document.addEventListener('click',e =>{
  if (e.target.classList.contains("btn-sim")){
    alert('item excluído com sucesso')
  }
    bootstrap.Popover.getInstance(e.target.closest("[data-bs-toggle='popover']")).hide()
  if (e.target.classList.contains('btn-nao')){
    bootstrap.Popover.getInstance(e.target.closest("[data-bs-toggle='popover']")).hide()
  }
})