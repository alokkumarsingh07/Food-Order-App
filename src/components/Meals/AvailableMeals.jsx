import React from "react";
import DUMMY_MEALS from "./dummy-meals";

function AvailableMeals() {
  const mealList = DUMMY_MEALS.map((meal) => <li>{meal.name}</li>);

  return (
    <>
      <section className="classes.meals">
        <ul>{mealList}</ul>
      </section>
    </>
  );
}

export default AvailableMeals;
