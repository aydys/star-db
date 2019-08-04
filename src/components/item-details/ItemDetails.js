import React, { Component } from 'react';

import './ItemDetails.css';

import Spinner from '../spinner';
import ErrorButton from '../error-button';

const Record = ({ item, field, label }) => {
    return (
        <li className="list-group-item">
            <span className='term'>{label}</span>
            <span>{item[field]}</span>
        </li>       
    )    
};

export { Record };

export default class ItemDetails extends Component {
    state = {
        item: null,
        image: null,
        update: false
    };

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
            this.setState({
                update: true
            })
        }
        if (this.state.item !== prevState.item) {
            this.setState({
                update: false
            })
        }     
    }

    updateItem() {
        const { itemId, getData, getImageUrl } = this.props;
        if ( !itemId ) {
            return;
        }

        getData(itemId)
            .then((dataItem) => {
                this.setState({
                    item: dataItem,
                    image: getImageUrl(dataItem)
                })                
            })
            .catch(function(error) {
                console.log('Request failed', error)
            })
    }
    render() {
        console.log(this.state.item)
        if (!this.state.item) {
            return <Spinner />
        }

        if (this.state.update) {
            return <Spinner />
        }

        const { item, image} = this.state;
        const {name} = item;

        return (
            <ul className='person-details card'>
                <img className='person-image'
                        alt='person'
                        src={image} />

                <div className='card-body'>
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        {
                            React.Children.map(this.props.children, (child) => {
                                return React.cloneElement(child, { item })
                            })
                        }
                    </ul>
                    <ErrorButton />
                </div>
            </ul>         
        )
    }
}