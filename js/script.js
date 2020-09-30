console.log("Projeto to-do");

/*Criar uma função chamada (criarTarefa) que deve exibir um alerta " Tarefa Criada" e essa função de executada quando usuario fazer um click botão de adicionar no footer*/

/* ## Após adicionar uma tarefa, o input deve ficar vazio*/
/*Se o usuario tentar adicionar uma tarefa vazia, dar um alerta e não pode deixar criar a tarefa vazia*/

let btnAdicionar = document.querySelector("#adicionar-tarefa");
let inputTarefa = document.querySelector("#tarefa-digitada");

let divTarefas = document.querySelector("#tarefas")

function AddAcaoDeFianlizarTarefa(){
    let listaDeBotoes = document.querySelectorAll(".botao-tarefa");

    for(let i = 0; i < listaDeBotoes.length; i++) {
        let botao = listaDeBotoes[i];
        
        botao.addEventListener("click", function(){

            if(window.confirm("Tem certeza que deseja concluir a tarefa?")){
                botao.parentElement.parentElement.remove();
            }

        })
    }
}
    function criarTarefa(){
        // .trim() retira os espaços
        if(inputTarefa.value.trim() == ""){
            inputTarefa.style.border="solid 2px red";
            return alert("Tarefa Vazia")
        }
    let tarefa = `
        <div class="col-md-4">
            <div class="card-tarefa">
                <div class="texto-tarefa">
                    ${inputTarefa.value}
                </div>
                <div class="botao-tarefa">
                    <img src="img/check.png" width="32" alt="Botão para finalizar tarefa" title="Botão para finalizar tarefa">
                <div>
            </div>
        </div>
    `;
    //divTarefas.innerHTML = divTarefas.innerHTML + tarefa
    divTarefas.innerHTML+=tarefa;
    alert("Tarefa Criada: " + inputTarefa.value);
    inputTarefa.value="";
    AddAcaoDeFianlizarTarefa()
    }

    btnAdicionar.addEventListener("click",criarTarefa);

    /*inputTarefa.addEventListener("keypress", functcion(event){
        if (event.key == "Enter"){
            criarTarefa()
        }
    });*/

