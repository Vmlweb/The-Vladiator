if (typeof module !== 'undefined' && typeof module.exports !== 'undefined'){
	var assert = require('chai').should();
	var validate = require('../vladiator.js');
}

describe('Nested', function() {
	
	//! extract
	
	it('should pass when array contains integers', function () {
		
		var arr = [1, 2, 3, 4, 5];
		
		var test = validate(arr).extract().isNumber();
		var test2 = validate(arr).extract().notNumber();
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should fail when array contains integers and a string', function () {
		
		var arr = [1, 2, "3", 4, 5];
		
		var test = validate(arr).extract().isNumber();
		var test2 = validate(arr).extract().notNumber();
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.equal(expected);
		test2.didFail().should.not.equal(expected);
	});
	
	it('should pass when array is not empty and contains truthy booleans', function () {
		
		var arr = [true, true, true];
		
		var test = validate(arr).notEmpty().extract().isBool().isEqual(true);
		var test2 = validate(arr).notEmpty().extract().notBool().isEqual(true);
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should fail when array is not empty and contains truthy booleans and a false', function () {
		
		var arr = [true, false, true];
		
		var test = validate(arr).notEmpty().extract().isBool().isEqual(true);
		var test2 = validate(arr).notEmpty().extract().notBool().isEqual(true);
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.equal(expected);
		test2.didFail().should.not.equal(expected);
	});
	
	it('should fail when array is not empty and contains truthy booleans and a string', function () {
		
		var arr = [true, "3", true];
		
		var test = validate(arr).notEmpty().extract().isBool().isEqual(true);
		var test2 = validate(arr).notEmpty().extract().notBool().isEqual(true);
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.equal(expected);
		test2.didFail().should.not.equal(expected);
	});
	
	it('should fail when array is empty', function () {
		
		var arr = [];
		
		var test = validate(arr).notEmpty().extract().isBool().isEqual(true);
		var test2 = validate(arr).notEmpty().extract().notBool().isEqual(true);
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.equal(expected);
		test2.didFail().should.not.equal(expected);
	});
	
});