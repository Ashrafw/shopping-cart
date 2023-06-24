import axios from "axios";
import { useQuery } from "react-query";
import { useState } from "react";
// components
import Navbar from "./Navbar/Navbar";
import Item from "./Item/Item";
// styles
import "./App.css";
import { Wrapper } from "./App.styles";
import CartModal from "./CartModal/CartModal";

export type CartItemType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  amount: number;
};
export type QueryCartItemType = {
  data: CartItemType[];
};

const getProducts = async (): Promise<QueryCartItemType> =>
  await axios.get("https://fakestoreapi.com/products");

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);

  const { data, isLoading, error } = useQuery<QueryCartItemType>("products", getProducts);

  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((acc: number, item) => acc + item.amount, 0);

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems((prev) => {
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);
      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id ? { ...item, amount: item.amount + 1 } : item
        );
      } else {
        return [...prev, { ...clickedItem, amount: 1 }];
      }
    });
  };
  const handleRemoveFromCart = (id: number) => {
    setCartItems((prev) => {
      return prev.reduce((acc, item) => {
        if (item.id === id) {
          if (item.amount === 1) return acc;
          return [...acc, { ...item, amount: item.amount - 1 }];
        } else {
          return [...acc, item];
        }
      }, [] as CartItemType[]);
    });
  };

  console.log("isCartOpen :>> ", isCartOpen);

  if (isLoading) return <h1>Loading</h1>;

  if (error) return <h1>something went wrong</h1>;

  return (
    <div className="App">
      <Navbar cartItems={cartItems} setIsCartOpen={setIsCartOpen} />
      {isCartOpen && (
        <CartModal
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
      )}
      <Wrapper>
        {data &&
          data.data.map((item: CartItemType) => (
            <Item item={item} handleAddToCart={handleAddToCart} />
          ))}
      </Wrapper>
    </div>
  );
};

export default App;
