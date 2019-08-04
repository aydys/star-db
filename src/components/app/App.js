import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PersonPage from '../people-page';
import ErrorButton from '../error-button';
import ItemDetails, { Record } from '../item-details/ItemDetails';
import ErrorBoundry from '../error-boundry';

import './App.css';

import SwapiService from '../../services/swapi-services';
import Row from '../row';

import { SwapiServiceProvider} from '../swapi-service-context';

import {
    PersonList,
    PlanetList,
    StarshipList,
    PersonDetails,
    PlanetDetails,
    StarshipDetails
} from '../sw-components';

export default class App extends Component {
    swapiService = new SwapiService();
    state = {
        hasError: false
    };

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    render() {
        const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

        const { getPerson, getStarship, getPersonImage, getStarshipImage } = this.swapiService;
        
        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.swapiService}>
                    <div className='stardb-app'>
                        <Header />

                        <PersonDetails itemId={11} />

                        <PlanetDetails itemId={21} />

                        <StarshipDetails itemId={9} />

                        <PersonList>
                            {({name}) => <span>{name}</span>}    
                        </PersonList>

                        <StarshipList>
                            {({name}) => <span>{name}</span>}    
                        </StarshipList>

                        <PlanetList>
                            {({name}) => <span>{name}</span>}    
                        </PlanetList>

                    </div>
                </SwapiServiceProvider>                
            </ErrorBoundry>
            
        )
    }    
};