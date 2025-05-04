function AddTask() {
  return (
    <div className="space-y-4 bg-slate-400 rounded-md shadow flex flex-col">
      <input className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md" type="text" placeholder="Digite o Título da Tarefa">
      </input>
      <input type="text" placeholder="Digite a descrição da Tarefa">
      </input>
      <button>adicionar</button>
    </div>
  );
}

export default AddTask;
