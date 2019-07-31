import React, { Component } from 'react';

import SwapiService from '../../services/swapi-services';

import './RandomPlanet.css';

export default class RandomPlanet extends Component {
    constructor() {
        super();
        this.updatePlanet()
    }
    state = {
        planet: {}
    };
    swapiService = new SwapiService();
    onPlanetLoad = (planet) => {
        this.setState({planet});
    };
    updatePlanet() {
        const id = Math.floor(Math.random()*25 + 2);
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoad);
    }
    render () {
        const { planet:{id, name, population, rotationPeriod, diameter} } = this.state;
        return (
            <div className='random-planet jumbotron rounded'>
                <img className='planet-image'
                        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                        alt="planet" />
                <h4>{name}</h4>
                <ul className="list-gruop list-group-flush">
                    <li className='list-group-item'>
                        <span className='term'>Population</span>
                        <span>{population}</span>
                    </li>
                    <li className='list-group-item'>
                        <span className='term'>Rotaion Period</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className='list-group-item'>
                        <span className='term'>Diameter</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        )        
    }
}