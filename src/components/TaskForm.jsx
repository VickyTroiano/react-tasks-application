import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  //cuando se ejecuta el formulario voy a leer el valor title
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  //maneja el evento submit del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4 rounded-md">
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
        <input
          placeholder="Escribi tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-slate-300 p-3 w-full mb-2"
          //para colocar el cursor automaticamente en el input
          autoFocus
        />
        <textarea
          placeholder="Escribi la descripcion de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          //para limpiar el input
          value={description}
          className="bg-slate-300 p-3 w-full mb-2"
        ></textarea>
        <button
        className="bg-indigo-500 px-3 py-1 text-white rounded-md"
        >Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
