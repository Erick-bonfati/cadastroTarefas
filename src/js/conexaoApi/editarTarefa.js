import { conectarApi } from "./conectarApi.js";

const erroCriarTarefa = document.querySelector(".erro__criar__tarefas");
const editarTarefaBtn = document.querySelector(".botao__add__tarefa");

document.addEventListener("DOMContentLoaded", () => {
  const editarTarefaBtn = document.querySelector(".botao__add__tarefa");
  // aqui vamos usar os parametros da URL, quando clicamos para redirecionar para estar página, ele vai capturar o ID do que está sendo clicado
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id'); // Captura o ID da URL, e aqui nós capturamos os ID que foi captura

  const editarTarefaId = async (e) => {
    e.preventDefault();

    const nome = document.querySelector(".nome").value;
    const horas = document.querySelector(".horas").value;
    const prioridadeSelect = document.getElementById("seletor__prioridade");
    prioridadeSelect.addEventListener("change", (e) => {
    const valorSelecionado = e.target.value;
    })
    const prioridade = prioridadeSelect.value;

    if(nome === '' || horas === '' || prioridade === '') {
      erroCriarTarefa.style.display = "block"
    } else {
      await conectarApi.atualizarTarefa(id, nome, horas, prioridade);
      window.location.href = "../../index.html";
    }

    
  };

  editarTarefaBtn.addEventListener("click", editarTarefaId);
});
