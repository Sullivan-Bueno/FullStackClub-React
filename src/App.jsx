import Tasks from "./components/tasks";
import AddTasks from "./components/AddTasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar React",
      description: "estudar react do zero",
      isCompleted: true,
    },
    {
      id: 2,
      title: "fazer compras",
      description: "comprar pão",
      isCompleted: true,
    },
    {
      id: 3,
      title: "Ler um livro",
      description: "ler um livro",
      isCompleted: true,
    },
  ]);

  // State (Estado)
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de tarefas
        </h1>
        <Tasks tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
