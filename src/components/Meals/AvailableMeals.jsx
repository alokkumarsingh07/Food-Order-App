import React from "react";
import DUMMY_MEALS from "./dummy-meals";
import Card from "../UI/Card";
import MealItem from "../MealItem/MealItem";
function AvailableMeals() {
  const mealList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      desc={meal.description}
      prices={meal.price}
    />
  ));

  return (
    <>
      <section className="classes.meals">
        <Card>
          <ul>{mealList}</ul>
        </Card>
      </section>
    </>
  );
}

export default AvailableMeals;
