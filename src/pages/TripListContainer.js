import React from 'react';
import TripModel from '../models/trip';
import TripList from '../components/TripList/TripList'


class TripListContainer extends React.Component {
    state = {
        trips: []
    }

    componentDidMount() {
        // Get All TRIPS
        TripModel.getAllTrips()
            .then((result) => {
                console.log(result);
                this.setState({ trips: result.trips });
            })
            .catch((err) => console.log(err))
    }

    render() {
        // return <div></div>
        return <TripList trips={this.state.trips} />;
    }
};

export default TripListContainer