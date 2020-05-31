const assert = require('assert');
const { cap } = require('..');

console.log('Testing:');

const test = (example, expected) => {
	assert.equal(example, expected);
	console.log(`\u001B[32m✓\u001B[39m ${expected}`);
};

// only max
test(cap(10, 4), 4);
test(cap(1, -5), -5);
test(cap(-6, -5), -6);
test(cap(-4, 1), -4);

// min and max
test(cap(23, 0, 1), 1);
test(cap(-13, 0, 1), 0);

test(cap(2, -3, 1), 1);

test(cap(-5, 1, -4), -4);
test(cap(2, 1, -4), 1);
