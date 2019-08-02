import React from 'react';

import WithData from '../hoc-helper';

import SwapiService from '../../services/swapi-services';

import './ItemList.css';

const ItemList = (props) => {

    const { data, onItemSelected,  children: renderLabel } = props;
    const items = data.map((item, index) => {
        const { id } = item;
        const label = renderLabel(item);
        if (index > 4) return;
        return (
            <li className="list-group-item"
                key={id}
                onClick={() => onItemSelected(id)}>
                {label}
            </li>
        );
    });
    
    return (
        <ul className='item-list list-group'>
            {items}
        </ul>
    )
    
}

export default ItemList;