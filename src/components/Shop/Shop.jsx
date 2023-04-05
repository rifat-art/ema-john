import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';

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


    const cartHandlerBtn = (props)=>{
        console.log(props)
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
                <h3> cart  </h3>
            </div>
        </div>
    );
};

export default Shop;