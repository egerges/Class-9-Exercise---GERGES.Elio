'USE STRICT';

// Import modules
let sum = require('../01-unit/01-sum');
let difference = require('../01-unit/02-difference');
let product = require('../01-unit/03-product');
let quotient = require('../01-unit/04-quotient');

try {

    function calcStrategy(operation, x, y) {
        switch (operation) {
            case 'add': return sum(x, y);
            case 'subtract': return difference(x, y);
            case 'multiply': return product(x, y);
            case 'divide': return quotient(x, y);
            default: throw new Error('Operation not supported.');
        }
    }

    module.exports = calcStrategy;
    
} catch (error) {
    throw new Error(`Error: ${error} | file: calc-strategy.js`);
}