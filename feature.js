// Feature implementation

function multiply(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Invalid input: multiply requires two numbers');
    }
    return a * b;
}

function subtract(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Invalid input: subtract requires two numbers');
    }
    return a - b;
}

console.log("Feature: Multiply 4 * 5 =", multiply(4, 5));
console.log("Feature: Subtract 10 - 3 =", subtract(10, 3));

module.exports = { multiply, subtract };

