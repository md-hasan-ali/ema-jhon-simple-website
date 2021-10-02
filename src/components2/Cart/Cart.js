import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    let totalQuantity = 0;
    let total = 0;
    for (const element of cart) {
        if (!element.quantity) {
            element.quantity = 1;
        }
        total = total + element.price * element.quantity;
        totalQuantity = totalQuantity + element.quantity;
    }
    return (
        <div>
            <h2>Order Summery</h2>
            <h3>Order Items : {totalQuantity}</h3>
            <h4>Total : {total.toFixed(2)}</h4>
            <p>Total Tax : {(total * 20 / 100).toFixed(2)}</p>
        </div>
    );
};

export default Cart;