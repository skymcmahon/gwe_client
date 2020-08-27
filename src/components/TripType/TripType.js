import React from 'react';
import { Link, NavLink } from 'react-router-dom';

// import './TripType.css';

function TripType(props) {
    const { tripType } = props;
    // console.log(props);
    console.log("Inside TT", tripType);

    const result = []
    // for (let park in tripType.parks) {
    //     result.push(<h4>{park}<br />{tripType.parks ? tripType.parks : ''}</h4>)
    // }

    return (
        <>
            <Link to={`/triptypes/${tripType._id}`} title={tripType.title}>
                <div className="tripType-card">
                    <h1>{tripType.title}</h1>
                    <h2>Parks</h2>
                    {/* {result} */}
                    <h1>{tripType.tripLength} Days - {tripType.tripLength - 1} Nights</h1>
                    <h1>{tripType.meals} meals</h1>
                    <h1>{tripType.imgUrl}</h1>
                    <h1>Itinerary</h1>
                    <h1>{tripType.description}</h1>
                    <h1>Participants: {tripType.participants}</h1>

                </div>
            </Link>
            <button className='edit-button'>
                <Link className='edit-link' exact to={`/triptypes/${tripType._id}/edit`}>
                    Edit
                </Link>
            </button>
        </>
    );
}

export default TripType;