import { Link } from "react-router-dom";

export function WebFooter() {
	return (
		<footer>
			<nav className="navbar">
				<Link className="navbar-link" to={"/"}>Overview</Link>
				
				<Link className="navbar-link" to={"/settings"}>Settings</Link>
				<Link className="navbar-link" to={"/about"}>About</Link>
			</nav>
		</footer>
	);
}