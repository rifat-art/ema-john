import React from 'react';
import './Product.css';

const Product = (props) => {
    const { img, name, seller, quantity, price, ratings } = props.product;

    const cartHandlerBtn = props.cartHandlerBtn;


    return (
        <div className='product'>
            <img src={img} alt="" />
            <h6 className='product-name'>
                {name}
            </h6>
            <p>
                <b>Price</b> = ${price}
            </p>
            <p className='product-seller'>
                Manufacturer: {seller}
            </p>
            <p className='product-rating'>
                Rating: {ratings} star
            </p>
            <button onClick={() => cartHandlerBtn(props.product)} className='cart-btn'>
                Add to Cart
            </button>
        </div>
    );
};

export default Product;