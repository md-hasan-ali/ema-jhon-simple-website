import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // console.log(props.cart)
    let total = 0;
    for (const element of props.cart) {
        total = total + element.price;
    }
    return (
        <div>
            <h2>Order Summery</h2>
            <h3>Item Order : {props.cart.length}</h3>
            <h4>Total : {total.toFixed(2)}</h4>
            <p>Total Tax : {((total * 20) / 100)}</p>
        </div>
    );
};

export default Cart;