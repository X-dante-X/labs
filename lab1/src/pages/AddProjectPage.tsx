import { useState } from "react";
import { useNavigate } from "react-router";
import ProjectService from "../services/ProjectService.tsx";

function AddProjectPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newProject = {
      id: Date.now(),
      name,
      description,
    };
    ProjectService.add(newProject);
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center align-middle width-full">
      <h1>Dodaj Nowy Projekt</h1>
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
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">Zapisz Projekt</button>
      </form>
    </div>
  );
}

export default AddProjectPage;
