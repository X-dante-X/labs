import { Routes, Route } from "react-router";
import AddProjectPage from "./pages/AddProjectPage.tsx";
import EditProjectPage from "./pages/EditProjectPage.tsx";
import { Header } from "./components/Header.tsx";
import ManageProjectPage from "./pages/ManageProjectPage.tsx";

function App() {
  return (
    <div className="w-screen">
      <Header />

      <Routes>
        <Route
          path="/"
          element={<BasePage />}
          />
        <Route
          path="/add-project"
          element={<AddProjectPage />}
          />
                  <Route
          path="/add-story"
          element={<AddStoryPage />}
          />
        <Route
          path="/edit/:id"
          element={<EditProjectPage />}
          />
        <Route 
        path="/manage"
        element={<ManageProjectPage />}  
        />

      </Routes>
    </div>
  );
}

export default App;
