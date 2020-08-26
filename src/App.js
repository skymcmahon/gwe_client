import React from 'react';
import routes from './config/routes';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

import './App.css';

function App() {
	return (
		<div className='App'>
			<Nav />
			{routes}
			<Footer />
		</div>
	);
}

export default App;
