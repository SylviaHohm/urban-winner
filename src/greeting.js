const createGreeting = (name, timeOfDay, mood) => {
  if (timeOfDay === "morning") {
    return "Good morning, " + name + "! I see you are " + mood + ". Hope you have a great day!";
  } else if (timeOfDay === "afternoon") {
    return "Good afternoon, " + name + "! I see you are " + mood + ". How's your day going?";
  } else if (timeOfDay === "evening") {
    return "Good evening, " + name + "! I see you are " + mood + ". How was your day?";
  } else {
    return "Hello, " + name + "! I see you are " + mood + ". Nice to see you!";
  }
};

// Test the greeting machine
console.log(createGreeting("Sarah", "morning", "happy"));
console.log(createGreeting("Mike", "evening", "tired"));