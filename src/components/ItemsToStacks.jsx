import React, { useState } from 'react';
import stacks from '../assets/stacks.png'

const ItemsToStacks = () => {
    const [items, setItems] = useState("")

    const result = () =>{
        if (items !== "") {
            return (
                <strong>{Math.floor(parseInt(items) / 64)} Stacks y {parseInt(items) % 64} Items</strong>
            )
        }
    }

    return (
        <section className='section-tools'>
            <h2 className="title">Items / Stacks </h2>
            <img src={stacks} alt="" className="img-section" />

            <form className='form'>
                <div className="input-container">
                    <label htmlFor="items">Items</label>
                    <input value={items} onChange={e => setItems(e.target.value)} placeholder='Ingresa la cantidad de items' type="number" id="items" />
                </div>

                <h3>Resultado: {result()}</h3>
            </form>
        </section>
    );
};

export default ItemsToStacks;