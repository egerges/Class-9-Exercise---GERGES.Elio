'USE STRICT';

// ==================================================
// DEFINE FUNCTION(S)
// ==================================================
function quotient(x, y) {
  if(y === 0) throw new Error('ERROR.');
  if(!x && !y) return 0;
  if(!y) return x;
  return x/y;
}

// ==================================================
// DEFINE AND EXECUTE TEST CASES
// ==================================================
try {
  // --------------------------------------------------
  // Test Case 1
  // --------------------------------------------------
  // It should return the quotient of two numbers.
  var result = quotient(2, 2);
  if (result !== 1) throw new Error('Expected quotient(2, 2) to be 1. Received: ' + result);

  // --------------------------------------------------
  // Test Case 2
  // --------------------------------------------------
  // It should return the text 'ERROR' when the second number is 0.
  try {
    var result = quotient(2, 0);
    throw new Error('Expected quotient(2, 0) to throw an Error. Received: ' + result);
  } catch (error) {
    // Do nothing, test has passed.
  }

  // --------------------------------------------------
  // Test Case 3
  // --------------------------------------------------
  // It should ignore additional numbers.
  var result = quotient(2, 2, 3);
  if (result !== 1) throw new Error('Expected quotient(2, 2, 3) to be 1. Received: ' + result);

  // --------------------------------------------------
  // Test Case 4
  // --------------------------------------------------
  // When invoked with only 1 number, it should return that number.
  var result = quotient(4);
  if (result !== 4) throw new Error('Expected quotient(4) to be 4. Received: ' + result);

  // --------------------------------------------------
  // Test Case 5
  // --------------------------------------------------
  // When invoked with no numbers, it should return 0.
  var result = quotient();
  if (result !== 0) throw new Error('Expected quotient() to be 0. Received: ' + result);

  console.log('All tests passed successfully.');

// ==================================================
// PRINT ERRORS
// ==================================================
} catch (e) {
  console.warn('Whoops, the following test did not pass:');
  console.error(e.message);
}

module.exports = quotient;