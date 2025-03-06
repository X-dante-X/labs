import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import ProjectService from "../services/ProjectService.tsx";

function EditProjectPage() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const project = ProjectService.getAll().find((p) => p.id === parseInt(id!));
    if (project) {
      setName(project.name);
      setDescription(project.description);
    }
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedProject = { id: parseInt(id!), name, description };
    ProjectService.update(updatedProject);
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center align-middle width-full">
      <h1>Edytuj Projekt</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Wprowadź nazwę projektu</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Wprowadź opis projektu</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">Zaktualizuj Projekt</button>
      </form>
    </div>
  );
}

export default EditProjectPage;
