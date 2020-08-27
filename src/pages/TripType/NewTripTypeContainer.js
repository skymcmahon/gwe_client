
import React from 'react';
import { withRouter } from 'react-router-dom';
import TripType from '../../models/tripType';

class NewTripTypeContainer extends React.Component {
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

    handleChage = (event) => {
        console.log(event.target.id, 'forom new TT Container');
        this.setState({ [event.target.name]: event.target.value })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        TripType.createTripType(this.state)
            .then((result) => {
                console.log(result);
            });
        this.props.history.push('/triptypes');
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h2>Add Trip Type</h2>
                    <div>
                        <label htmlFor="">Title</label>
                        <input onInput={this.handleChage} type="text" name="title" />
                    </div>
                    <div>
                        <label htmlFor="">tripLength</label>
                        <input onInput={this.handleChage} type="text" name="tripLength" />
                    </div>
                    <div>
                        <label htmlFor="">parks</label>
                        <input onInput={this.handleChage} type="text" name="parks" />
                    </div>
                    <div>
                        <label htmlFor="">participants</label>
                        <input onInput={this.handleChage} type="text" name="participants" />
                    </div>
                    <div>
                        <label htmlFor="">cost</label>
                        <input onInput={this.handleChage} type="text" name="cost" />
                    </div>
                    <div>
                        <label htmlFor="">description</label>
                        <input onInput={this.handleChage} type="text" name="description" />
                    </div>
                    <div>
                        <label htmlFor="">meals</label>
                        <input onInput={this.handleChage} type="text" name="meals" />
                    </div>
                    <div>
                        <label htmlFor="">imgUrl</label>
                        <input onInput={this.handleChage} type="text" name="imgUrl" />
                    </div>
                    <button type="submit">Add Trip Type</button>
                </form>
            </div>
        );
    }
}

export default withRouter(NewTripTypeContainer);