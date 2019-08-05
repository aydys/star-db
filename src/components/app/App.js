import React, { Component } from 'react';

import Header from '../header';
import ErrorBoundry from '../error-boundry';
import RandomPlanet from '../random-planet';
import StarshipDetails from '../sw-components/starship-details';

import './App.css';

import SwapiService from '../../services/swapi-services';
import DummySwapiService from '../../services/dummy-swapi-service';

import { SwapiServiceProvider} from '../swapi-service-context';

import { PeoplePage, PlanetPage, StarshipPage, LoginPage, SecretPage } from '../pages';

import { BrowserRouter as Router, Route } from 'react-router-dom';



export default class App extends Component {
    
    state = {
        hasError: false,
        swapiService: new SwapiService(),
        isLoggedIn: false
    };
    
    onLogin = () => {
        this.setState({
            isLoggedIn: true
        });
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
        const { isLoggedIn } = this.state;
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
                            <Route path='/login'
                                    render={() => (
                                        <LoginPage 
                                            isLoggedIn={isLoggedIn}
                                            onLogin={this.onLogin} />
                                    )} />
                            <Route path='/secret'
                                    render={() => (
                                        <SecretPage
                                            isLoggedIn={isLoggedIn} />
                                    )} />
                        </div>
                    </Router>
                </SwapiServiceProvider>                
            </ErrorBoundry>
            
        )
    }    
};