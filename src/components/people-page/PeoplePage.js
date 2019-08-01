import React, { Component } from 'react';

import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-services';

import './PeoplePage.css';

const Row = ({left, right}) => {
    return (
        <div className='row mb2 itemApp'>
            <div className='col-md-4'>
                {left}
            </div>
            <div className='col-md-5'>
                {right}        
            </div>
        </div>
    )
};

class ErrorBoundry extends Component {
    state = {
        hasError: false
    }
    componentDidCatch() {
        this.setState({ hasError: true });
    }
    render() {
        if(this.state.hasError) {
            return <ErrorIndicator />
        }
        return this.props.children;
    }
}

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

        const personDetails = (
            <PersonDetails personId={this.state.selectedPerson} />
        );
        return (
            <ErrorBoundry>
                <Row left={itemList} right={personDetails} />
            </ErrorBoundry>
        )
    }
};