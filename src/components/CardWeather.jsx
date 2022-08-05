import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LoadingScreen from './LoadingScreen';

const CardWeather = ({ lat, lon }) => {
	const [weather, setWeather] = useState();
	const [temperature, setTemperature] = useState();
	const [isCelsius, setIsCelsius] = useState(true);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (lon) {
			const APIKey = 'c26feb5172fea1b4ed16552aafaea45e';
			const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}`;

			axios
				.get(URL)
				.then((res) => {
					setWeather(res.data);
					const temp = {
						celsius: `${Math.round(res.data.main.temp - 273.15)} °C`,
						farenheit: `${Math.round(
							((res.data.main.temp - 273.15) * 9) / 5 + 32
						)} °F`,
					};

					setTemperature(temp);
					setIsLoading(false);
				})
				.catch((err) => console.log(err));
		}
	}, [lat, lon]);

	console.log(weather);

	const handleClick = () => setIsCelsius(!isCelsius);

	if (isLoading) {
		return <LoadingScreen />;
	} else {
		return (
			<article className="card">
				<h1>Weather App</h1>
				<h2>{`${weather?.name}, ${weather?.sys.country}`}</h2>
				<div className="card__main">
					<img
						src={
							weather &&
							`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`
						}
						alt=""
					/>
					<div className="card__info">
						<h3 className="card__info__t">
							&#34;{weather?.weather[0].description}&#34;
						</h3>
						<br />
						<ul>
							<li>
								<span>Wind Speed : </span>
								{weather?.wind.speed} m/s
							</li>
							<li>
								<span>Clouds : </span>
								{weather?.clouds.all} %
							</li>
							<li>
								<span>Pressure : </span>
								{weather?.main.pressure} hpa
							</li>
						</ul>
					</div>
				</div>
				<div className="card__temp">
					<h3> Temperature</h3>
					<div className="card__temp__info">
						<button onClick={handleClick}>
							{isCelsius ? 'Change to °F' : 'Change to °C'}
						</button>
						<h2>{isCelsius ? temperature.celsius : temperature.farenheit}</h2>
					</div>
				</div>
			</article>
		);
	}
};

export default CardWeather;
