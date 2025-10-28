console.log("Hello, World!");

function greet(name) {
    if (typeof name !== 'string' || name === '') {
        throw new Error('Invalid input: name must be a non-empty string');
    }
    return `Hello, ${name}!`;
}

function add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Invalid input: add requires two numbers');
    }
    return a + b;
}

module.exports = { greet, add };

