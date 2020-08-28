import React from 'react'
import TripType from '../../models/tripType'


function DeleteTripTypeContainer(props) {
    console.log(props, "line 6 delete tt container");
    return (
        <div>
            <h1>Are you sure you want to delete this trip type?</h1>
            <button onClick={() => {
                TripType.deleteTripType(props.match.params.tt_id)
                    .then(props.history.goBack())
            }}>Yes</button>

            <button onClick={() => {
                props.history.goBack()
            }}>No</button>
        </div>
    )
}


export default DeleteTripTypeContainer;