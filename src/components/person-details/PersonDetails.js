import React, { Component } from 'react';

import './PersonDetails.css';
import SwapiService from '../../services/swapi-services';
import Spinner from '../spinner';
import ErrorButton from '../error-button'

export default class PersonDetails extends Component {
    swapiService = new SwapiService();
    state = {
        person: null,
        update: false
    };

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson();
            this.setState({
                update: true
            })
        }
        if (this.state.person !== prevState.person) {
            this.setState({
                update: false
            })
        }     
    }

    updatePerson() {
        const { personId } = this.props;
        if ( !personId ) {
            return;
        }

        this.swapiService
            .getPerson(personId)
            .then((dataPerson) => {
                this.setState({
                    person: dataPerson
                })
            })
    }
    render() {
        
        if (!this.state.person) {
            return <Spinner />
        }

        if (this.state.update) {
            return <Spinner />
        }

        const { person: {id, name, gender, birthYear, eyeColor}} = this.state;

        return (
            <ul className='person-details card'>
                <img className='person-image'
                        alt='person'
                        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />

                <div className='card-body'>
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className='term'>Gender</span>
                            <span>{gender}</span>
                        </li>
                        <li className="list-group-item">
                            <span className='term'>Birth Year</span>
                            <span>{birthYear}</span>
                        </li>
                        <li className="list-group-item">
                            <span className='term'>Eye Color</span>
                            <span>{eyeColor}</span>
                        </li>
                    </ul>
                    <ErrorButton />
                </div>
            </ul>         
        )
    }
}