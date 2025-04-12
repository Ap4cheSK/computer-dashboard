export function WebHeader() {
	return (
		<header>
			<h1>{process.env.REACT_APP_NAME || "Dashboard"}</h1>
		</header>
	);
}