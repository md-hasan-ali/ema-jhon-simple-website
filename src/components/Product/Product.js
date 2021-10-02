import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, price, img, stock, seller } = props.product;

    // console.log(props)
    return (
        <div className='single-product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h3 className='product-name'>{name}</h3>
                <h2>{price}</h2>
                <p>By : {seller}</p>
                <p><small>In Stock : {stock}</small></p>
                <button
                    onClick={() => props.handleClickBtn(props.product)}
                    className='purchase-button'>Add to cart</button>
            </div>
        </div>

    );
};

export default Product;