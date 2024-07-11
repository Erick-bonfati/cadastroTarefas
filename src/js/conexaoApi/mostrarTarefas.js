import { conectarApi } from './conectarApi.js';

const grupoListaTarefas = document.querySelector(".lista__tarefas")

export default function listaDeTarefas(id, nome, horas, prioridade) {
  const tarefa = document.createElement("li");

  tarefa.className = "lista__tarefas__adicionadas";
  tarefa.innerHTML =
  `
  <div class="div__tarefas__atuais"> 
  <p class="tarefas__atuais"> <strong>Nome tarefa:</strong> ${nome} </p>
  <p class="tarefas__atuais"> <strong>Horas dedicadas:</strong> ${horas} </p>
  <p class="tarefas__atuais"> <strong>Prioridade:</strong> ${prioridade} </p>
  </div>
  <div> 
  
  <div class="div__link__tarefas">
  <a href="#" class="link__excluir__tarefas" data-id="${id}">Excluir</a>
  <a href="/src/pages/editar-tarefa.html" class="link__editar__tarefas">Editar</a>
  </div>
  
  `
  const linkExcluir = tarefa.querySelector(".link__excluir__tarefas");
  linkExcluir.addEventListener("click", async (e) => {
  e.preventDefault();
  const tarefaId = e.target.getAttribute("data-id");
  await conectarApi.excluirTarefa(tarefaId);
  e.preventDefault()
  tarefa.remove();
  });

  return tarefa;
}



async function mostrarTarefas() {
  try {
    const resposta = await conectarApi.listarTarefas();

    resposta.forEach(objeto => grupoListaTarefas.appendChild(
      listaDeTarefas(objeto.id, objeto.nome, objeto.horas, objeto.prioridade)));
  } catch {
    grupoListaTarefas.innerHTML = "Não foi possivel adicionar suas tarefas..."
  }

}

mostrarTarefas();