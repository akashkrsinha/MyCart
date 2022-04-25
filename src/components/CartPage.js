import React, { useContext, useEffect, useState } from 'react';
import CartContext from '../context/CartContext';
import CartPageItem from './CartPageItem';

export default function CartPage() {
    let { cart } = useContext(CartContext);
    const [totalCartValue, setTotalCartValue] = useState(0);

    let newArr = cart.map(item => (
        <CartPageItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            countInStock={item.countInStock}
            countInCart={item.countInCart}
            image={item.image}
        />
    ))

    var sum = 0;
    for (let i = 0; i < newArr.length; i++) {
        let total = 0;
        total += newArr[i].props.price * newArr[i].props.countInCart

        sum += total
    }

    useEffect(() => {
        setTotalCartValue(sum)
    })

    return (
        <>
            <div className='content' style={{ flexDirection: "column" }}>
                <h1>Items in Cart</h1>
                {newArr}
                <h1>Total Cost Of cart : {totalCartValue}</h1>
            </div>
        </>
    );
}