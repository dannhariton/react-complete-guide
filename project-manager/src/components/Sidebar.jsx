import Button from "./Button";

function Sidebar({ onClick, listOfProjects, onProjectClick }) {
  function onProjectItem(i) {
    onProjectClick("project", i);
  }

  return (
    <aside className="flex flex-col bg-stone-900 w-1/3 px-8 py-16 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 uppercase font-bold md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button
          onClick={onClick}
          className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
        >
          + Add Project
        </Button>
      </div>
      <ul className="mt-8">
        {listOfProjects?.map((project) => (
          <button
            key={project.projectId}
            onClick={() => onProjectItem(project.projectId)}
            className="flex justify-between my-4 w-full"
          >
            {project.title}
          </button>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
