var Calculator = require('../lib/calculator');
var assert = require('assert');

describe('Addition Test (1 + 1)', function() {
    it('Should return 2', function() {
        assert.equal(Calculator.add(1, 1), 2);
    })
})

describe('Subtraction Test (3 - 5)', function() {
    it('Should return -2', function() {
        assert.equal(Calculator.subtract(3, 5), -2);
    })
})

describe('Division Test (20 / 4)', function() {
    it('Should return 5', function() {
        assert.equal(Calculator.divide(20, 4), 5);
    })
})

describe('Multiplication Test (4 * 6)', function() {
    it('Should return 24', function() {
        assert.equal(Calculator.multiply(4, 6), 24);
    })
})

describe('Division by Zero Test (1 / 0)', function() {
    it('Should return an Error', function() {
        assert.throws(function() {Calculator.divide(1, 0)}, Error, "Attempt to divide by zero");
    })
})
