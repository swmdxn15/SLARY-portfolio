import './App.css';
import Intro from './components/Intro';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Intro/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/experience' element={<Experience/>}/>
          <Route path='/projects' element={<Projects/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
