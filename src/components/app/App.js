import React, { Component } from 'react';

import Header from '../header';
import ErrorBoundry from '../error-boundry';
import RandomPlanet from '../random-planet';
import './App.css';

import SwapiService from '../../services/swapi-services';
import DummySwapiService from '../../services/dummy-swapi-service';

import { SwapiServiceProvider} from '../swapi-service-context';

import { PeoplePage, PlanetPage, StarshipPage } from '../pages';

export default class App extends Component {
    
    state = {
        hasError: false,
        swapiService: new SwapiService()
    };

    onServiceChange = () => {
        this.setState(({ swapiService }) => {
            const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService;

            return {
                swapiService: new Service()
            }
        })
    }

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    render() {
        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <div className='stardb-app'>
                        <Header 
                            onServiceChange={this.onServiceChange}/>
                        <RandomPlanet />
                        <PeoplePage />
                        <PlanetPage />
                        <StarshipPage />
                    </div>
                </SwapiServiceProvider>                
            </ErrorBoundry>
            
        )
    }    
};