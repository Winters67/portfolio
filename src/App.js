import { Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import Projet from "./views/Projet/Projet";
import NotFoundPage from "./views/NotFoundPage/NotFoundPage";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projet" element={<Projet />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
