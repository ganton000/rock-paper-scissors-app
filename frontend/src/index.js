import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './main.scss';
import App from './components/App';

const container = document.getElementById('root');
const root = createRoot(container);


root.render(
	<BrowserRouter>
		<div className="area">
			<h1 className="title">
				Rock, Paper &amp; Scissors
			</h1>
			<App />
		</div>
	</BrowserRouter>
);