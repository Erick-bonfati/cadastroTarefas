import { conectarApi } from "./conectarApi.js"

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
    await conectarApi.criarTarefa(nome, horasDedicadas, prioridade);

    console.log(nome)
  } catch(error) {
    console.log(error)
  }
}

form.addEventListener("submit", e => {
  e.preventDefault();

  criarNovaTarefa(e);
});