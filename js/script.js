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

// Frase que se digita sozinha
const frases = [
    'Desenvolvedora Front-End em formação',
    'Apaixonada por HTML, CSS e JavaScript',
    'Estudante de ADS na UDF'
];

const elementoFrase = document.getElementById('frase');
let fraseAtual = 0;
let letraAtual = 0;
let apagando = false;

function digitar() {
    const frase = frases[fraseAtual];

    if (apagando) {
        letraAtual--;
    } else {
        letraAtual++;
    }

    elementoFrase.textContent = frase.substring(0, letraAtual);

    let espera = apagando ? 40 : 80;

    if (!apagando && letraAtual === frase.length) {
        apagando = true;
        espera = 1800;
    } else if (apagando && letraAtual === 0) {
        apagando = false;
        fraseAtual = (fraseAtual + 1) % frases.length;
        espera = 400;
    }

    setTimeout(digitar, espera);
}

if (elementoFrase) {
    digitar();
}

// Lista dos meus projetos
const projetos = [
    {
        imagem: 'img/Portf-lio.png',
        descricao: 'Meu portfólio pessoal, feito com HTML, CSS e JavaScript.',
        link: 'https://github.com/anaqueiroz08/Portf-lio'
    },
    {
        imagem: 'img/royalpet-site-html-css.png',
        descricao: 'Site para pet shop com galeria e formulário de contato, feito com HTML5 e CSS3.',
        link: 'https://github.com/anaqueiroz08/royalpet-site-html-css'
    },
    {
        imagem: 'img/menu-exercicios-c.png',
        descricao: 'Programa em C com menu interativo: calculadora e classificação de idade.',
        link: 'https://github.com/anaqueiroz08/menu-exercicios-c'
    },
    {
        imagem: 'img/cadastro-alunos-cursos-sql.png',
        descricao: 'Script SQL que cria e consulta tabelas de alunos e cursos.',
        link: 'https://github.com/anaqueiroz08/cadastro-alunos-cursos-sql'
    },
    {
        imagem: 'img/desafio-colaborativo-git.png',
        descricao: 'Projeto em equipe para praticar branches, pull requests e merges no Git.',
        link: 'https://github.com/anaqueiroz08/desafio-colaborativo-git'
    },
    {
        imagem: 'img/linguagens.png',
        descricao: 'HTML5, CSS3, JavaScript, C, SQL, MySQL, Git e GitHub.',
        link: '#habilidades'
    }
];

// Montar os cards na página
const lista = document.getElementById('lista-projetos');
lista.innerHTML = '';

projetos.forEach(function (projeto) {
    const card = document.createElement('a');
    card.className = 'card';
    card.href = projeto.link;

    // Links externos abrem em outra aba
    if (projeto.link.startsWith('http')) {
        card.target = '_blank';
    }

    card.innerHTML =
        '<img src="' + projeto.imagem + '" alt="Capa do projeto">' +
        '<div class="info"><p>' + projeto.descricao + '</p>' +
        '<span class="ver">Ver projeto →</span></div>';

    lista.appendChild(card);
});
