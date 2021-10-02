import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const [displaProduct, setDisplayProduct] = useState([])
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setDisplayProduct(data)
            })
    }, [])
    useEffect(() => {
        if (products.length) {
            const savedData = getStoredCart();
            const storedCart = []
            for (const key in savedData) {
                const addToProduct = products.find(product => product.key === key);
                if (addToProduct) {
                    const quantity = savedData[key];
                    addToProduct.quantity = quantity;
                    // console.log(addToProduct)
                    storedCart.push(addToProduct)
                }

            }
            setCart(storedCart)
        }

    }, [products])

    const handleAddToCart = product => {
        const newCart = [...cart, product]
        setCart(newCart)
        addToDb(product.key)
    }
    const handleSeachClick = event => {
        const searchText = event.target.value;
        const matchProduct = products.filter(product => product.name.includes(searchText))

        setDisplayProduct(matchProduct)
        console.log(matchProduct.length)
    }
    return (
        <div>
            <div className='search-container'>
                <input onChange={handleSeachClick} type="text" placeholder='search your product' />
            </div>

            <div className='shop-container'>
                <div className='product-container'>
                    <h2>Product Length : {products.length}</h2>
                    {
                        displaProduct.map(product => <Product
                            key={product.key}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                    }
                </div>
                <div className='cart-container'>
                    <Cart cart={cart}></Cart>
                </div>
            </div>

        </div>

    );
};

export default Shop;