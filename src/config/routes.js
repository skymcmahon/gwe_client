import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import TripListContainer from '../pages/TripListContainer'
import TripContainer from '../pages/TripContainer'
import TripTypeListContainer from '../pages/TripTypeListContainer'
// import TripTypeDetails from '../pages/TripTypeDetails'
import TripTypeContainer from '../pages/TripTypeContainer'


export default (
	<Switch>
		<Route exact path='/' component={Home} />
		<Route path='/trips/:id' component={TripContainer} />
		<Route path='/trips' component={TripListContainer} />
		{/* <Route path='/triptypes/:id' render={({ match }) => <TripTypeDetails match={match} />} /> */}
		<Route path='/triptypes/:id' component={TripTypeContainer} />
		<Route path='/triptypes' component={TripTypeListContainer} />
	</Switch>
);
