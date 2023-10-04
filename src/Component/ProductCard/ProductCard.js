import React, { useState } from 'react';

export default function ProductCard({ title, price }) {
    const [quantity, setQuantity] = useState(0);

    function incrementQuantity() {
        setQuantity(quantity + 1);
    }

    function decrementQuantity() {
        setQuantity(quantity - 1);
    }

    return ( <
        div className = 'product-card' >
        <
        h1 > { title } < /h1>  <
        p > Rs. { price } < /p> <
        br / >

        <
        button onClick = { incrementQuantity } > + < /button>   { quantity } 

        <
        button onClick = { decrementQuantity } > - < /button>    <
        br / >
        <
        br / >

        <
        button > Buy Now < /button> < /
        div >

    )
}