interface LinkTileProps {
	name: string;
	redirectUrl: string;
	image: string;
}

export default function LinkTile({ name, redirectUrl, image }: LinkTileProps) {

	function handleRedirect() {
		setTimeout(() => {
			window.open(redirectUrl, "_blank");
		}, 200);
	}

	return (
		<section className="tile link-tile" onClick={handleRedirect}>
			<img className="link-tile-background" src={image} alt={name} />
			<span className="link-tile-name">{name}</span>
		</section>
	);
}