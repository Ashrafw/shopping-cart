import React from "react";
import { NavWrapper } from "./Navbar.styles";
import { FaShoppingCart } from "react-icons/fa";
import { Dispatch, SetStateAction } from "react";
import { CartItemType } from "../App";

type IProps = {
  setIsCartOpen: Dispatch<SetStateAction<boolean>>;
  cartItems: CartItemType[];
};
const Navbar = ({ setIsCartOpen, cartItems }: IProps) => {
  return (
    <NavWrapper>
      <h3>Ebay</h3>
      <div className="cart" onClick={() => setIsCartOpen((prev: boolean) => !prev)}>
        <FaShoppingCart style={{ fontSize: "2rem" }} />
        <div className="number">{cartItems.reduce((acc, item) => acc + item.amount, 0)}</div>
      </div>
    </NavWrapper>
  );
};

export default Navbar;
