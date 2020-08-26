"use strict"
function calculateTotalMortgage(percent, contribution, amount, date) {
  let mortgageBody = amount - contribution;
  let finishDate = new Date(date);
  let quantityOfMonths = finishDate.getFullYear()*12 + finishDate.getMonth()
      - (new Date().getFullYear()*12 + new Date().getMonth());
  let monthlyPercent = percent/12;
  let monthlyPayment = mortgageBody*(monthlyPercent + monthlyPercent/(((1+ monthlyPercent)^quantityOfMonths) - 1));
  let totalAmount = (monthlyPayment*quantityOfMonths + contribution).toFixed(2);
  return totalAmount;
  console.log(finishDate);
  console.log(totalAmount);
}

function getGreeting(name) {
    let greeting;
    if (name)
    greeting = `Привет, мир! Меня зовут ${name}`;
    else greeting = 'Привет, мир! Меня зовут Аноним';
    return greeting;
}