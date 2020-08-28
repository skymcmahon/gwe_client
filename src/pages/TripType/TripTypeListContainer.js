import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import TripTypeModel from '../../models/tripType';
import TripTypeList from '../../components/TripTypeList/TripTypeList'
import HeaderCarousel from '../../components/HeaderCarousel/HeaderCarousel'

class TripTypeListContainer extends React.Component {
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
        return (
            <>
                <HeaderCarousel />
                <Link className='add-link' exact to={`/triptypes/new`}>
                    <button>Add Trip Type</button>
                </Link>

                <TripTypeList tripTypes={this.state.tripTypes} />
            </>
        )
    }
};

export default TripTypeListContainer