
// Get those rates calculated!

/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
const worksHrsPerDay = 8;
export function dayRate(ratePerHour) {
  return worksHrsPerDay * ratePerHour;
}

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */
export function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / dayRate(ratePerHour));
}

/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  //total billable days are 22
  let numMonths = Math.floor(numDays / 22); //no. months to be worked to finish project
  let monthlyRate = dayRate(ratePerHour) * 22; //monthly rate
  let monthlyDiscountedRate = (1 - discount) * monthlyRate ;
  
  let numExtraDays = numDays % 22;
  let priceExtraDays = numExtraDays * dayRate(ratePerHour);

  return Math.ceil(numMonths * monthlyDiscountedRate + priceExtraDays );
}
