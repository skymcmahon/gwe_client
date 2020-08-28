import React from 'react';
import TripType from '../TripType/TripType';
// import HeaderCarousel from '../../components/HeaderCarousel/HeaderCarousel'

import './TripTypeList.css';

function TripTypeList(props) {
    console.log("Inside TTL", props);
    const tripTypeList = props.tripTypes.map((tripTypeObj) => {
        return <TripType key={tripTypeObj._id} tripType={tripTypeObj} list={true} />
    });

    return (
        <div className="TripType-container">
            {/* <HeaderCarousel /> */}
            {tripTypeList}
        </div>
    );
}

export default TripTypeList;