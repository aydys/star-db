export default class SwapiService {
    _apiBase = 'https://swapi.co/api';
     async _getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }
        return await res.json();
    }
    async getAllPeople(){
        const res = await this._getResource(`/people/`);
        return res.results.map(this._transformedPerson);
    }
    async getPerson(id){
        const person = await this._getResource(`/people/${id}`)
        return this._transformedPerson(person);
    }
    async getAllPlanets() {
        const res = await this._getResource(`/planets/`);
        return res.results.map(this._transformedPlanet);
    }
    async getPlanet(id){
        const planet = await this._getResource(`/planets/${id}/`);
        return this._transformedPlanet(planet);
    }
     async getAllStarships() {
        const res = await this._getResource(`/starships/`);
        return res.results.map(this._transformedPlanet);
    }
    async getStarship(id) {
        const starship = await this._getResource(`/starships/${id}/`)
        return this._transformedStarship(starship);
    }

    _extractId(item) {
        const idRegrex = /\/([0-9]*)\/$/;
        return item.url.match(idRegrex)[1];
    }

    _transformedPlanet = (planet) => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        };
    };

    _transformedStarship = (starship) => {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.costInCredits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargoCapacity
        }
    }

    _transformedPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYrear: person.birthYear,
            eyeColor: person.eyeColor
        }
    }
}
