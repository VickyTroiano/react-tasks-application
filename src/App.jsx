import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import { tasks as data } from "./tasks";
import { useState, useEffect } from "react";

function App() {
  //crea una constante y va a tener un arreglo vacio
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(taskTitle) {
    //copia todo el arreglo de tareas y le agrega task nueva
    setTasks([
      ...tasks,
      {
        title: taskTitle,
        id: tasks.length,
        description: "nueva tarea",
      },
    ]);
  }
  return (
    <>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
