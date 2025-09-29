const checkIfHealthy = (food) => {
  const healthyFoods = ["salad", "fruit", "vegetables"];
  const unhealthyFoods = ["pizza", "burger", "candy"];
  return healthyFoods.includes(food.toLowerCase());
};

const calculateMealCost = (food, quantity) => {
  const isHealthy = checkIfHealthy(food);
  const pricePerItem = isHealthy ? 5 : 8;
  return pricePerItem * quantity;
};

const planMeal = (food, quantity, budget) => {
  const isHealthy = checkIfHealthy(food);
  const totalCost = calculateMealCost(food, quantity);

  if (totalCost > budget) {
    return `Your meal of ${quantity} ${food}(s) costs $${totalCost}, which exceeds your budget of $${budget}. Consider reducing quantity or choosing a cheaper option.`;
  } else {
    const healthMessage = isHealthy
      ? "Great choice! That's a healthy meal."
      : "Tasty, but not the healthiest option.";
    return `Your meal of ${quantity} ${food}(s) costs $${totalCost}, within your budget of $${budget}. ${healthMessage}`;
  }
};

// Example usage:
console.log(planMeal("salad", 2, 15)); // Should return advice about the meal
console.log(planMeal("pizza", 3, 20)); // Should return advice about the meal