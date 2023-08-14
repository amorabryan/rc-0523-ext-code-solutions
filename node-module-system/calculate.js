import addTwo from './add.js';
import divideTwo from './divide.js';
import subtractTwo from './subtract.js';
import multiplyTwo from './multiply.js';

let result;
const num1 = Number(process.argv[2]);
const num2 = Number(process.argv[4]);

switch (process.argv[3]) {
  case 'plus':
    result = addTwo(num1, num2);
    break;
  case 'minus':
    result = subtractTwo(num1, num2);
    break;
  case 'times':
    result = multiplyTwo(num1, num2);
    break;
  case 'over':
    result = divideTwo(num1, num2);
    break;
}

console.log('result:', result);
