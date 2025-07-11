import Button from "./Button";
import Input from "./Input";

function NewProject({ addNewProject }) {
  function getUID() {
    return Date.now().toString(36);
  }

  const data = {
    projectId: `${getUID()}`,
    title: "Learn React",
    date: "Dec, 29, 2024",
    smallDescription: "Learn react from the ground up",
    description: "",
    tasks: [],
  };

  return (
    <menu className="flex flex-col ">
      <div className="container">
        <Button>Cancel</Button>
        <Button
          onClick={() => {
            addNewProject(data);
          }}
        >
          Submit
        </Button>
      </div>
      <div className="flex  flex-col items-center gap-4">
        <Input
          onChange={(e) => (data.title = e.target.value)}
          type="text"
          label="Title"
        />
        <Input
          onChange={(e) => (data.description = e.target.value)}
          type="textarea"
          label="Description"
        />
        <Input
          onChange={(e) => (data.date = e.target.value)}
          type="date"
          label="Due Date"
        />
      </div>
    </menu>
  );
}

export default NewProject;
