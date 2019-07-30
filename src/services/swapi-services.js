export default class SwapiService {
    constructor() {
        this._apiBase = 'https://swapi.co/api';
        this.getResource = async (url) => {
            const res = await fetch(`${this._apiBase}${url}`);

            if(!res.ok) {
                throw new Error(`Could not fetch ${url}, received ${res.status}`);
            }
            return await res.json();
        }

        this.getAllPeople = async () => {
            const res = await this.getResource(`/people/`);
            return res.results;
        }

        this.getPerson = (id) => {
            return this.getResource(`/people/${id}/`)
        }

        this.getAllPlanets = async () => {
            const res = await this.getResource(`/planets/`);
            return res.results;
        }

        this.getPlanet = (id) => {
            return this.getResource(`/planets/${id}/`)
        }

        this.getAllStarships = async () => {
            const res = await this.getResource(`/starships/`);
            return res.results;
        }

        this.getStarship = (id) => {
            return this.getResource(`/starships/${id}/`)
        }
    }
}

const swapi = new SwapiService();

swapi.getStarship(9).then((p) => {
        console.log(p.name);
});