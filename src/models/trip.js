const url = `http://localhost:4000/api/tripstypes`

export class Trip {
    static getAllTrips = () => {
        return fetch(url)
            .then((response) => response.json())
    }

    static getTripById = (tripTypeId, tripId) => {
        console.log(tripTypeId, 'TT id from trip model in #Show');
        return fetch(`${url}/${tripTypeId}/trips/${tripId}`)
            .then((response) => response.json())
    }

    static createTrip = (tripTypeId, createdTrip) => {
        console.log(tripTypeId)
        return fetch(`${url}/${tripTypeId}/trips`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(createdTrip)
        })
            .then((response) => response.json())
            .catch((err) => console.log(err));
    }

    static updateTrip = (tripTypeId, trip, tripId) => {
        console.log(tripTypeId)
        return fetch(`${url}/${tripTypeId}/trips/${tripId}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(trip)
        }).then((response) => response.json());
    }

    static deleteTrip = (tripTypeId, tripId) => {
        return fetch(`${url}/${tripTypeId}/trips/${tripId}/delete`, { //?????????????????
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((response) => response.json())
            .catch((err) => console.log(err));
    };

}

export default Trip;