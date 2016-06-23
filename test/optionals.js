var assert = require('chai').should();
var validate = require('../vladiator.js');

describe('Optionals', function() {
	
	//! isRequired
	
	it('should fail when undefined is required', function () {
		
		var test = validate(undefined).isRequired();
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
	});
	
	it('should pass when null is required', function () {
		
		var test = validate(null).isRequired();
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
	});
	
	it('should pass when bool is required', function () {
		
		var test = validate(false).isRequired();
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
	});
	
	it('should pass when number is required', function () {
		
		var test = validate(5).isRequired();
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
	});
	
	it('should pass when string is required', function () {
		
		var test = validate("").isRequired();
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
	});
	
	it('should pass when array is required', function () {
		
		var test = validate([]).isRequired();
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
	});
	
	it('should pass when object is required', function () {
		
		var test = validate({}).isRequired();
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
	});
	
	//! isOptional
	
	it('should pass when undefined is optional', function () {
		
		var test = validate(undefined).isOptional();
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
	});
	
	it('should pass when null is optional', function () {
		
		var test = validate(null).isOptional();
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
	});
	
	it('should pass when bool is optional', function () {
		
		var test = validate(false).isOptional();
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
	});
	
	it('should pass when number is optional', function () {
		
		var test = validate(5).isOptional();
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
	});
	
	it('should pass when string is optional', function () {
		
		var test = validate("").isOptional();
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
	});
	
	it('should pass when array is optional', function () {
		
		var test = validate([]).isOptional();
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
	});
	
	it('should pass when object is optional', function () {
		
		var test = validate({}).isOptional();
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
	});
	
	//! isRequiredWithValue
	
	it('should fail when undefined is required with value', function () {
		
		var test = validate(undefined).isRequiredWithValue();
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
	});
	
	it('should fail when null is required with value', function () {
		
		var test = validate(null).isRequiredWithValue();
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
	});
	
	it('should pass when bool is required with value', function () {
		
		var test = validate(false).isRequiredWithValue();
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
	});
	
	it('should pass when number is required with value', function () {
		
		var test = validate(5).isRequiredWithValue();
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
	});
	
	it('should pass when string is required with value', function () {
		
		var test = validate("").isRequiredWithValue();
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
	});
	
	it('should pass when array is required with value', function () {
		
		var test = validate([]).isRequiredWithValue();
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
	});
	
	it('should pass when object is required with value', function () {
		
		var test = validate({}).isRequiredWithValue();
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
	});
	
	//! isOptionalWithValue
	
	it('should pass when undefined is optional with value', function () {
		
		var test = validate(undefined).isOptionalWithValue();
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
	});
	
	it('should pass when null is optional with value', function () {
		
		var test = validate(null).isOptionalWithValue();
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
	});
	
	it('should pass when bool is optional with value', function () {
		
		var test = validate(false).isOptionalWithValue();
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
	});
	
	it('should pass when number is optional with value', function () {
		
		var test = validate(5).isOptionalWithValue();
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
	});
	
	it('should pass when string is optional with value', function () {
		
		var test = validate("").isOptionalWithValue();
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
	});
	
	it('should pass when array is optional with value', function () {
		
		var test = validate([]).isOptionalWithValue();
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
	});
	
	it('should pass when object is optional with value', function () {
		
		var test = validate({}).isOptionalWithValue();
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
	});
});