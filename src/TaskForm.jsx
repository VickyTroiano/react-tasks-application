import { useState } from "react";

function TaskForm({ createTask }) {
  //cuando se ejecuta el formulario voy a leer el valor title
  const [title, setTitle] = useState("");

  //maneja el evento submit del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    //le pasan un valor a esta funcion
    createTask(title);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Escribi tu tarea"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button>Guardar</button>
    </form>
  );
}

export default TaskForm;
