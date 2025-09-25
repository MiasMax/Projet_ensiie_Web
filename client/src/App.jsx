import { useState,useEffect } from 'react'
import './App.css'

function App() {
	
	const [message, setMessage] = useState("");

	useEffect(() => {
		fetch("http://localhost:3000/")   // ton serveur Express
		.then((res) => res.text())      // ici on reçoit du texte (pas du JSON)
		.then((data) => setMessage(data))
		.catch((err) => console.error("Erreur :", err));
	}, []);

	return (
		<>
		
		<div>
			<h1>Message du serveur :</h1>
			<p>{message}</p>
		</div>
		</>
	)
}

export default App
