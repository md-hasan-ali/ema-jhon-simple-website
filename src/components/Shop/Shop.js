import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleClickBtn = product => {
        const newCount = [...cart, product];
        setCart(newCount)
        // console.log(product)
    }
    return (
        <div className='shop-container'>
            <div className="product-area">
                <h2>Product:{products.length}</h2>
                {
                    products.map(product => <Product
                        key={product.key}
                        product={product}
                        handleClickBtn={handleClickBtn}
                    ></Product>)
                }
            </div>
            <div className="cart-area">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;