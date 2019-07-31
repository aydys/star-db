import React, { Component } from 'react';

import SwapiService from '../../services/swapi-services';

import ErrorIndicator from '../error-indicator';
import Spinner from '../spinner';

import './RandomPlanet.css';

export default class RandomPlanet extends Component {
    state = {
        planet: {},
        loading: true,
        error: false
    };
    
    swapiService = new SwapiService();

    componentWillMount() {
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 2500);
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    };

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false
        });
    };
    updatePlanet = () => {
        const id = Math.floor(Math.random()*25 + 2);
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    console.log('update')
    }
    render () {
        const { planet, loading, error } = this.state;

        const hasData = !(loading || error);
        const errorMessage = error ? <ErrorIndicator /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = hasData ? <PlanetView planet={ planet } /> : null;
        return (
            <div className='random-planet jumbotron rounded'>
                {errorMessage}
                {spinner}
                {content}        
            </div>
        )        
    }
}

const PlanetView = ({ planet }) => {
    const { id, name, population, rotationPeriod, diameter } = planet;
    return (
        <React.Fragment>
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
        </React.Fragment>
    )
}