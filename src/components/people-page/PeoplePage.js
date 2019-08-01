import React, { Component } from 'react';

import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './PeoplePage.css';
import ErrorIndicator from '../error-indicator';

export default class PeoplePage extends Component {

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
        return (
            <div className='row mb2 itemApp'>
                <div className='col-md-4'>
                    <ItemList onItemSelected={this.onPersonSelected}/>
                </div>
                <div className='col-md-5'>
                    <PersonDetails personId={this.state.selectedPerson} />
                </div>
            </div>
        )
    }
};