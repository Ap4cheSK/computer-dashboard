import axios from 'axios';
import { useEffect, useState } from 'react';

interface WeatherData {
	coord: {
		lon: number;
		lat: number;
	};
	weather: {
		id: number;
		main: string;
		description: string;
		icon: string;
	}[];
	base: string;
	main: {
		temp: number;
		feels_like: number;
		temp_min: number;
		temp_max: number;
		pressure: number;
		humidity: number;
		sea_level?: number;
		grnd_level?: number;
	};
	visibility: number;
	wind: {
		speed: number;
		deg: number;
	};
	rain?: {
		[key: string]: number;
	};
	clouds: {
		all: number;
	};
	dt: number;
	sys: {
		type: number;
		id: number;
		country: string;
		sunrise: number;
		sunset: number;
	};
	timezone: number;
	id: number;
	name: string;
	cod: number;
}

function fetchWeatherData() {
	const locLat = import.meta.env.VITE_SERVER_LAT;
	const locLon = import.meta.env.VITE_SERVER_LON;
	const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
	const requestURL = `https://api.openweathermap.org/data/2.5/weather?lat=${locLat}&lon=${locLon}&appid=${apiKey}&units=metric`;

	console.log(requestURL);

	return axios.get(requestURL)
		.then(response => response.data as WeatherData)
		.catch(error => {
			console.error("Error fetching weather data:", error);
			throw error;
		});
}

export default function WeatherTile() {
	const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

	async function fetchData() {
		try {
			const data = await fetchWeatherData();
			setWeatherData(data);
		} catch (error) {
			console.error("Failed to fetch weather data:", error);
		}
	}

	useEffect(() => {
		fetchData();
	}, []);

	if (weatherData === null) {
		return (
			<section className="tile">
				<p>Loading...</p>
			</section>
		);
	}

	return (
		<section className="tile weather-tile">
			<div className="weather-location" title={weatherData.weather[0].main}>
				<img className='weather-icon'
					src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
					alt={`${weatherData.weather[0].main}`} />

				<h2 title='Location'>Košice (UTC +{weatherData.timezone / 3600})</h2>
				<p className='sm-text' title='GeoLocation'>{weatherData.coord.lat}, {weatherData.coord.lon}</p>
				<p className='bg-text' title='Weather description'>{weatherData.weather[0].description}</p>
			</div>

			<div className="tiles-content-horizontal">
				<p title='Temp/Feels like' className='bg-text'>
					<i className="fa-solid fa-temperature-three-quarters"></i> {Math.round(weatherData.main.temp)}°C ({Math.round(weatherData.main.feels_like)}°C)
				</p>
				<p title='Humidity' className='bg-text'><i className="fa-solid fa-droplet"></i> {weatherData.main.humidity}%</p>
			</div>

			<p title='Wind'><i className="fa-solid fa-wind"></i> {weatherData.wind.speed} m/s | {weatherData.wind.deg}°</p>
			<p title='Pressure'>{weatherData.main.pressure} hPa</p>
			<p title='Visibility'><i className="fa-solid fa-eye"></i> {weatherData.visibility / 1000} km</p>
			
			<div className="tiles-content-horizontal">
				<p title='Sunrise'><i className="fa-solid fa-sun"></i> {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('sk-SK')}</p>
				<p title='Sunset'><i className="fa-solid fa-moon"></i> {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('sk-SK')}</p>
			</div>

			<p title='Updated at'><i className="fa-solid fa-clock"></i> {new Date(weatherData.dt * 1000).toLocaleString('sk-SK')}</p>
		</section>
	);
}