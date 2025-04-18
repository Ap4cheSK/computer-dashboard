import { Link } from "react-router-dom";

export function WebFooter() {
	return (
		<footer>
			<nav className="navbar">
				<Link className="navbar-link" aria-label="Overview" to={"/"} title="Overview">
					<i className="fa-solid fa-house"></i>
				</Link>

				<Link className="navbar-link" aria-label="Settings" to={"/settings"} title="Settings">
					<i className="fa-solid fa-gear"></i>
				</Link>

				<Link className="navbar-link" aria-label="About" to={"/about"} title="About">
					<i className="fa-solid fa-circle-info"></i>
				</Link>
			</nav>
		</footer>
	);
}