let input = document.getElementById('inputTarefa')
let btnAdd = document.getElementById('btn-add')
let main = document.getElementById('areaLista')
let contador = 0

function addTarefa(){
    let valorInput = input.value

    if((valorInput !== '') && (valorInput !== null) && (valorInput !== undefined)){
        ++contador

        let novoItem = ` <div class="item" id ='${contador}'>
        <div  class="item-icone" onclick = 'marcarTarefa(${contador})'>
                <span id = 'icone_${contador}' class="material-symbols-outlined">radio_button_unchecked</span>
            </div>
            <div class="item-nome" onclick = 'marcarTarefa(${contador})'>
                ${valorInput}
            </div>
            <div class="item-botao">
                <button class="delete" onclick="Deletar(${contador})"><span id="lixo" class="material-symbols-outlined">delete</span>Deletar</button>
            </div>
        </div>` 
        main.innerHTML += novoItem

        input.value = ''
        input.focus()
    }
}

function Deletar (id){
    var tarefa = document.getElementById(id)
    tarefa.remove()

}

function marcarTarefa(id){
    var item = document.getElementById(id)
    var icone = document.getElementById('icone_' + id)

    if (!item.classList.contains('clicado')) {
        item.classList.add('clicado')
        icone.innerText = 'check_circle'
        item.parentNode.appendChild(item) //joga o clicado para o fim da lista
    } else {
        item.classList.remove('clicado')
        icone.innerText = 'radio_button_unchecked'
    }
}


input.addEventListener('keyup', function(event){
    //Teclar enter (tecla 13)
    if(event.key === 'Enter'){
        event.preventDefault()
        btnAdd.click()
    }
})
