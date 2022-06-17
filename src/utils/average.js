/**
 * Calculates the average of a list of numbers.
 *
 * @param {number[]} [nums=[]] - The numbers to average.
 * @returns {number} The average of all numbers.
 */
export const average = (arr = []) => {
    let average = 0;
    for (const nums of arr) {
        average += nums/ arr.length;
    }
    return `average: ${average}`; 
};
