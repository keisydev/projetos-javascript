const characterId = document.getElementById('characterId')
const btnGo = document.getElementById('btn-go')
const btnReset = document.getElementById('btn-reset')
const content = document.getElementById('content')
const containerResult = document.getElementById('result-style')
const image = document.getElementById('img')

const fetchApi = (value) => {
    const result = fetch(`https://rickandmortyapi.com/api/character/${value}`)
        .then((res) => res.json())
        .then((data) => {
            return data
        })
    return result
}

const keys = ['name', 'status', 'species', 'gender', 'origin', 'episode']
const newKeys = {
    name: 'Nome',
    status: 'Status',
    species: 'Espécie',
    gender: 'Gênero',
    origin: 'Planeta de origem',
    episode: 'Episódios',
}

const buildResult = (result) => {
    // Limpa o conteúdo anterior
    content.innerHTML = '';

    // Cria um container para os textos
    const textContainer = document.createElement('div');
    textContainer.style.display = 'flex';
    textContainer.style.flexDirection = 'column';
    textContainer.style.gap = '10px';

    keys.map((key) => document.getElementById(key))
        .forEach((element) => {
            if (element.checked && Array.isArray(result[element.name])) {
                const arrayResult = result[element.name].join('\r\n');
                const newElen = document.createElement('p');
                newElen.innerHTML = `${newKeys[element.name]}: ${arrayResult}`;
                textContainer.appendChild(newElen);
            } else if (element.checked === true && element.name === 'origin') {
                const newElen = document.createElement('p');
                newElen.innerHTML = `${newKeys[element.name]}: ${result[element.name].name}`;
                textContainer.appendChild(newElen);
            } else if (element.checked === true && typeof(result[element.name]) !== 'object') {
                const newElen = document.createElement('p');
                newElen.innerHTML = `${newKeys[element.name]}: ${result[element.name]}`;
                textContainer.appendChild(newElen);
            }
        });

    // Depois que termina de criar todos, adiciona o textContainer dentro do content
    content.appendChild(textContainer);
}

btnGo.addEventListener('click', async (event) => {
    event.preventDefault();

    if (characterId.value === '') {
        containerResult.style.display = 'none'; // esconde caso tente pesquisar sem ID
        return content.innerHTML = 'É necessário escolher o ID do personagem';
    }

    const result = await fetchApi(characterId.value);

    containerResult.style.display = 'flex'; // Exibe o container
    containerResult.classList.add('fade-in'); // Adiciona a animação

    buildResult(result);
    image.src = `${result.image}`;
})

btnReset.addEventListener('click', () => location.reload())
