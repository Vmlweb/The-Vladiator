var assert = require('chai').should();
var validate = require('../vladiator.js');

describe('Types', function() {
	
	//! isBool
	
	it('should fail when undefined is bool', function () {
		
		var test = validate(undefined).isBool();
		var test2 = validate(undefined).isNotBool();
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should fail when null is bool', function () {
		
		var test = validate(null).isBool();
		var test2 = validate(null).isNotBool();
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should pass when bool is bool', function () {
		
		var test = validate(false).isBool();
		var test2 = validate(false).isNotBool();
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should fail when string is bool', function () {
		
		var test = validate("").isBool();
		var test2 = validate("").isNotBool();
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should fail when number is bool', function () {
		
		var test = validate(5).isBool();
		var test2 = validate(5).isNotBool();
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should fail when array is bool', function () {
		
		var test = validate([]).isBool();
		var test2 = validate([]).isNotBool();
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should fail when object is bool', function () {
		
		var test = validate({}).isBool();
		var test2 = validate({}).isNotBool();
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	//! isString
	
	it('should fail when undefined is string', function () {
		
		var test = validate(undefined).isString();
		var test2 = validate(undefined).isNotString();
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should fail when null is string', function () {
		
		var test = validate(null).isString();
		var test2 = validate(null).isNotString();
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should fail when bool is string', function () {
		
		var test = validate(false).isString();
		var test2 = validate(false).isNotString();
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should pass when string is string', function () {
		
		var test = validate("").isString();
		var test2 = validate("").isNotString();
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should fail when number is string', function () {
		
		var test = validate(5).isString();
		var test2 = validate(5).isNotString();
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should fail when array is string', function () {
		
		var test = validate([]).isString();
		var test2 = validate([]).isNotString();
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should fail when object is string', function () {
		
		var test = validate({}).isString();
		var test2 = validate({}).isNotString();
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	//! isArray
	
	it('should fail when undefined is array', function () {
		
		var test = validate(undefined).isArray();
		var test2 = validate(undefined).isNotArray();
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should fail when null is array', function () {
		
		var test = validate(null).isArray();
		var test2 = validate(null).isNotArray();
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should fail when bool is array', function () {
		
		var test = validate(false).isArray();
		var test2 = validate(false).isNotArray();
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should fail when string is array', function () {
		
		var test = validate("").isArray();
		var test2 = validate("").isNotArray();
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should fail when number is array', function () {
		
		var test = validate(5).isArray();
		var test2 = validate(5).isNotArray();
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should pass when array is array', function () {
		
		var test = validate([]).isArray();
		var test2 = validate([]).isNotArray();
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should fail when object is array', function () {
		
		var test = validate({}).isArray();
		var test2 = validate({}).isNotArray();
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	//! isObject
	
	it('should fail when undefined is object', function () {
		
		var test = validate(undefined).isObject();
		var test2 = validate(undefined).isNotObject();
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should fail when null is object', function () {
		
		var test = validate(null).isObject();
		var test2 = validate(null).isNotObject();
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should fail when bool is object', function () {
		
		var test = validate(false).isObject();
		var test2 = validate(false).isNotObject();
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should fail when string is object', function () {
		
		var test = validate("").isObject();
		var test2 = validate("").isNotObject();
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should fail when number is object', function () {
		
		var test = validate(5).isObject();
		var test2 = validate(5).isNotObject();
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should fail when array is object', function () {
		
		var test = validate([]).isObject();
		var test2 = validate([]).isNotObject();
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should pass when object is object', function () {
		
		var test = validate({}).isObject();
		var test2 = validate({}).isNotObject();
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
});