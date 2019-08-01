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

export default class PeoplePage extends Component {
    swapiService = new SwapiService();
    state = {
        selectedPerson: 2,
        hasError: false
    };

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    }

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    render() {
        if(this.state.hasError) {
            return <ErrorIndicator />;
        }

        const itemList = (
            <ItemList 
            onItemSelected={this.onPersonSelected}
            getData={this.swapiService.getAllPeople}
            renderItem={({ name, gender, birthYear}) => `${name} (${gender}, ${birthYear})`} />
        );

        const personDetails = (
            <PersonDetails personId={this.state.selectedPerson} />
        );
        return (
            <div>
                <Row left={itemList} right={personDetails} />
                <Row left={<p>Hello</p>} right={<p>World!</p>} />
            </div>
        )
    }
};