import React from "react";
import { CartItemWrapper } from "./CartItem.styles";
import { CartItemType } from "../App";
type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => {
  return (
    <CartItemWrapper>
      <div className="header">
        <h3>{item.title}</h3>
        <img src={item.image} alt={item.title} srcSet="" />
      </div>
      <div className="content">
        <div className="content-sec">
          <p>Price: £{item.price}</p>
          <button onClick={() => removeFromCart(item.id)}>-</button>
        </div>
        <div className="amount">{item.amount}</div>
        <div className="content-sec">
          <p>Total: £{(item.amount * item.price).toFixed(2)}</p>
          <button onClick={() => addToCart(item)}>+</button>
        </div>
      </div>
      <hr />
    </CartItemWrapper>
  );
};

export default CartItem;
