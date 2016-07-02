if (typeof module !== 'undefined' && typeof module.exports !== 'undefined'){
	var assert = require('chai').should();
	var validate = require('../vladiator.js');
}

var primaryColor = function(value){
	return ['blue', 'yellow', 'red', 'green'].indexOf(value.toLowerCase()) > -1;
}

describe('Misc', function() {
	
	//! is
	
	it('should pass for custom primary colour checker', function () {
		
		var test = validate('blue').isString().is(primaryColor);
		var test2 = validate('orange').isString().is(primaryColor);
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	//! not
	
	it('should pass for custom primary colour checker notted', function () {
		
		var test = validate('blue').isString().not().is(primaryColor);
		var test2 = validate('orange').isString().not().is(primaryColor);
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	//! and
	
	it('should pass for custom primary colour checker using multiple values', function () {
		
		var test = validate('blue').isString().is(primaryColor).and('yellow').isString().is(primaryColor).and('green').isString().is(primaryColor);
		var test2 = validate('blue').isString().is(primaryColor).and('orange').isString().is(primaryColor).and('green').isString().is(primaryColor);
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	//! throws
	
	it('should not throw for custom primary colour checker', function (done) {
		try{
			validate('blue').isString().is(primaryColor).throws('ERROR');
		}catch(error){
			error.should.be.null;
			done(new Error('Threw when validation passed'));
		}
		done();
	});
	
	it('should throw for custom primary colour checker', function (done) {
		try{
			validate('orange').isString().is(primaryColor).throws('ERROR');
		}catch(error){
			error.should.equal('ERROR');
			done();
			return;
		}
		done(new Error('Did not throw when validation failed'));
	});
	
	//! open
	
	it('should pass for custom primary colour checker when nested', function () {
		
		var obj = {
			first: 'orange',
			second: 'blue'
		};
		
		var test = validate(obj).open('second').isString().is(primaryColor);
		var test2 = validate(obj).open('first').isString().is(primaryColor);
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should pass for custom primary colour checker when nested two levels with dot', function () {
		
		var obj = {
			first: {
				second: 'blue'
			},
			third: {
				fourth: 'orange'
			}
		}
		
		var test = validate(obj).open('first.second').isString().is(primaryColor);
		var test2 = validate(obj).open('third.fourth').isString().is(primaryColor);
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should pass for custom primary colour checker when nested three levels with dot', function () {
		
		var obj = {
			first: {
				second: { 
					third: 'blue'
				}
			},
			fourth: {
				fifth: {
					sixth: 'orange'
				}
			}
		};
		
		var test = validate(obj).open('first.second.third').isString().is(primaryColor);
		var test2 = validate(obj).open('fourth.fifth.sixth').isString().is(primaryColor);
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should pass for custom primary colour checker when nested three levels with array', function () {
		
		var obj = {
			first: {
				second: { 
					third: 'blue'
				}
			},
			fourth: {
				fifth: {
					sixth: 'orange'
				}
			}
		};
		
		var test = validate(obj).open(['first', 'second', 'third']).isString().is(primaryColor);
		var test2 = validate(obj).open(['fourth', 'fifth', 'sixth']).isString().is(primaryColor);
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
});