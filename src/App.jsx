import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Main from './components/Main';

function App() {
    return (
		<BrowserRouter>
			<main>
				<Header />
				<Main />
			</main>
		</BrowserRouter>
    );
}

export default App;