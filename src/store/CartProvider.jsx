import CartContext from "./CartContext.jsx";

const CartProvider = (props) => {
  const addItemToCart = (item) => {};

  const removeItemFromCart = (id) => {};

  const ctx = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };

  return (
    <CartContext.Provider value={ctx}>{props.children}</CartContext.Provider>
  );
};

export default CartProvider;
