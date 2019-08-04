import React, { Component } from 'react';

import Header from '../header';
import ErrorBoundry from '../error-boundry';
import RandomPlanet from '../random-planet';
import StarshipDetails from '../sw-components/starship-details';
// import {Record} from '../item-details/ItemDetails';

import './App.css';

import SwapiService from '../../services/swapi-services';
import DummySwapiService from '../../services/dummy-swapi-service';

import { SwapiServiceProvider} from '../swapi-service-context';

import { PeoplePage, PlanetPage, StarshipPage } from '../pages';

import { BrowserRouter as Router, Route } from 'react-router-dom';



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
                    <Router>
                        <div className='stardb-app'>
                            <Header 
                                onServiceChange={this.onServiceChange}/>
                            <RandomPlanet />
                            
                            <Route path='/'
                                    render={() => <h2>Welcome to StarDB</h2>}
                                    exact />
                            <Route path='/people/:id?' component={PeoplePage} />
                            <Route path='/planets/' component={PlanetPage} />
                            <Route path='/starships/' 
                                    component={StarshipPage}
                                    exact />
                            <Route path='/starships/:id'
                                    render={({ match }) => {
                                        const { id } = match.params;
                                        return <StarshipDetails itemId={id} />
                                    }} />

                        </div>
                    </Router>
                </SwapiServiceProvider>                
            </ErrorBoundry>
            
        )
    }    
};