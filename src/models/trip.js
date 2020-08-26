const url = `http://localhost:4000/api/trips`

export class Trip {
    static getAllTrips = () => {
        return fetch(url)
            .then((response) => response.json())
    }

    static getTripById = (tripId) => {
        return fetch(`${url}/${tripId}`)
            .then((response) => response.json())
    }
}

export default Trip;