import { createContext } from "react";

export const TaskContext = createContext();

//componente que va a englobar a todo
export function TaskContextProvider(props) {
  let x = 20;
  return (
    //Creacion del componente
    //Aca se almacena todo nuestro estado
    <TaskContext.Provider value={x}>{props.children}</TaskContext.Provider>
  );
}
