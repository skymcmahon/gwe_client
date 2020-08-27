import React from 'react';
import TripType from '../TripType/TripType';

// import './TripTypeList.css';

function TripTypeList(props) {
    console.log("Inside TTL", props);
    const tripTypeList = props.tripTypes.map((tripTypeObj) => {
        return <TripType key={tripTypeObj._id} tripType={tripTypeObj} list={true} />
    });

    return (
        <div className="TripType-container">
            {tripTypeList}
        </div>
    );
}

export default TripTypeList;