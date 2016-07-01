var assert = require('chai').should();
var validate = require('../vladiator.js');

describe('Misc', function() {
	
	it('should pass for custom primary colour checker', function () {
		
		var colours = ["blue", "yellow", "red", "green"];
		var custom = function(value){
			return colours.indexOf(value.toLowerCase()) > -1;
		}
		
		var test = validate("blue").isString().is(custom);
		var test2 = validate("orange").isString().is(custom);
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should pass for custom primary colour checker notted', function () {
		
		var colours = ["blue", "yellow", "red", "green"];
		var custom = function(value){
			return colours.indexOf(value.toLowerCase()) > -1;
		}
		
		var test = validate("blue").isString().not().is(custom);
		var test2 = validate("orange").isString().not().is(custom);
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should pass for custom primary colour checker using multiple values', function () {
		
		var colours = ["blue", "yellow", "red", "green"];
		var custom = function(value){
			return colours.indexOf(value.toLowerCase()) > -1;
		}
		
		var test = validate("blue").isString().is(custom).and("yellow").isString().is(custom).and("green").isString().is(custom);
		var test2 = validate("blue").isString().is(custom).and("orange").isString().is(custom).and("green").isString().is(custom);
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
});