import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';

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
                <h3> Order Summary  </h3>
                <h4>
                    Cart items : {cart.length}
                </h4>
            </div>
        </div>
    );
};

export default Shop;