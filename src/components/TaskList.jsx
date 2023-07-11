import TaskCard from './TaskCard'
function TaskList({ tasks }) {
  if (tasks.length === 0) {
    return <h1>No hay tareas aun</h1>;
  }

  return (
    <div>
      {tasks.map((task) => (
        //le pasamos un prop task

        //cada vez q se recorre el task va a generar un taskCard que incluira los datos de task
        <TaskCard key={task.id} task={task}/>
      ))}
    </div>
  );
}

export default TaskList;
