import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Button } from 'react-bootstrap';
import Home from './pages/Home';
import Events from './pages/Events';
import Explore from './pages/Explore';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import Apps from './pages/Apps';

import NavbarComp from './components/NavbarComp';


function App() {
  return (
    <div className="App">
       <NavbarComp />
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/myApps" element={<Apps />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contacts />} />
       
        
      </Routes>
       
    </div>
  );
}

export default App;
