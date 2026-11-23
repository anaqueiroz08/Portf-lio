// Mostrar e esconder os links do menu
const botao = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

botao.addEventListener('click', function () {
    menu.classList.toggle('fechado');
});

// Ano automático no rodapé
document.getElementById('ano').textContent = new Date().getFullYear();

// Botão voltar ao topo
document.getElementById('topo-btn').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
