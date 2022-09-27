import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectDisplay from './pages/ProjectDisplay';
import useLocalStorage from 'use-local-storage';
import Switch from "react-switch";

function App() {

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme =() =>{
    const newTheme= theme ==='light'? 'dark' :'light';
    setTheme(newTheme);
   } 

  return (
      <div className="App" data-theme={theme}>
        <Router>
          <Navbar  >
          </Navbar>
           
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDisplay />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <div className="switch">
          <Switch onChange={switchTheme} checked={theme === "dark"} />
        </div>
          <Footer />
        </Router>
        
      </div>
     
  );
}

export default App;
