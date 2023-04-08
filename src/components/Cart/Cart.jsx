import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    return (
        <div>
            <h3> Order Summary  </h3>
            <h4>
                Cart items : {cart.length}
            </h4>
        </div>
    );
};

export default Cart;