import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import './index.scss';
import App from './components/App';

//create client
const client = new QueryClient();

const container = document.getElementById('root');
const root = createRoot(container);


root.render(
	<BrowserRouter>
		<QueryClientProvider client={client}>
    		<App />
		</QueryClientProvider>
	</BrowserRouter>
);