import React from 'react';
// import TripType from '../../components/TripType/TripType';
import TripTypeModel from '../../models/tripType'

import './TripTypeContainer.css'

class TripTypeContainer extends React.Component {
    state = {
        tripType: {}
    }

    componentDidMount() {
        // Get Trip Type
        TripTypeModel.getTripTypeById(this.props.match.params.tt_id)
            .then((result) => {
                console.log('Inside TT Details', result);
                this.setState({ tripType: result });
            })
            .catch((err) => console.log(err))
    }


    render() {
        console.log("TTC Render props", this.props);
        console.log("TTC Render state", this.state.tripType);
        const ttDetails = this.state.tripType
        // return <TripType tripType={this.state.tripType} list={false} />;  #####DONT FORGET THIS WAS CHANGED WITH DEREK
        return (
            <div className='ttc-container'>
                <h1>{ttDetails.title}</h1>
                <div className='ttc-bottom-container'>
                    <div className='ttc-left-container'>
                        <div>
                            <img className="trip-type-show-img" src={ttDetails.imgUrl} alt="nature" />
                        </div>
                        <div className='ttc-dates'>
                            <p>Start Dates</p>
                            <ul>
                                <li> <strong>Nov 16 2020</strong>    Cost: ${ttDetails.cost}</li>
                                <li> <strong>Mar 03 2021</strong>    Cost: ${ttDetails.cost}</li>
                                <li> <strong>Mar 16 2021</strong>    Cost: ${ttDetails.cost}</li>
                            </ul>
                        </div>
                    </div>
                    <div className='ttc-right-container'>
                        <div className="itinerary">
                            <p className='detail-title'>Trip Type Details</p>
                            <p>{ttDetails.tripLength} Days - {ttDetails.tripLength - 1} Nights</p>
                            <p className='detail-title'>Included Meals</p>
                            <p>{ttDetails.meals}</p>
                            <p className='itinerary-title'>Parks</p>
                            <p>{ttDetails.parks}</p>
                            <p className='itinerary-title'>Itinerary</p>
                            <p className='itinerary-info'>{ttDetails.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default TripTypeContainer