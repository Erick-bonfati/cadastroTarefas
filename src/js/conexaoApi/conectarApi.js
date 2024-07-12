

async function listarTarefas() {
  const conexao = await fetch("http://localhost:3000/tarefas");
  const conexaoConvertida = await conexao.json();

  return conexaoConvertida;
}

async function criarTarefa(nome, horas, prioridade) {
  const conexao = await fetch("http://localhost:3000/tarefas", {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({ 
      nome: nome, 
      horas: horas, 
      prioridade: prioridade
    })
  });

  const conexaoConvertida = await conexao.json();

  return conexaoConvertida
}

async function excluirTarefa(id) {
  try {
    const conexao = await fetch(`http://localhost:3000/tarefas/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      }
    })

    if(!conexao.ok) {
      throw new Error(`Erro ao deletar ID: ${id}`)
    }
  } catch(err) {
    console.log(err)
  }
}

async function atualizarTarefa(id, nome, horas, prioridade) {
  try {
    const conexao = await fetch(`http://localhost:3000/tarefas/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({nome, horas, prioridade})
    })

    if(!conexao.ok) {
      throw new Error(`Erro ao atualizar ID: ${id}`)
    }
  } catch(err) {
    console.log(err)
  }
}

export const conectarApi = {
  listarTarefas,
  criarTarefa,
  excluirTarefa,
  atualizarTarefa
}
