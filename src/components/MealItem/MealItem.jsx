import React from "react";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

function MealItem({ name, desc, prices }) {
  const price = `$${prices.toFixed(2)}`;

  return (
    <>
      <li className={styles["meal"]}>
        <div>
          <h3>{name}</h3>
          <div className={styles.description}>{desc}</div>
          <div className={styles[price]}>{price}</div>
        </div>
        <div>
          <MealItemForm />
        </div>
      </li>
    </>
  );
}

export default MealItem;
