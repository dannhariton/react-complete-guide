import logo from "../assets/no-projects.png";
import Button from "./Button";

function NoProject({ onClick }) {
  return (
    <div className="flex flex-col items-center mx-auto my-20 gap-4">
      <img
        src={logo}
        alt="no projects logo"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with a new one
      </p>
      <Button
        onClick={onClick}
        className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
      >
        Create new project
      </Button>
    </div>
  );
}

export default NoProject;
