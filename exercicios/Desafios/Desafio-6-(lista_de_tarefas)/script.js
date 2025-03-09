let listElement = document.querySelector("#app ul")
let inputElement = document.querySelector("#app input")
let buttonElement = document.querySelector("#app button")

let tarefas = JSON.parse(localStorage.getItem("lista")) || []

function renderTarefa(){
    listElement.innerHTML=""
    tarefas.map((todo)=>{
        let liElement = document.createElement("li")
        let tarefasText = document.createTextNode(todo)

        let linkElement = document.createElement("a")
        linkElement.setAttribute("href", "#")

        let posicao = tarefas.indexOf(todo)

        linkElement.setAttribute("onclick",`deletar(${posicao})`)

        let linkText = document.createTextNode("Excluir")
        linkElement.appendChild(linkText);
        
        liElement.appendChild(tarefasText)
        liElement.appendChild(linkElement)
        listElement.appendChild(liElement)
    })
}
renderTarefa();

function adicionar(){
    if(inputElement.value === ""){
        window.alert('Digite alguma tarefa')
        return false
    }
    else{
        let novaTarefa = inputElement.value

        tarefas.push(novaTarefa);
        inputElement.value = ""
        listElement.innerHTML = `<li> ${tarefas}<li/>`
        renderTarefa();
        salvarDados()
    }
}
buttonElement.onclick = adicionar;

function deletar(posicao){
    tarefas.splice(posicao, 1)
    renderTarefa();
    salvarDados()

}

function salvarDados(){
    localStorage.setItem("lista",JSON.stringify(tarefas))
}