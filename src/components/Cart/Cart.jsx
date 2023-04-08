import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;


    let total = 0;
    let totalShipping = 0;
    for (const product of cart){
        total =total + product.price;
        totalShipping = totalShipping + product.shipping;
    }

    const tax = total*7/100;
    const grandTotal = total + totalShipping + tax;

    return (
        <div className='cart'>
            <h3> Order Summary  </h3>
            <p>
                Selected items : {cart.length}
            </p>
            <p>
                Total Price: $ {total.toFixed(2)}
            </p>
            <p>
                Total Shipping Charge: $ {totalShipping.toFixed(2)}
            </p>
            <p>
                Tax: $ {tax.toFixed(2)}
            </p>
            <h3>
                Grand Total: $ {grandTotal.toFixed(2)}
            </h3>
        </div>
    );
};

export default Cart;