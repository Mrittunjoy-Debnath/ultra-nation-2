import React from 'react';
import country from "../Country/Country";

const Cart = (props) => {
    const cart = props.cart;
    // let totalPopulation = 0;
    // for (let i=0;i<cart.length;i++)
    // {
    //     const country = cart[i];
    //     totalPopulation = totalPopulation + country.population;
    // }
    const totalPopulation = cart.reduce((sum,country)=>sum+country.population,0);
    return (
        <div>
            <h2>This is cart : {cart.length}</h2>
            <h2>Population : {totalPopulation}</h2>
        </div>
    );
};

export default Cart;