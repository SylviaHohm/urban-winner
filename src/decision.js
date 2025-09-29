const giveAdvice = (situation, energyLevel) => {
  console.log("Analyzing situation:", situation);
  console.log("Energy level:", energyLevel);

  if (situation === "study" && energyLevel === "high") {
    return "Perfect time to tackle that challenging material!";
  }
  if (situation === "study" && energyLevel === "low") {
    return "Maybe try some light review or take a break first.";
  }
  if (situation === "exercise" && energyLevel === "high") {
    return "Great! Go for that intense workout!";
  }
  if (situation === "exercise" && energyLevel === "low") {
    return "A gentle walk or light stretching might be perfect.";
  }
  return "Take a moment to assess what you really need right now.";
};

// Getting personalized advice
const advice1 = giveAdvice("study", "high");
const advice2 = giveAdvice("exercise", "low");

console.log("Advice 1:", advice1);
console.log("Advice 2:", advice2);
