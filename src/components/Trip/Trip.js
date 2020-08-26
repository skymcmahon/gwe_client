import React from 'react';
import { Link } from 'react-router-dom';

import './Trip.css';

function Trip(props) {
    const { trip } = props;
    console.log(trip.itinerary ? trip.itinerary.day1 : 'No informmation');

    const result = []
    for (let day in trip.itinerary) {
        result.push(<h4>{day}<br />{trip.itinerary ? trip.itinerary[day] : ''}</h4>)
    }

    return (
        <Link to={`/trips/${trip._id}`}>
            <div className="trip-card">
                <h1>Start Date: {trip.startDate}</h1>
                <h1>Itinerary</h1>
                {/* <h4>Day 1{trip.itinerary ? trip.itinerary.day1 : ''}</h4> */}
                {result}
                <h1>Participants: {trip.participants}</h1>
            </div>
        </Link>
    );
}

export default Trip;
