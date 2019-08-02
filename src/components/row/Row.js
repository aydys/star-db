import React from 'react';

import './Row.css';

const Row = ({left, right}) => {
    return (
        <div className='row mb2 itemApp'>
            <div className='col-md-5'>
                {left}
            </div>
            <div className='col-md-5'>
                {right}        
            </div>
        </div>
    )
};

export default Row;