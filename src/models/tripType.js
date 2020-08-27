const url = `http://localhost:4000/api/triptypes`

export class TripType {
    static getAllTripTypes = () => {
        return fetch(url)
            .then((response) => response.json())
    }

    static getTripTypeById = (tripTypeId) => {
        console.log("inside TTModel", tripTypeId);
        return fetch(`${url}/${tripTypeId}`)
            .then((response) => response.json())
    }
}

export default TripType;