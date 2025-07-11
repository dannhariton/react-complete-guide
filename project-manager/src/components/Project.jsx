function Project({ project, setTask, onDelete }) {
  const date = new Date(project.date).toDateString().replace(/^\S+\s/, "");
  let data = "";

  return (
    <main>
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold text-stone-600 mb-2">
          {project.title}
        </h1>
        <button
          className="text-stone-800 hover:text-stone-950"
          onClick={() => onDelete(project.projectId)}
        >
          Delete
        </button>
      </div>
      <span>{date}</span>
      <div className="content">
        <p>{project.smallDescription}</p>
        <p>{project.description}</p>
      </div>

      <div className="tasks">
        <h2>Tasks</h2>
        <input
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
          type="text"
          id="task"
          onChange={(e) => (data = e.target.value)}
        />
        <button
          onClick={() => setTask(data)}
          className="text-stone-700 hover:text-stone-950"
        >
          Add Task
        </button>
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {project.tasks.map((task, i) => (
            <li key={i}>{task}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Project;
