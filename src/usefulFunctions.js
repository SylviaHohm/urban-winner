// 1. A function that tells you how many hours until bedtime
const hoursUntilBedtime = (currentHour, bedtimeHour) => {
    return(bedtimeHour - currentHour);
  
  // Should handle cases where bedtime is the next day ???
};

// 2. A function that gives study advice based on hours available
const getStudyAdvice = (hoursAvailable) => {
  if (hoursAvailable < 1) {
    return ("Quick review sesion");
  }
  else if (hoursAvailable <= 2) {
    return ("Focus on practice problems");
  }
  else {
    return ("Deep learning time!");
  }
};

// 3. A function that calculates how much to tip
const calculateTipAmount = (billTotal, serviceQuality) => {
  if (serviceQuality === "poor") {
    return (billTotal * 1.1);
  }
  if(serviceQuality === "average"){
    return (billTotal * 1.15);
  }
  if(serviceQuality === "excellent") {
    return (billTotal * 1.2);
  }
  // "poor" = 10%, "average" = 15%, "excellent" = 20%
};
console.log(hoursUntilBedtime(12,20));
console.log(getStudyAdvice(.9));
console.log(getStudyAdvice(2));
console.log(getStudyAdvice(4));
console.log(calculateTipAmount(200.00, "poor"));
console.log(calculateTipAmount(200.00, "average"));
console.log(calculateTipAmount(200.00, "excellent"));
// Test all your functions with different inputs