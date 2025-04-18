export function WebHeader() {
	return (
		<header>
			<h1>{import.meta.env.VITE_APP_NAME || "Dashboard"}</h1>
		</header>
	);
}