import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PersonPage from '../people-page';
import ErrorButton from '../error-button';
// import ItemList from '../item-list';
// import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';

import './App.css';

import SwapiService from '../../services/swapi-services';

export default class App extends Component {
    swapiService = new SwapiService();
    state = {
        hasError: false
    };

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        return (
            <div>
                <Header />
                <RandomPlanet />
                <ErrorButton />
    
                <PersonPage />
            </div>
        )
    }    
};