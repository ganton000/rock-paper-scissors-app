import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './main.scss';
import App from './components/App';

import {
	QueryClient,
	QueryClientProvider,
  } from 'react-query'

 // Create a client
const queryClient = new QueryClient()

const container = document.getElementById('root');
const root = createRoot(container);


root.render(
	<BrowserRouter>
		<QueryClientProvider client={queryClient}>
    		<App />
			<ReactQueryDevtools />
    	</QueryClientProvider>
	</BrowserRouter>
);