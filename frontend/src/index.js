import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './main.scss';
import App from './components/App';

const container = document.getElementById('root');
const root = createRoot(container);


root.render(
	<BrowserRouter>
		<h1 className="title">
				<span className="letters--1">R</span>
				<span className="letters--2">O</span>
				<span className="letters--3">C</span>
				<span className="letters--4">K</span>
				<span> </span>
				<span className="letters--5">P</span>
				<span className="letters--6">A</span>
				<span className="letters--7">P</span>
				<span className="letters--8">E</span>
				<span className="letters--9">R</span>
				<span> </span>
				<span className="letters--10">S</span>
				<span className="letters--11">C</span>
				<span className="letters--12">I</span>
				<span className="letters--13">S</span>
				<span className="letters--14">S</span>
				<span className="letters--15">O</span>
				<span className="letters--16">R</span>
				<span className="letters--17">S</span>
			</h1>
		<div className="area">
			<App />
		</div>
	</BrowserRouter>
);