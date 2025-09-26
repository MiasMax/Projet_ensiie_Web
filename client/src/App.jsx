import { useState,useEffect } from 'react'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Characters from './pages/Characters.jsx';
// import Bosses from './pages/Bosses';
import './styles/App.css';

function App() {

	
	// const [message, setMessage] = useState("");

	// useEffect(() => {
	// 	fetch("http://localhost:3000/")   // ton serveur Express
	// 	.then((res) => res.text())      // ici on reçoit du texte (pas du JSON)
	// 	.then((data) => setMessage(data))
	// 	.catch((err) => console.error("Erreur :", err));
	// }, []);
  return (
    <Router>
      <div className="App">
        <Header />
        <Navigation />
        <main className="main-content">
			
			{/* <p>{message}</p> */}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characters" element={<Characters />} />
            {/* <Route path="/bosses" element={<Bosses />} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;