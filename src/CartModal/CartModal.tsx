import React from "react";
import { CartWrapper } from "./CartModal.styles";
import { CartItemType } from "../App";
import CartItem from "../CartItem/CartItem";
type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const CartModal: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  return (
    <CartWrapper>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? <p>No Items in cart.</p> : null}
      {cartItems.map((item, index) => (
        <CartItem key={index} item={item} addToCart={addToCart} removeFromCart={removeFromCart} />
      ))}
      <h3>
        Total: £{cartItems.reduce((acc, item) => acc + item.amount * item.price, 0).toFixed(2)}
      </h3>
    </CartWrapper>
  );
};

export default CartModal;
