import React from "react";
import { CartItemType } from "../App";
import { WrapperItem } from "./SingleItem.styles";

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};
const Item = ({ item, handleAddToCart }: Props) => {
  return (
    <WrapperItem>
      <img src={item.image} alt={item.title} srcSet="" />
      {/* <div className="content"> */}
      <h2>{item.title}</h2>
      {/* <p>{item.description.slice(0, 220)}</p> */}
      {/* </div> */}
      <h3>£{item.price}</h3>
      <button onClick={() => handleAddToCart(item)}>Add to cart</button>
    </WrapperItem>
  );
};

export default Item;
