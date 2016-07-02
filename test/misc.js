if (typeof module !== 'undefined' && typeof module.exports !== 'undefined'){
	var assert = require('chai').should();
	var validate = require('../vladiator.js');
}

var primaryColor = function(value){
	return ["blue", "yellow", "red", "green"].indexOf(value.toLowerCase()) > -1;
}

describe('Misc', function() {
	
	//! is
	
	it('should pass for custom primary colour checker', function () {
		
		var test = validate("blue").isString().is(primaryColor);
		var test2 = validate("orange").isString().is(primaryColor);
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	//! not
	
	it('should pass for custom primary colour checker notted', function () {
		
		var test = validate("blue").isString().not().is(primaryColor);
		var test2 = validate("orange").isString().not().is(primaryColor);
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	//! and
	
	it('should pass for custom primary colour checker using multiple values', function () {
		
		var test = validate("blue").isString().is(primaryColor).and("yellow").isString().is(primaryColor).and("green").isString().is(primaryColor);
		var test2 = validate("blue").isString().is(primaryColor).and("orange").isString().is(primaryColor).and("green").isString().is(primaryColor);
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	//! throws
	
	it('should not throw for custom primary colour checker', function (done) {
		try{
			validate("blue").isString().is(primaryColor).throws("ERROR");
		}catch(error){
			error.should.be.null;
			done(new Error('Threw when validation passed'));
		}
		done();
	});
	
	it('should throw for custom primary colour checker', function (done) {
		try{
			validate("orange").isString().is(primaryColor).throws("ERROR");
		}catch(error){
			error.should.equal("ERROR");
			done();
			return;
		}
		done(new Error('Did not throw when validation failed'));
	});
	
});