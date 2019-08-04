import React from 'react';

import ItemDetails, { Record } from  '../item-details/ItemDetails';

import withSwapiService from '../hoc-helper/with-swapi-service';

const PlanetDetails = (props) => {
    return (
        <ItemDetails {...props}>                        
            <Record field='poulation' label='Population' />
            <Record field='rotationPeriod' label='Rotation Period' />
            <Record field='diameter' label='Diameter' />
        </ItemDetails>
    )
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPlanet,
        getImageUrl: swapiService.getImageUrl
    };
};

export default withSwapiService(PlanetDetails, mapMethodsToProps);