import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

//componente que va a englobar a todo
export function TaskContextProvider(props) {
  //crea una constante y va a tener un arreglo vacio
  const [tasks, setTasks] = useState([]);

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
  /*   console.log(tasks);
    console.log(taskId); */
    //por cada tarea recorrida, confirma que el id que se esta pasando es igual al id de las tareas
    // si es falso se queda
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    //Creacion del componente
    //Aca se almacena todo nuestro estado y todos lo pueden acceder
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
