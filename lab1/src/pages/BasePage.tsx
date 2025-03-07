import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Story } from "../types/Story";
import StoryService from "../services/StoryService";

export function BasePage()
{
    const [stories, setStorie] = useState<Story[]>([]);

    useEffect(() => {
        setStorie(StoryService.getAll());
    }, []);
  
    const handleDelete = (id: number) => {
        StoryService.delete(id);
      setStorie(StoryService.getAll());
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
          {stories.map((story) => (
            <li
              key={story.id}
              className="p-4 bg-gray-800 rounded-lg shadow-md border border-gray-700">
              <h3 className="text-xl font-semibold text-white">{story.name}</h3>
              <p className="text-gray-300">{story.description}</p>
              <div className="mt-3 flex space-x-3">
                <button
                  onClick={() => handleDelete(story.id)}
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