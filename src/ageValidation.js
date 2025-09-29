const validateAge = (age) => {
  if (age >= 18) {
    return "adult";
  }
  return "minor";
};

const createWelcomeMessage = (name, age) => {
  const ageCategory = validateAge(age); // One function calling another!

  if (ageCategory === "adult") {
    return `Welcome, ${name}! You have full access.`;
  }
  return `Hi ${name}! You have limited access until you turn 18.`;
};

// Test the combined functions
console.log(createWelcomeMessage("Alex", 22));
console.log(createWelcomeMessage("Sam", 16));
