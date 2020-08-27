const url = `http://localhost:4000/api/triptypes`

class TripType {
    static getAllTripTypes = () => {
        return fetch(url)
            .then((response) => response.json())
    }

    static getTripTypeById = (tripTypeId) => {
        console.log("inside TTModel", tripTypeId);
        return fetch(`${url}/${tripTypeId}`)
            .then((response) => response.json())
    }

    static createTripType = (tripType) => {
        return fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(tripType)
        })
            .then((response) => response.json())
            .catch((err) => console.log(err));
    }

    static updateTripType = (tripType, tripTypeId) => {
        return fetch(`${url}/${tripTypeId}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(tripType)
        }).then((response) => response.json());
    }

    static deleteTripType = (tripTypeId) => {
        return fetch(`${url}/${tripTypeId}/delete`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((response) => response.json())
            .catch((err) => console.log(err));
    }

}

export default TripType;