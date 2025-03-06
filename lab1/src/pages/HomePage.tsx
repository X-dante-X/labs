import { useState, useEffect } from "react";
import { Link } from "react-router";
import ProjectService from "../services/ProjectService";
import { Project } from "../types/Project";

function HomePage() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    setProjects(ProjectService.getAll());
  }, []);

  const handleDelete = (id: number) => {
    ProjectService.delete(id);
    setProjects(ProjectService.getAll());
  };

  return (
    <div className="flex flex-col items-center align-middle width-full">
      <h1 className="color-red-500">Lista Projektów</h1>
      <Link to="/add">Dodaj Projekt</Link>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <Link to={`/edit/${project.id}`}>Edytuj</Link>
            <button onClick={() => handleDelete(project.id)}>Usuń</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
