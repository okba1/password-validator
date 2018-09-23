'use strict';

const expect = require('chai').expect;
const validator = require('../index');

console.log(validator);

describe('#passwordValidator', function(){
    it('should return false for password with length less than 8', function(){
        var isValid = validator.validate("123");
        expect(isValid).to.equal(false);
    });

    it('should return false for password with length equal to 8', function(){
        var isValid = validator.validate("12345678");
        expect(isValid).to.equal(true);
    });

    it('should return false for password with length greater than 8', function(){
        var isValid = validator.validate("123456789aa");
        expect(isValid).to.equal(true);
    });

    it('should return false for password with length equal to 15', function(){
        var isValid = validator.validate("123456789abcdef");
        expect(isValid).to.equal(true);
    });

    it('should return false for password with length greater than 15', function(){
        var isValid = validator.validate("123456789abcdefg");
        expect(isValid).to.equal(false);
    });
});