import { useState } from "react";

function TaskForm({ createTask }) {
  //cuando se ejecuta el formulario voy a leer el valor title
  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  //maneja el evento submit del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    //le pasan un valor a esta funcion
    console.log(title, description);
    createTask({
      title,
      description,
    });
    setTitle('')
    setDescription('')
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Escribi tu tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        //para colocar el cursor automaticamente en el input
        autoFocus
      />
      <textarea
        placeholder="Escribi la descripcion de la tarea"
        onChange={(e) => setDescription(e.target.value)}
        //para limpiar el input
        value={description}
      ></textarea>
      <button>Guardar</button>
    </form>
  );
}

export default TaskForm;
