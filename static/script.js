function RandomColor(tamanho){
    var primeiro = "#"
    var caracter = "0123456789abcdef"
    for(var i = 0 ; i < tamanho; i++){
        primeiro += caracter.charAt(Math.floor(Math.random() * caracter.length))
    }
    return primeiro
}

var lista = []

function Click(){
    fetch("/DirJson").then(response => response.json().then((data) => {
        for(var i = 0 ; i < data.length;i++){
            var Create = document.createElement("div")
            Create.innerText = data[i]
            Create.classList = "CreateDiv"
            Create.id = i
            Create.style.background = RandomColor(6)
            Create.addEventListener("click",CreateBtn)
            document.getElementById("conteudo").append(Create)
        }
    }))
    document.getElementById("conteudo").innerHTML = ""
}

function CreateBtn(){
    const ID = this.id
    const value = document.getElementById(`${ID}`).innerText + `/` + `/`
    lista.push(value)
    var NewLink = String(lista.concat()).replace(",","")
    fetch(`/DirNew/${NewLink}`).then(res => res.json().then((dados) => {
        for(var i = 0 ; i < dados.length;i++){
            var Create = document.createElement("div")
            Create.innerText = dados[i]
            Create.classList = "CreateDiv"
            Create.id = i
            Create.style.background = RandomColor(6)
            Create.addEventListener("click",CreateBtn)
            document.getElementById("conteudo").append(Create)
        }
    }))
    fetch(`/DirLer/${NewLink}`).then(res => res.json().then((dados) => {
        for(var i = 0 ; i < dados.length;i++){
            var Texto = document.createElement("p")
            Texto.innerText = dados[i]
            document.getElementById("Barra").append(Texto)
        }
    }))
    document.getElementById("Barra").innerHTML = ""
    document.getElementById("conteudo").innerHTML = ""
}
