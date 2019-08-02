import React from 'react';

import ItemDetails, { Record } from  '../item-details/ItemDetails';
import SwapiService from '../../services/swapi-services';

const swapiService = new SwapiService();

const {
    getPerson,
    getPlanet,
    getStarship,
    getPersonImage,
    getPlanetImage,
    getStarshipImage
} = swapiService;

const PersonDetails = ({ itemId }) => {
    return (
    <ItemDetails 
        itemId = {itemId}
        getData={getPerson}
        getImageUrl = {getPersonImage}>
        
        <Record field='gender' label='Gender' />
        <Record field='eyeColor' label='Eye Color' />

    </ItemDetails>
    )    
};

const PlanetDetails = ({ itemId }) => {
    return (
        <ItemDetails 
            itemId = {itemId}
            getData={getPlanet}
            getImageUrl = {getPlanetImage}>
            
            <Record field='gender' label='Gender' />
            <Record field='eyeColor' label='Eye Color' />
    
        </ItemDetails>
        )
};

const StarshipDetails = ({ itemId }) => {
    return (
        <ItemDetails 
            itemId = {itemId}
            getData={getStarship}
            getImageUrl = {getStarshipImage}>
            
            <Record field='gender' label='Gender' />
            <Record field='eyeColor' label='Eye Color' />
    
        </ItemDetails>
        )
};

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
}