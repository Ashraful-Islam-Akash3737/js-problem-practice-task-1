/**
 * Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];
 */

const heights2 = [167, 190, 120, 165, 137];
function lowestHeight(numbers){
    let lowest = numbers[0];
    for (const number of numbers) {
        if (number < lowest) {
            lowest = number;
        }
    }
    return lowest;
}
const output = lowestHeight(heights2);
console.log(output);
