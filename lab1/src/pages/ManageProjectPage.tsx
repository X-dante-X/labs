import { useState, useEffect } from "react";
import { Link } from "react-router";
import ProjectService from "../services/ProjectService";
import { Project } from "../types/Project";

function ManageProjectPage() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    setProjects(ProjectService.getAll());
  }, []);

  const handleDelete = (id: number) => {
    ProjectService.delete(id);
    setProjects(ProjectService.getAll());
  };

  return (
    <div className="flex flex-col items-center w-full p-6 min-h-screen">
      <h1 className="text-3xl font-bold text-amber-300 mb-6">Lista Projektów</h1>
      <Link
        to="/add"
        className="mb-4 px-4 py-2 bg-amber-500 text-white rounded-lg shadow-md hover:bg-amber-600 transition">
        Dodaj Projekt
      </Link>
      <ul className="w-full max-w-2xl space-y-4">
        {projects.map((project) => (
          <li
            key={project.id}
            className="p-4 bg-gray-800 rounded-lg shadow-md border border-gray-700">
            <h3 className="text-xl font-semibold text-white">{project.name}</h3>
            <p className="text-gray-300">{project.description}</p>
            <div className="mt-3 flex space-x-3">
              <Link
                to={`/edit/${project.id}`}
                className="inline-flex items-center justify-center px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                Edytuj
              </Link>
              <button
                onClick={() => handleDelete(project.id)}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition">
                Usuń
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ManageProjectPage;
