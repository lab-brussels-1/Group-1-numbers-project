import { numbers } from '../numbers.js';

import { display } from '../lib/dom-io.js';

import { listItems } from './utils/list-items.js';

const showNumbers = () => {


  // generate a string list of all numbers (use the util!)
   listItems(numbers);

  // display the list of numbers to the UI
  display('your-output', listItems(numbers));
};

// !! fill in this blank with the correct DOM ID
document.getElementById('show-them').addEventListener('click', showNumbers);
