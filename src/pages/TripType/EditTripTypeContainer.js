import React from 'react';
import TripType from '../../models/tripType';
import { withRouter } from 'react-router-dom'

class EditTripTypeContainer extends React.Component {
    state = {
        title: '',
        tripLength: '',
        parks: [],
        participants: '',
        cost: '',
        description: '',
        meals: '',
        imgUrl: '',
    };

    // Get the TripType by ID to be edited and update state
    componentDidMount() {
        TripType.getTripTypeById(this.props.match.params.tt_id)
            .then((result) => this.setState(result))
            .then(console.log(this.state))
            .catch((err) => console.log(err));
    }



    handleChange = (event) => {
        console.log(event.target.id, 'from EditTTContainer');

        this.setState({ [event.target.name]: event.target.value })
    };

    // Submit updated TripType object to server to save in database
    handleSubmit = (event) => {
        event.preventDefault();
        TripType.updateTripType(this.state, this.props.match.params.id)
            .then((result) => {
                console.log(result);
            });
        this.props.history.push(`/triptypes/${this.props.match.params.id}`);
    };

    render() {
        const { title, tripLength, parks, participants, cost, description, meals, imgUrl } = this.state;
        console.log(this);
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h2>Edit Trip Type</h2>
                    <div>
                        <label htmlFor="title">Title</label>
                        <input onChange={this.handleChage} type="text" name="title" id="title" value={title} />
                    </div>
                    <div>
                        <label htmlFor="tripLength">tripLength</label>
                        <input onChange={this.handleChage} type="text" name="tripLength" id="tripLength" value={tripLength} />
                    </div>
                    <div>
                        <label htmlFor="parks">parks</label>
                        <input onChange={this.handleChage} type="text" name="parks" id="parks" value={parks} />
                    </div>
                    <div>
                        <label htmlFor="participants">participants</label>
                        <input onChange={this.handleChage} type="text" name="participants" id="participants" value={participants} />
                    </div>
                    <div>
                        <label htmlFor="cost">cost</label>
                        <input onChange={this.handleChage} type="text" name="cost" id="cost" value={cost} />
                    </div>
                    <div>
                        <label htmlFor="description">description</label>
                        <input onChange={this.handleChage} type="text" name="description" id="description" value={description} />
                    </div>
                    <div>
                        <label htmlFor="meals">meals</label>
                        <input onChange={this.handleChage} type="text" name="meals" id="meals" value={meals} />
                    </div>
                    <div>
                        <label htmlFor="imgUrl">imgUrl</label>
                        <input onChange={this.handleChage} type="text" name="imgUrl" id="imgUrl" value={imgUrl} />
                    </div>
                    <button type="submit">Update Trip Type</button>
                </form>
            </div>
        )
    }
}


export default withRouter(EditTripTypeContainer);