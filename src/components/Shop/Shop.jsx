import React, { useEffect, useState } from 'react';
import './Shop.css';

const Shop = () => {

    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     fetch ()
    // }, [])


    const [products, setProducts] = useState([]);

    useEffect( () =>{
        fetch ('products.json')
        .then(res => res.json())
        .then( data => setProducts(data)) 
    }, [])

    return (
        <div className='shop-container'>
            <div className='product-container'>
                <h2>product : {products.length} </h2>
            </div>
            <div className='cart-container'>
                <h3> cart  </h3>
            </div>
        </div>
    );
};

export default Shop;