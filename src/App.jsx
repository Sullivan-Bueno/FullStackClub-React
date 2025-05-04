import Tasks from "./components/tasks";
import AddTasks from "./components/AddTasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar React",
      description: "estudar react do zero",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Fazer compras",
      description: "comprar pão",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Ler um livro",
      description: "ler um livro",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function deleteOnClick(taskId) {
    const newTasks = tasks.filter((task) => task.id != taskId);
    setTasks(newTasks);
  }

  // State (Estado)
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de tarefas
        </h1>
        <AddTasks />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          deleteOnClick={deleteOnClick}
        />
      </div>
    </div>
  );
}

export default App;
