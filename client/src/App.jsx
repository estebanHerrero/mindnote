import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Inicio from './pages/inicio';
import Login from './Login';
import Registrate from './Registrate';
import Cursos from './cursos';


function App() {
  

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Registrate" element={<Registrate />} />
        <Route path="/Cursos" element={<Cursos />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
