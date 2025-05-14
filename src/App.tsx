import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/home";
import Fundacion from "./components/fundacion";
import Estudiar from "./components/estudiar";
import Empresa from "./components/empresa";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/fundacion" element={<Fundacion />} />
      <Route path="/estudiar" element={<Estudiar />} />
      <Route path="/como-ayudar" element={<Navigate to="/" />} />
      <Route path="/galeria" element={<Navigate to="/" />} />
      <Route path="/empresa" element={<Empresa />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
