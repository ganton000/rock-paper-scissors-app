import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './main.scss';
import App from './components/App';
import Title from './components/Title/Title';

const container = document.getElementById('root');
const root = createRoot(container);


root.render(
	<BrowserRouter>
		<div className="area">
			<Title />
			<App />
		</div>
	</BrowserRouter>
);