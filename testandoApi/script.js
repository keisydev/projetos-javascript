const characterId = document.getElementById('characterId')
const btnGo = document.getElementById('btn-go')
const btnReset = document.getElementById('btn-reset')
const content = document.getElementById('content')
const containerResult = document.getElementById('result-style')
const image = document.getElementById('img')

const fetchApi = (value) => {
    const result = fetch (`https://rickandmortyapi.com/api/character/${value}`)
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
    return keys.map((key) => document.getElementById(key))
    .map((element) => {
        if(element.checked && (Array.isArray(result[element.name])) === true){
            const arrayResult = result[element.name].join('\r\n')
            const newElen = document.createElement('p')
            newElen.innerHTML = `${newKeys[element.name]}: ${arrayResult}`
            content.appendChild(newElen)
        }else if(element.checked === true && element.name === 'origin'){
            const newElen = document.createElement('p')
            newElen.innerHTML = `${newKeys[element.name]}: ${result[element.name].name}`
            content.appendChild(newElen)
        }else if(element.checked === true && typeof(result[element.name]) !== 'object'){
            const newElen = document.createElement('p')
            newElen.innerHTML = `${newKeys[element.name]}: ${result[element.name]}`
            content.appendChild(newElen)
        }
        
    })
}

btnGo.addEventListener('click', async (event) => {
    event.preventDefault()
    if(characterId.value === ''){
        return content.innerHTML = 'É necessário escolher o ID do personagem'
    }
    const result = await fetchApi(characterId.value)
    if(content.firstChild === null){
        containerResult.className = 'result-style'
        buildResult(result)
        image.src = `${result.image}`
    }else {
        content.innerHTML = ''
        containerResult.className = 'result-style'
        buildResult(result)
        image.src = `${result.image}`
    }

})

btnReset.addEventListener('click', () => location.reload())
