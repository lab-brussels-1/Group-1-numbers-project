/**
 * Converts an array if items into a string list.
 *
 * @param {any} [arr=[]] - The items to list.
 * @returns {string} A formatted list of items.
 *
 * @example
 *
 * listItems([1, 2, 3]); //--> "* 1\n* 2\n* 3\n"
 *
 * @example
 *
 * listItems([2, 5, 0, -3]); //--> "* 2\n* 5\n* 0\n* -3\n"
 *
 */

let array = [1, 2];
export const listItems = (arr = []) => {
  let stringArray = arr;
  let finalString = stringArray.join('\n');
  return finalString;
};
