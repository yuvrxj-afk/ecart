import React from "react";
import { AiFillDelete } from "react-icons/ai";

import img1 from "../assets/1.jpg";

const Cart = () => {
  return (
    <div className="cart">
      <main>
      <CartItem imgSrc={img1} price={200} name={"Macbook"} qty={12} id="ad" />
      </main>
      <aside>
        <h2>SubTotal: ${2000}</h2>
        <h2>Shipping: ${200}</h2>
        <h2>Tax: ${20}</h2>
        <h2>Total: ${1220}</h2>
      </aside>
    </div>
  );
};

const CartItem = ({
  imgSrc,
  price,
  name,
  qty,
  decrement,
  increment,
  deleteHandler,
  id,
}) => (
  <div className="cartItem">
    <img src={imgSrc} alt={name} />
    <article>
      <h3>{name}</h3>
      <p>${price}</p>
    </article>
    <div>
      <button onClick={() => decrement(id)}>-</button>
      <p>{qty}</p>
      <button onClick={() => increment(id)}>+</button>
    </div>
    <AiFillDelete onClick={() => deleteHandler(id)} />
  </div>
);

export default Cart;
