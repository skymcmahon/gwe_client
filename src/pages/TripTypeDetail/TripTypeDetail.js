// import React from 'react';
// // import TripType from '../components/TripType/TripType';
// import TripTypeModel from '../../models/tripType'




// class TripTypeDetails extends React.Component {
//     state = {
//         tripType: {}
//     }

//     componentDidMount() {
//         // Get Trip Type
//         TripTypeModel.getTripTypeById(this.props.match.params.id)
//             .then((result) => {
//                 console.log(result);
//                 this.setState({ tripType: result });
//             })
//             .catch((err) => console.log(err))
//     }


//     render() {
//         console.log("",this.state.tripType);
//         return <div></div>
//     }
// };

// export default TripTypeDetails