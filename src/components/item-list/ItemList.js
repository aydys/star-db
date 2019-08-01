import React, { Component } from 'react';

import Spinner from '../spinner';

import './ItemList.css';

export default class ItemList extends Component {

    state = {
        itemList: null
    };

    componentDidMount() {
        const { getData } = this.props;

        getData()
            .then((itemList) => {
                this.setState({
                    itemList
                })
            })
    }

    renderItems(arr) {
        return arr.map((item, index) => {
            const { id } = item;
            const label = this.props.children(item);
            if (index > 4) return;
            return (
                <li className="list-group-item"
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}>
                    {label}
                </li>
            );
        });
    }

    render() {
        const { itemList } = this.state;

        if(!itemList) {
            return <Spinner />
        }

        const items = this.renderItems(itemList);

        return (
            <ul className='item-list list-group'>
                {items}
            </ul>
        );
    }
}