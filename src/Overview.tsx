import { TukeTile } from "./components/tiles/TukeTile";
import WeatherTile from "./components/tiles/WeatherTile";
import { WebFooter } from "./components/WebFooter";
import { WebHeader } from "./components/WebHeader";
import './css/tiles.scss';

export function Overview() {
	return (
		<>
			<WebHeader/>

			<main>
				<div className="tile-wrapper">
					<WeatherTile/>
					<TukeTile/>
				</div>
			</main>

			<WebFooter/>
		</>
	);
}