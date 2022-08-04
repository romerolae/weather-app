import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import CardWeather from './components/CardWeather';
import LoadingScreen from './components/LoadingScreen';

function App() {
	const [coords, setCoords] = useState();

	useEffect(() => {
		const success = (pos) => {
			const latlon = {
				lat: pos.coords.latitude,
				lon: pos.coords.longitude,
			};
			setCoords(latlon);
		};
		navigator.geolocation.getCurrentPosition(success);
	}, []);

	return (
		<div className="App">
			<CardWeather lon={coords?.lon} lat={coords?.lat} />
		</div>
	);
}

export default App;
