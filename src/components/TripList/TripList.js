import React from 'react';
import Trip from '../Trip/Trip';

// import './TripList.css';

function TripList(props) {
    const tripList = props.trips.map((tripObj) => {
        return <Trip key={tripObj._id} trip={tripObj} list={true} />
    });

    return (
        <div className="Trips-container">
            {tripList}
        </div>
    );
}

export default TripList;
