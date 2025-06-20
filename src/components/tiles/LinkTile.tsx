import { useNavigate } from "react-router-dom";

interface LinkTileProps {
	name: string;
	redirectUrl: string;
	image: string;
}

export default function LinkTile({ name, redirectUrl, image }: LinkTileProps) {
	const navigate = useNavigate();

	function handleRedirect() {
		setTimeout(() => {
			navigate(redirectUrl);
		}, 200);
	}

	return (
		<section className="tile link-tile" onClick={handleRedirect}>
			<img src={image} alt={name} />
			<span>{name}</span>
		</section>
	);
}