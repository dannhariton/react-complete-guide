import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject";
import Project from "./components/Project";
import Sidebar from "./components/Sidebar";

function App() {
  const [page, setPage] = useState("no-project");
  const [projects, setProjects] = useState([]);
  const [activeProject, setActiveProject] = useState();

  let currentProject = projects?.find(
    (project) => project.projectId === activeProject
  );

  function handleSetTask(newTask) {
    setProjects((prevProjects) =>
      prevProjects.map((project) => {
        return project === currentProject
          ? { ...project, tasks: [...project.tasks, newTask] }
          : project;
      })
    );
  }

  function handleDelete(id) {
    setProjects(
      projects.reduce((acc, curr) => {
        if (curr.projectId === id) return false;
        acc.push(curr);
      }, [])
    );
  }

  function handleAddProject(newProject) {
    setProjects((prevProjects) => [...prevProjects, newProject]);
  }

  function handleNewProject() {
    setPage("new-project");
  }

  function onSelectProject(type, projectId) {
    setActiveProject(projectId);
    setPage(type);
  }

  let content;

  if (page === "no-project") {
    content = <NoProject onClick={handleNewProject} type={"no-project"} />;
  } else if (page === "new-project") {
    content = <NewProject addNewProject={handleAddProject} />;
  } else if (page === "project") {
    content = (
      <Project
        project={currentProject}
        setTask={handleSetTask}
        onDelete={handleDelete}
      />
    );
  }

  return (
    <main className="flex mt-16 min-h-screen">
      <Sidebar
        onClick={handleNewProject}
        onProjectClick={onSelectProject}
        listOfProjects={projects}
      />
      {content}
    </main>
  );
}

export default App;
