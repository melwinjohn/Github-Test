// Additional utility functions

function divide(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Invalid input: divide requires two numbers');
    }
    if (b === 0) {
        throw new Error('Division by zero is not allowed');
    }
    return a / b;
}

function power(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Invalid input: power requires two numbers');
    }
    return Math.pow(a, b);
}

function factorial(n) {
    if (typeof n !== 'number') {
        throw new Error('Invalid input: factorial requires a number');
    }
    if (n < 0) {
        throw new Error('Factorial is not defined for negative numbers');
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Test the new functions
console.log("Division: 10 / 2 =", divide(10, 2));
console.log("Power: 2^3 =", power(2, 3));
console.log("Factorial: 5! =", factorial(5));

module.exports = { divide, power, factorial };
