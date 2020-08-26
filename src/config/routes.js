import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import TripListContainer from '../pages/TripListContainer'
import TripContainer from '../pages/TripContainer'


export default (
	<Switch>
		<Route exact path='/' component={Home} />
		<Route path='/trips/:id' component={TripContainer} />
		<Route path='/trips' component={TripListContainer} />
	</Switch>
);
