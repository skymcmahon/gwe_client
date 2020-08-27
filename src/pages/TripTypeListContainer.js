import React from 'react';
import TripTypeModel from '../models/tripType';
import TripTypeList from '../components/TripTypeList/TripTypeList'


class TripTypeContainer extends React.Component {
    state = {
        tripTypes: []
    }

    componentDidMount() {
        // Get All Trip Types
        TripTypeModel.getAllTripTypes()
            .then((result) => {
                console.log("Inside TTL container", result);
                this.setState({ tripTypes: result.tripTypes });
            })
            .catch((err) => console.log(err))
    }

    render() {
        // return <div></div>
        return <TripTypeList tripTypes={this.state.tripTypes} />;
    }
};

export default TripTypeContainer