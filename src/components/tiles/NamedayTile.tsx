import { useEffect, useState } from "react";
import namedaysData from "../../assets/namedays.json";

type NamedaysType = {
	[month: string]: {
		[day: string]: string;
	};
};

const namedays = namedaysData as NamedaysType;

export default function NamedayTile() {
	const [name, setName] = useState<string | null>(null);

	useEffect(() => {
		const datetime = new Date;
		const monthKey = datetime.getMonth().toString();
		const dayKey = datetime.getDate().toString();
		setName(namedays[monthKey][dayKey]);
	}, []);

	return (
		<section className="tile nameday-tile">
			<h2>Nameday</h2>
			<h3>{name}</h3>
		</section>
	);
}