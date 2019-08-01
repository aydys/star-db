import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PersonPage from '../people-page';
import ErrorButton from '../error-button';

import './App.css';
import ErrorIndicator from '../error-indicator';

export default class App extends Component {
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
                <PersonPage />
                <PersonPage />
            </div>
        )
    }    
};