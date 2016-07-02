if (typeof module !== 'undefined' && typeof module.exports !== 'undefined'){
	var assert = require('chai').should();
	var validate = require('../vladiator.js');
}

describe('Types', function() {
	
	//! isEqual
	
	it('should fail when null is undefined', function () {
		
		var test = validate(null).isEqual(undefined);
		var test2 = validate(null).notEqual(undefined);
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should fail when undefined is null', function () {
		
		var test = validate(undefined).isEqual(null);
		var test2 = validate(undefined).notEqual(null);
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should fail when true is false', function () {
		
		var test = validate(true).isEqual(false);
		var test2 = validate(true).notEqual(false);
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should fail when 5 is 10', function () {
		
		var test = validate(5).isEqual(10);
		var test2 = validate(5).notEqual(10);
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should fail when test is test2', function () {
		
		var test = validate('test').isEqual('test2');
		var test2 = validate('test').notEqual('test2');
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should fail when empty array is full array', function () {
		
		var test = validate([]).isEqual([ 'test2' ]);
		var test2 = validate([]).notEqual([ 'test2' ]);
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should fail when empty object is full object', function () {
		
		var test = validate({}).isEqual({ test: 'test2' });
		var test2 = validate({}).notEqual({ test: 'test2' });
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should pass when null is null', function () {
		
		var test = validate(null).isEqual(null);
		var test2 = validate(null).notEqual(null);
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should pass when undefined is undefined', function () {
		
		var test = validate(undefined).isEqual(undefined);
		var test2 = validate(undefined).notEqual(undefined);
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should pass when true is true', function () {
		
		var test = validate(true).isEqual(true);
		var test2 = validate(true).notEqual(true);
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should pass when false is false', function () {
		
		var test = validate(false).isEqual(false);
		var test2 = validate(false).notEqual(false);
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should pass when 5 is 5', function () {
		
		var test = validate(5).isEqual(5);
		var test2 = validate(5).notEqual(5);
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should pass when test is test', function () {
		
		var test = validate('test').isEqual('test');
		var test2 = validate('test').notEqual('test');
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
});