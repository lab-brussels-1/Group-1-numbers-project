import { numbers } from '../numbers.js';

import { readNumber, display, append } from '../lib/dom-io.js';

import { listItems } from './utils/list-items.js';



const addNumber = () => {


  // read the user's number
  const inputNum = readNumber('the-num');

  // add it to the array of numbers
  numbers.push(inputNum);

  // generate and display a string listing all numbers
  display('your-output', listItems(numbers));
};

// !! fill in this blank with the correct DOM ID
document.getElementById('add-it').addEventListener('click', addNumber);
