/**
 * Your task is to calculate the total budget required to buy electronics:

    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk
Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
 */

const laptop = 35000;
const tablet = 15000;
const mobile = 20000;

function totalPrice(totalLaptop, totalTablet, totalMobile){
    const laptopPrice = totalLaptop * laptop;
    const tabletPrice = totalTablet * tablet;
    const mobilePrice = totalMobile * mobile;
    const totalResult = laptopPrice + tabletPrice + mobilePrice;
    return totalResult;

}
const totalLaptop = 2;
const totalTablet = 3;
const totalMobile = 5;
const output = totalPrice(totalLaptop,totalTablet,totalMobile);
console.log(output);