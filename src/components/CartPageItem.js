import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from "../Styles/CartItem.module.css";
import CartContext from '../context/CartContext';

export default function CartPageItem({ id, name, price, image }) {
    const { removeFromCart } = useContext(CartContext);

    return (
        <>
            <div className={styles.cartItem}>
                <img src={image} className={styles.img} />
                <div className={styles.name}>
                    {name}
                </div>
                <div className={styles.price}>
                    <span><i className="fa fa-rupee"></i></span>{price}
                </div>

                <div className={styles.deleteBtn}>
                    <button onClick={() => removeFromCart(id)}>Delete</button>
                </div>

            </div>
        </>
    );
}