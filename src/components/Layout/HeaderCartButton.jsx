import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
import CartContext from "../../store/CartContext";

function HeaderCartButton(props) {
  const cartCtx = useContext(CartContext);

  const totalItems = cartCtx.items.reduce(
    (prevNum, item) => prevNum + item.amount,
    0
  );
  return (
    <>
      <button className={styles["button"]} onClick={props.onClick}>
        <span className={styles["icon"]}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={styles["badge"]}>{totalItems}</span>
      </button>
    </>
  );
}

export default HeaderCartButton;
