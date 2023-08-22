import './App.css';
import MatrixAnimation from './Components/MatrixAnimation/MatrixAnimation';
import 'semantic-ui-css/semantic.min.css'
import Home from './Components/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './Components/Menu/Menu';
import Projects from './Components/Projects/Projects';
import Experience from './Components/Experience/Experience';
import Skills from "./Components/Skills/Skills"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="Hack" element={<Menu/>}/>
      <Route path="projects" element={<Projects/>}/>
      <Route path="experience" element={<Experience/>}/>
      <Route path="skills" element={<Skills/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
