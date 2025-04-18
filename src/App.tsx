import { HashRouter, Route, Routes } from 'react-router-dom';
import { Overview } from './Overview';
import './css/global.scss';

function App() {
	return (
		<HashRouter>
			<Routes>
				<Route path="/" element={<Overview />} />
			</Routes>
		</HashRouter>
	);
}

export default App;