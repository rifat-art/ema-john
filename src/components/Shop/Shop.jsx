import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb } from '../../utilities/fakedb';

const Shop = () => {

    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     fetch ()
    // }, [])


    const [cart, setCart]= useState([]);

    const [products, setProducts] = useState([]);

    useEffect( () =>{
        fetch ('products.json')
        .then(res => res.json())
        .then( data => setProducts(data)) 
    }, [])


    const cartHandlerBtn = (product)=>{
        // console.log(product)

        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id)
    };


    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product
                        key= {product.id}
                        product={product}
                        cartHandlerBtn={cartHandlerBtn}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;