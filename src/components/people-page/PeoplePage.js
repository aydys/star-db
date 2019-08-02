import React, { Component } from 'react';

import ItemList from '../item-list';
import ItemDetails from '../item-details';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-services';
import Row from '../row';
import ErrorBoundry from '../error-boundry';

import './PeoplePage.css';

export default class PeoplePage extends Component {
    swapiService = new SwapiService();
    state = {
        selectedPerson: 2
    };

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    }

    render() {
        if(this.state.hasError) {
            return <ErrorIndicator />;
        }

        const itemList = (
            <ItemList
            onItemSelected={this.onPersonSelected}
            getData={this.swapiService.getAllPeople}>
                 {(i) => `${i.name} (${i.gender}, ${i.birthYear})`}
            </ItemList>
        );

        const itemDetails = (
            <ItemDetails 
                itemId={this.state.selectedPerson}
                getData={this.swapiService.getPerson}
                getImageUrl={this.swapiService.getPersonImage} />
        );
        
        return (
            <ErrorBoundry>
                <Row left={itemList} right={itemDetails} />
            </ErrorBoundry>
        )
    }
};