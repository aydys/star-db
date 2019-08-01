import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PersonPage from '../people-page';
import ErrorButton from '../error-button';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
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
                <div className='row mb2 itemApp'>
                    <div className='col-md-4'>
                        <ItemList 
                            onItemSelected={this.onPersonSelected}
                               getData={this.swapiService.getAllPlanets}
                               renderItem={(item) => (<span>{item.name}<button>!</button></span>)} />
                    </div>
                    <div className='col-md-5'>
                        <PersonDetails personId={this.state.selectedPerson} />
                    </div>
                </div>
                <div className='row mb2 itemApp'>
                    <div className='col-md-4'>
                        <ItemList 
                            onItemSelected={this.onPersonSelected}
                               getData={this.swapiService.getAllStarships}
                               renderItem={(item) => item.name} />
                    </div>
                    <div className='col-md-5'>
                        <PersonDetails personId={this.state.selectedPerson} />
                    </div>
                </div>
            </div>
        )
    }    
};