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
    <div className="flex flex-col items-center w-full p-6 min-h-screen">
      <h1 className="text-3xl font-bold text-amber-300 mb-6">Edytuj Projekt</h1>
      <form
        className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700"
        onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-white mb-2">Wprowadź nazwę projektu</label>
          <input
            className="w-full p-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-2">Wprowadź opis projektu</label>
          <input
            className="w-full p-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button
          className="w-full mt-4 px-4 py-2 bg-amber-500 text-white font-semibold rounded-lg shadow-md hover:bg-amber-600 transition"
          type="submit">
          Zaktualizuj Projekt
        </button>
      </form>
    </div>
  );
}

export default EditProjectPage;
