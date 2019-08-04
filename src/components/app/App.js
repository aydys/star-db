import React, { Component } from 'react';

import Header from '../header';
import ErrorBoundry from '../error-boundry';

import './App.css';

import SwapiService from '../../services/swapi-services';
import DummySwapiService from '../../services/dummy-swapi-service';

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
    
    state = {
        hasError: false,
        swapiService: new DummySwapiService()
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