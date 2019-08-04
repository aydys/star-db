import React from 'react';
import ItemList from '../item-list';
import withData from '../hoc-helper';
import withSwapiService from '../hoc-helper/with-swapi-service';

const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    }
};

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

const PersonList = withSwapiService( withData( withChildFunction(ItemList, renderName)), mapPeopleMethodsToProps);

const PlanetList = withSwapiService( withData( withChildFunction(ItemList, renderName)), mapPlanetsMethodsToProps);

const StarshipList = withSwapiService( withData( withChildFunction(ItemList, renderModelandName)), mapStarshipsMethodsToProps);

export {
    PersonList,
    PlanetList,
    StarshipList
}