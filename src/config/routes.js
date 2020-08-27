import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
//--------------------------/TRIP/--------------------------//
import TripListContainer from '../pages/Trip/TripListContainer'
import TripContainer from '../pages/Trip/TripContainer'
//--------------------------/TRIP TYPE/--------------------------//
import TripTypeListContainer from '../pages/TripType/TripTypeListContainer'
import TripTypeContainer from '../pages/TripType/TripTypeContainer'


export default (
	<Switch>
		{/* //--------------------------/TRIP TYPE/--------------------------// */}
		<Route exact path='/' component={Home} />
		{/* <Route exact path='/triptypes/:id' render={({ match }) => <TripTypeDetails match={match} />} /> */}
		<Route exact path='/triptypes/:tt_id' component={TripTypeContainer} />
		<Route exact path='/triptypes' component={TripTypeListContainer} />

		{/* <Route exact path='/triptypes/new' component={NewTripTypeContainer} /> */}
		{/* <Route exact path='/triptypes/:tt_id/edit' component={EditTripTypeContainer} /> */}
		{/* <Route exact path='/triptypes/:tt_id/delete' component={DeleteTripType} /> */}


		{/* //--------------------------/TRIP/--------------------------// */}
		<Route exact path='/trips' component={TripListContainer} />
		<Route exact path='/trips/:trip_id' component={TripContainer} />

		{/* <Route exact path='/triptypes/:tt_id/trips/new' component={NewJobCntr} /> */}
		{/* <Route exact path='/triptypes/:tt_id/trips/:trip_id/edit' component={EditJobCntr} /> */}
		{/* <Route exact path='/trips/:trip_id/delete' component={JobDelete} /> */}

	</Switch>
);