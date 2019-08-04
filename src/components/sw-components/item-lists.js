import React from 'react';
import ItemList from '../item-list';
import { withSwapiService, withData, withChildFunction, compose } from '../hoc-helper';

const renderName = ({name}) => <span>{name}</span>;
const renderModelandName = ({ model, name }) => <span>{name} ({model})</span>;

const mapPeopleMethodsToProps = (swapiSerice) => {
    return {
        getData: swapiSerice.getAllPeople
    };
};

const mapPlanetsMethodsToProps = (swapiSerice) => {
    return {
        getData: swapiSerice.getAllPlanets
    };
};

const mapStarshipsMethodsToProps = (swapiSerice) => {
    return {
        getData: swapiSerice.getAllStarships
    };
};

const PersonList = compose(
                        withSwapiService( mapPeopleMethodsToProps ),
                        withData,
                        withChildFunction( renderName )
                    )(ItemList);

const PlanetList = compose(
                        withSwapiService( mapPlanetsMethodsToProps ),
                        withData,
                        withChildFunction( renderName )
                    )(ItemList);

const StarshipList = compose(
                        withSwapiService( mapStarshipsMethodsToProps ),
                        withData,
                        withChildFunction( renderModelandName )
                    )(ItemList);

export {
    PersonList,
    PlanetList,
    StarshipList
}