import React from 'react';
import Trip from '../../components/Trip/Trip';
import TripModel from '../../models/trip'


class TripContainer extends React.Component {
    state = {
        trip: {}
    }

    componentDidMount() {
        // Get a TRIP
        TripModel.getTripById(this.props.match.params.id)
            .then((result) => {
                console.log(result);
                this.setState({ trip: result });
            })
            .catch((err) => console.log(err))
    }


    render() {
        console.log(this.props);
        return <Trip trip={this.state.trip} list={false} />;
        // return <div></div>
    }
};

export default TripContainer
