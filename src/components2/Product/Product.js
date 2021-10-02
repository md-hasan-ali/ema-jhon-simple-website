import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import Rating from 'react-rating';

const Product = (props) => {
    const { name, price, seller, stock, img, star } = props.product;
    // console.log(props)
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className='single-product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h2>{name}</h2>
                <h4>Price : {price}</h4>
                <p>By : {seller}</p>
                <p><small>In Stock : {stock}</small></p>
                <Rating className='icon'
                    initialRating={star}
                    readonly
                    emptySymbol="fa fa-star-o fa-2x icon-style"
                    fullSymbol="fa fa-star fa-2x icon-style">
                </Rating>
                <br />
                <button
                    onClick={() => props.handleAddToCart(props.product)} className='purchase-btn'>{element} Add to cart</button>
            </div>
        </div>
    );
};

export default Product;