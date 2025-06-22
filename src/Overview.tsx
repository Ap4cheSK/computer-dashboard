// import LinkTile from "./components/tiles/LinkTile";
import NamedayTile from "./components/tiles/NamedayTile";
import TukeTile from "./components/tiles/TukeTile";
import WeatherTile from "./components/tiles/WeatherTile";
import WebFooter from "./components/WebFooter";
import WebHeader from "./components/WebHeader";
import './css/tiles.scss';

export function Overview() {
	return (
		<>
			<WebHeader/>

			<main>
				<div className="tile-wrapper">
					<WeatherTile/>
					<TukeTile/>
					<NamedayTile/>
					{/* <LinkTile name={"Shopscraper"} redirectUrl={""} image={""}/>
					<LinkTile name={"RadioWEB"} redirectUrl={""} image={""}/>
					<LinkTile name={"Gateway"} redirectUrl={""} image={""}/> */}
				</div>
			</main>

			<WebFooter/>
		</>
	);
}