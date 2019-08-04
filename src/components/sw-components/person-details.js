import React from 'react';

import ItemDetails, { Record } from  '../item-details/ItemDetails';

import withSwapiService from '../hoc-helper/with-swapi-service';

const PersonDetails = (props) => {
    return (
        <ItemDetails {...props}>                        
            <Record field='gender' label='Gender' />
            <Record field='eyeColor' label='Eye Color' />
        </ItemDetails>                    
    )    
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPerson,
        getImageUrl: swapiService.getImageUrl
    };
};

export default withSwapiService(PersonDetails, mapMethodsToProps);