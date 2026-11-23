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

digitar();

// Cores das capas reservas (usadas se a imagem não for encontrada)
const coresCapas = [
    ['#4a148c', '#ab47bc'],
    ['#1a237e', '#7e57c2'],
    ['#6a1b9a', '#ec407a'],
    ['#000000', '#a64ca6'],
    ['#311b92', '#00acc1']
];

// Buscar os projetos do GitHub
const lista = document.getElementById('lista-projetos');

fetch('https://api.github.com/users/anaqueiroz08/repos?sort=updated')
    .then(function (resposta) {
        return resposta.json();
    })
    .then(function (repositorios) {
        lista.innerHTML = '';

        // Esconde o repositório do README do perfil
        const projetos = repositorios.filter(function (repo) {
            return repo.name !== 'anaqueiroz08';
        });

        projetos.forEach(function (repo, i) {
            // Link: site publicado ou repositório
            let link = repo.html_url;
            if (repo.has_pages) {
                link = 'https://anaqueiroz08.github.io/' + repo.name + '/';
            }

            const descricao = repo.description || 'Projeto desenvolvido durante o curso.';

            // O card (é um link)
            const card = document.createElement('a');
            card.className = 'card';
            card.href = link;
            card.target = '_blank';

            // A imagem de capa (na pasta img, com o nome do repositório)
            const imagem = document.createElement('img');
            imagem.src = 'img/' + repo.name + '.png';
            imagem.alt = 'Capa do projeto ' + repo.name;

            // Se a imagem não existir, cria uma capa colorida no lugar
            imagem.onerror = function () {
                const cores = coresCapas[i % coresCapas.length];
                const capa = document.createElement('div');
                capa.className = 'capa';
                capa.style.background = 'linear-gradient(135deg, ' + cores[0] + ', ' + cores[1] + ')';
                capa.innerHTML =
                    '<span class="icone">&lt;/&gt;</span>' +
                    '<span class="titulo">' + repo.name + '</span>' +
                    '<span class="tag">' + (repo.language || 'Web') + '</span>';
                imagem.replaceWith(capa);
            };

            // O texto que aparece ao passar o mouse
            const info = document.createElement('div');
            info.className = 'info';
            info.innerHTML = '<p>' + descricao + '</p><span class="ver">Ver projeto →</span>';

            card.appendChild(imagem);
            card.appendChild(info);
            lista.appendChild(card);
        });

        // Quadradinho das linguagens (fica no final)
        const cardLinguagens = document.createElement('a');
        cardLinguagens.className = 'card';
        cardLinguagens.href = '#habilidades';
        cardLinguagens.innerHTML =
            '<img src="img/linguagens.png" alt="Linguagens que eu uso">' +
            '<div class="info"><p>HTML5, CSS3, JavaScript, C, SQL, MySQL, Git e GitHub</p>' +
            '<span class="ver">Ver habilidades →</span></div>';
        lista.appendChild(cardLinguagens);
    })
    .catch(function () {
        lista.innerHTML = '<p>Não foi possível carregar os projetos. Veja no meu GitHub.</p>';
    });// Mostrar e esconder os links do menu
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

digitar();

// Cores das capas reservas (usadas se a imagem não for encontrada)
const coresCapas = [
    ['#4a148c', '#ab47bc'],
    ['#1a237e', '#7e57c2'],
    ['#6a1b9a', '#ec407a'],
    ['#000000', '#a64ca6'],
    ['#311b92', '#00acc1']
];

// Buscar os projetos do GitHub
const lista = document.getElementById('lista-projetos');

fetch('https://api.github.com/users/anaqueiroz08/repos?sort=updated')
    .then(function (resposta) {
        return resposta.json();
    })
    .then(function (repositorios) {
        lista.innerHTML = '';

        // Esconde o repositório do README do perfil
        const projetos = repositorios.filter(function (repo) {
            return repo.name !== 'anaqueiroz08';
        });

        projetos.forEach(function (repo, i) {
            // Link: site publicado ou repositório
            let link = repo.html_url;
            if (repo.has_pages) {
                link = 'https://anaqueiroz08.github.io/' + repo.name + '/';
            }

            const descricao = repo.description || 'Projeto desenvolvido durante o curso.';

            // O card (é um link)
            const card = document.createElement('a');
            card.className = 'card';
            card.href = link;
            card.target = '_blank';

            // A imagem de capa (na pasta img, com o nome do repositório)
            const imagem = document.createElement('img');
            imagem.src = 'img/' + repo.name + '.png';
            imagem.alt = 'Capa do projeto ' + repo.name;

            // Se a imagem não existir, cria uma capa colorida no lugar
            imagem.onerror = function () {
                const cores = coresCapas[i % coresCapas.length];
                const capa = document.createElement('div');
                capa.className = 'capa';
                capa.style.background = 'linear-gradient(135deg, ' + cores[0] + ', ' + cores[1] + ')';
                capa.innerHTML =
                    '<span class="icone">&lt;/&gt;</span>' +
                    '<span class="titulo">' + repo.name + '</span>' +
                    '<span class="tag">' + (repo.language || 'Web') + '</span>';
                imagem.replaceWith(capa);
            };

            // O texto que aparece ao passar o mouse
            const info = document.createElement('div');
            info.className = 'info';
            info.innerHTML = '<p>' + descricao + '</p><span class="ver">Ver projeto →</span>';

            card.appendChild(imagem);
            card.appendChild(info);
            lista.appendChild(card);
        });

        // Quadradinho das linguagens (fica no final)
        const cardLinguagens = document.createElement('a');
        cardLinguagens.className = 'card';
        cardLinguagens.href = '#habilidades';
        cardLinguagens.innerHTML =
            '<img src="img/linguagens.png" alt="Linguagens que eu uso">' +
            '<div class="info"><p>HTML5, CSS3, JavaScript, C, SQL, MySQL, Git e GitHub</p>' +
            '<span class="ver">Ver habilidades →</span></div>';
        lista.appendChild(cardLinguagens);
    })
    .catch(function () {
        lista.innerHTML = '<p>Não foi possível carregar os projetos. Veja no meu GitHub.</p>';
    });
