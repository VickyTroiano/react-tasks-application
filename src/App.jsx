import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { tasks as data } from "./data/tasks";
import { useState, useEffect } from "react";

function App() {
  //crea una constante y va a tener un arreglo vacio
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(task) {
    //copia todo el arreglo de tareas y le agrega task nueva
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    console.log(tasks)
    console.log(taskId)
    //por cada tarea recorrida, confirma que el id que se esta pasando es igual al id de las tareas
    // si es falso se queda
    setTasks(tasks.filter(task => task.id !== taskId))

    
  }
  return (
    <>
      <TaskForm createTask={createTask} />
      {/* tasklist usa deleteTask */}
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </>
  );
}

export default App;
