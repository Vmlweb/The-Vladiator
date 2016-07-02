if (typeof module !== 'undefined' && typeof module.exports !== 'undefined'){
	var assert = require('chai').should();
	var validate = require('../vladiator.js');
}

describe('Other', function() {
	
	//! isEmail
	
	it('should pass for valid email', function () {
		
		var test = validate('admin@vmlweb.co.uk').isEmail();
		var test2 = validate('admin@vmlweb.co.uk').notEmail();
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should fail for invalid email', function () {
		
		var test = validate('adminvmlweb.co.uk').isEmail();
		var test2 = validate('adminvmlweb.co.uk').notEmail();
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	//! isMongoId
	
	it('should pass for valid mongo object id', function () {
		
		var test = validate('507f1f77bcf86cd799439011').isMongoId();
		var test2 = validate('507f1f77bcf86cd799439011').notMongoId();
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should fail for invalid mongo object id', function () {
		
		var test = validate('07f1f77bcf86cd799439011').isMongoId();
		var test2 = validate('07f1f77bcf86cd799439011').notMongoId();
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	it('should fail for invalid mongo object id boolean', function () {
		
		var test = validate(true).isMongoId();
		var test2 = validate(true).notMongoId();
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	it('should fail for invalid mongo object id string', function () {
		
		var test = validate("test").isMongoId();
		var test2 = validate("test").notMongoId();
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	it('should fail for invalid mongo object id array', function () {
		
		var test = validate(["test", "test2"]).isMongoId();
		var test2 = validate(["test", "test2"]).notMongoId();
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	it('should fail for invalid mongo object id object', function () {
		
		var test = validate({ test: "test" }).isMongoId();
		var test2 = validate({ test: "test" }).notMongoId();
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
});