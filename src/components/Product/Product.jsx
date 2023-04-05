import React from 'react';
import './Product.css';

const Product = (props) => {
    const { img, name, seller, quantity, price, ratings } = props.product;
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
        </div>
    );
};

export default Product;