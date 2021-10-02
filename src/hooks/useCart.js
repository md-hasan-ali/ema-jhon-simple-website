// import { useState, useEffect } from 'react'
import { useEffect, useState } from 'react';
import { getStoredCart } from '../utilities/fakedb';


const useCart = (products) => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        if (products.length) {
            const savedCart = getStoredCart();
            const storedCard = []
            for (const key in savedCart) {
                const addedProduct = products.find(product => product.key === key)
                if (addedProduct) {
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCard.push(addedProduct)
                }
            }
            setCart(storedCard)
        }
    }, [products]);
    return [cart, setCart];
}
export default useCart;