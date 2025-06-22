import { useEffect, useState } from "react";
import tukeLogo from "../../assets/TUKE1_B_CMYK.png";

export default function TukeTile() {
	async function fetchStartDate() {
		try {
			const response = await fetch("https://jsonblob.com/api/jsonBlob/1324152351799566336");
			if (!response.ok)
				throw new Error(`HTTP error! Status: ${response.status}`);

			const startDate = await response.text();
			return JSON.parse(startDate);
		} catch (error) {
			console.error('Error fetching the data:', error);
			return null;
		}
	}

	function getWeek(now: Date, semesterStart: Date) {
		let currentWeek = Math.round((now.getTime() - semesterStart.getTime()) / (7 * 24 * 60 * 60 * 1000));
		currentWeek = [0, 5, 6].includes(now.getDay()) ? currentWeek : currentWeek + 1;
		return currentWeek;
	}

	async function tukeWeek() {
		const startString = await fetchStartDate();

		const semesterStart = new Date(startString.startDate);
		semesterStart.setHours(0, 0, 0, 0);
		const now = new Date();
		now.setHours(0, 0, 0, 0);

		if (now >= semesterStart) {
			setMessage(getWeek(now, semesterStart).toString());
		} else {
			setMessage(`See ya again on ${semesterStart.toLocaleDateString('SK')}!`);
		}
	}

	const [message, setMessage] = useState<string | null>(null);

	useEffect(() => {
		tukeWeek();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<section className="tile tuke-tile">
			<img className="tuke-logo" src={tukeLogo} alt="TUKE"/>
			<h2>Week</h2>
			<h2 className="tuke-msg tile-accent">{message}</h2>
		</section>
	);
}