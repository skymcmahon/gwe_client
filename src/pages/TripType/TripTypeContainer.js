import React from 'react';
import TripType from '../../components/TripType/TripType';
import TripTypeModel from '../../models/tripType'


class TripTypeContainer extends React.Component {
    state = {
        tripType: {}
    }

    componentDidMount() {
        // Get Trip Type
        TripTypeModel.getTripTypeById(this.props.match.params.id)
            .then((result) => {
                console.log('Inside TT Details', result);
                this.setState({ tripType: result });
            })
            .catch((err) => console.log(err))
    }


    render() {
        console.log("TTC Render props", this.props);
        console.log("TTC Render state", this.state);
        return <TripType tripType={this.state.tripType} list={false} />;
        // return <div></div>
    }
};

export default TripTypeContainer