import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './TripType.css';

function TripType(props) {
    const { tripType } = props;
    // console.log(props);
    console.log("Inside TT", tripType);

    console.log(tripType.parks.length);
    const result = []
    for (let park of tripType.parks) {
        // if (park < tripType.parks.length)
        result.push(<h3 className="tt-info">{park}, </h3>)
    }

    return (
        <>
            <div className="big-trip-container">
                <Link to={`/triptypes/${tripType._id}`} title={tripType.title}>
                    <div className="trip-types-container">
                        <div className="trip-type-index-img-container">
                            <img className="trip-type-index-img" src={tripType.imgUrl} alt="nature" />
                        </div>
                        <div className="trip-type-details-container">
                            <h1 className="tt-info tt-title">- {tripType.title} -</h1>
                            <h3 className="tt-info">{tripType.tripLength} Days - {tripType.tripLength - 1} Nights</h3>
                            {result}
                            {/* <h3 className="tt-info">{tripType.parks[0]}, {tripType.parks[1]}, {tripType.parks[2]}, {tripType.parks[3]}, {tripType.parks[4]}, {tripType.parks[5]}</h3> */}

                        </div>
                        {/* <h1>{tripType.meals} meals</h1> */}
                        {/* <h1>{tripType.imgUrl}</h1> */}
                        {/* <h1>Itinerary</h1> */}
                        {/* <h1>{tripType.description}</h1> */}
                        {/* <h1>Participants: {tripType.participants}</h1> */}

                    </div>
                    <div className="trip-btn-container">
                        <button className='edit-button'>
                            <Link className='edit-link' exact to={`/triptypes/${tripType._id}/edit`}>
                                Edit
                            </Link>
                        </button>
                        <button>
                            <Link className='delete-link' exact to={`/triptypes/${tripType._id}/delete`}>
                                Delete
                            </Link>
                        </button>
                    </div>
                </Link>
            </div>
        </>
    );
}

export default TripType;