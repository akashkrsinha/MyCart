import React, { useContext } from 'react';
import CartContext from '../context/CartContext';

export default function Cart() {
    let sum = 0;
    let { cart } = useContext(CartContext);

    sum = cart.reduce((acc, item) => acc + item.countInCart, 0);

    return (
        <div className="item">
            <i className="fa fa-shopping-cart" id='cartLogo'></i>
            <div>Cart</div>
            <span style={{ color: "white", background: "rgb(0,175,239)", padding: "3px", borderRadius: "50%", marginLeft: "5px" }}>{sum}</span>
        </div>
    );
}