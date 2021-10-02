import React from 'react';

const OrderItem = (props) => {
    const { handleRemoveItem } = props;
    const { name, quantity, price, key } = props.product;
    return (
        <div className='single-product'>
            <div>
                <h2>Name : {name}</h2>
                <h4>Quantity : {quantity}</h4>
                <h1>Price : {price}</h1>
                <button onClick={() => handleRemoveItem(key)} className='purchase-btn'>Remove</button>
            </div>
        </div>
    );
};

export default OrderItem;