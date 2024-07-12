import { conectarApi } from "./conectarApi.js"

const erroCriarTarefa = document.querySelector(".erro__criar__tarefas");

const nomeInput = document.querySelector(".nome")
const horasDedicadasInput = document.querySelector(".horas")
const form = document.querySelector(".adicionar__tarefas");

const prioridadeSelect = document.getElementById("seletor__prioridade");
prioridadeSelect.addEventListener("change", (e) => {
  const valorSelecionado = e.target.value;
})

async function criarNovaTarefa(e) {
  e.preventDefault();

  const nome = nomeInput.value;
  const horasDedicadas = horasDedicadasInput.value;
  const prioridade = prioridadeSelect.value;

  try {
    if(nome === '' || horasDedicadas === '' || prioridade === '') {
      erroCriarTarefa.style.display = "block"
    } else {
      await conectarApi.criarTarefa(nome, horasDedicadas, prioridade);
    }
  } catch(error) {
    console.log(error)
  }
}

form.addEventListener("submit", e => {
  e.preventDefault();

  criarNovaTarefa(e);
});