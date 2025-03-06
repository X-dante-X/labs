import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage.tsx";
import AddProjectPage from "./pages/AddProjectPage.tsx";
import EditProjectPage from "./pages/EditProjectPage.tsx";

function App() {
  return (
    <div className="width-screen">
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/add"
          element={<AddProjectPage />}
        />
        <Route
          path="/edit/:id"
          element={<EditProjectPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
