import React, { Component } from 'react';

import './random-planet.css';

export default class RandomPlanet extends Component {
    render () {
        <div className='random-planet jumbotron rounded'>
            <img className='planet-image'
                    src='https://starwars-visualguide.com/assets/img/planets/5.jpg' />
            <h4>Planet Name</h4>
            <ul className="list-gruop list-group-flush">
                <li className='list-group-item'>
                    <span className='term'>Population</span>
                    <span>123124</span>
                </li>
                <li className='list-group-item'>
                    <span className='term'>Rotaion Period</span>
                    <span>43</span>
                </li>
                <li className='list-group-item'>
                    <span className='term'>Diameter</span>
                    <span>100</span>
                </li>
            </ul>
        </div>
    }
}