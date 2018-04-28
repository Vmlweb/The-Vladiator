if (typeof module !== 'undefined' && typeof module.exports !== 'undefined'){
	var assert = require('chai').should();
	var validate = require('../vladiator.js');
}

describe('Types', function() {

	//! isTrue

	it('should pass when true is true', function () {

		var test = validate(true).isTrue();
		var test2 = validate(true).notTrue();
		var expected = true;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	it('should fail when true is false', function () {

		var test = validate(false).isTrue();
		var test2 = validate(false).notTrue();
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	//! isFalse

	it('should pass when false is false', function () {

		var test = validate(false).isFalse();
		var test2 = validate(false).notFalse();
		var expected = true;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	it('should fail when false is true', function () {

		var test = validate(true).isFalse();
		var test2 = validate(true).notFalse();
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	//! isBool

	it('should fail when undefined is bool', function () {

		var test = validate(undefined).isBool();
		var test2 = validate(undefined).notBool();
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	it('should fail when null is bool', function () {

		var test = validate(null).isBool();
		var test2 = validate(null).notBool();
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	it('should pass when bool is bool', function () {

		var test = validate(false).isBool();
		var test2 = validate(false).notBool();
		var expected = true;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	it('should fail when string is bool', function () {

		var test = validate("").isBool();
		var test2 = validate("").notBool();
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	it('should fail when number is bool', function () {

		var test = validate(5).isBool();
		var test2 = validate(5).notBool();
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	it('should fail when date is bool', function () {

		var test = validate(new Date()).isBool();
		var test2 = validate(new Date()).notBool();
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	it('should fail when array is bool', function () {

		var test = validate([]).isBool();
		var test2 = validate([]).notBool();
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	it('should fail when object is bool', function () {

		var test = validate({}).isBool();
		var test2 = validate({}).notBool();
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	//! isString

	it('should fail when undefined is string', function () {

		var test = validate(undefined).isString();
		var test2 = validate(undefined).notString();
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	it('should fail when null is string', function () {

		var test = validate(null).isString();
		var test2 = validate(null).notString();
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	it('should fail when bool is string', function () {

		var test = validate(false).isString();
		var test2 = validate(false).notString();
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	it('should pass when string is string', function () {

		var test = validate("").isString();
		var test2 = validate("").notString();
		var expected = true;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	it('should fail when number is string', function () {

		var test = validate(5).isString();
		var test2 = validate(5).notString();
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	it('should fail when date is string', function () {

		var test = validate(new Date()).isString();
		var test2 = validate(new Date()).notString();
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	it('should fail when array is string', function () {

		var test = validate([]).isString();
		var test2 = validate([]).notString();
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	it('should fail when object is string', function () {

		var test = validate({}).isString();
		var test2 = validate({}).notString();
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	//! isDate

	it('should fail when undefined is date', function () {

		var test = validate(undefined).isDate();
		var test2 = validate(undefined).notDate();
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	it('should fail when null is date', function () {

		var test = validate(null).isDate();
		var test2 = validate(null).notDate();
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	it('should fail when bool is date', function () {

		var test = validate(false).isDate();
		var test2 = validate(false).notDate();
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	it('should fail when string is date', function () {

		var test = validate("").isDate();
		var test2 = validate("").notDate();
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	it('should fail when number is date', function () {

		var test = validate(5).isDate();
		var test2 = validate(5).notDate();
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	it('should pass when date is date', function () {

		var test = validate(new Date()).isDate();
		var test2 = validate(new Date()).notDate();
		var expected = true;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	it('should fail when array is date', function () {

		var test = validate([]).isDate();
		var test2 = validate([]).notDate();
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	it('should fail when object is date', function () {

		var test = validate({}).isDate();
		var test2 = validate({}).notDate();
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	//! isArray

	it('should fail when undefined is array', function () {

		var test = validate(undefined).isArray();
		var test2 = validate(undefined).notArray();
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	it('should fail when null is array', function () {

		var test = validate(null).isArray();
		var test2 = validate(null).notArray();
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	it('should fail when bool is array', function () {

		var test = validate(false).isArray();
		var test2 = validate(false).notArray();
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	it('should fail when string is array', function () {

		var test = validate("").isArray();
		var test2 = validate("").notArray();
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	it('should fail when number is array', function () {

		var test = validate(5).isArray();
		var test2 = validate(5).notArray();
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	it('should fail when date is array', function () {

		var test = validate(new Date()).isArray();
		var test2 = validate(new Date()).notArray();
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	it('should pass when array is array', function () {

		var test = validate([]).isArray();
		var test2 = validate([]).notArray();
		var expected = true;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	it('should fail when object is array', function () {

		var test = validate({}).isArray();
		var test2 = validate({}).notArray();
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	//! isObject

	it('should fail when undefined is object', function () {

		var test = validate(undefined).isObject();
		var test2 = validate(undefined).notObject();
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	it('should fail when null is object', function () {

		var test = validate(null).isObject();
		var test2 = validate(null).notObject();
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	it('should fail when bool is object', function () {

		var test = validate(false).isObject();
		var test2 = validate(false).notObject();
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	it('should fail when string is object', function () {

		var test = validate("").isObject();
		var test2 = validate("").notObject();
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	it('should fail when number is object', function () {

		var test = validate(5).isObject();
		var test2 = validate(5).notObject();
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	it('should fail when date is object', function () {

		var test = validate(new Date()).isObject();
		var test2 = validate(new Date()).notObject();
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	it('should fail when array is object', function () {

		var test = validate([]).isObject();
		var test2 = validate([]).notObject();
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	it('should pass when object is object', function () {

		var test = validate({}).isObject();
		var test2 = validate({}).notObject();
		var expected = true;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	//! isParent

	it('should fail when undefined is parent', function () {

		var test = validate(undefined).isParent();
		var test2 = validate(undefined).notParent();
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	it('should fail when null is parent', function () {

		var test = validate(null).isParent();
		var test2 = validate(null).notParent();
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	it('should fail when bool is parent', function () {

		var test = validate(false).isParent();
		var test2 = validate(false).notParent();
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	it('should fail when string is parent', function () {

		var test = validate("").isParent();
		var test2 = validate("").notParent();
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	it('should fail when number is parent', function () {

		var test = validate(5).isParent();
		var test2 = validate(5).notParent();
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	it('should fail when date is parent', function () {

		var test = validate(new Date()).isParent();
		var test2 = validate(new Date()).notParent();
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	it('should pass when array is parent', function () {

		var test = validate([]).isParent();
		var test2 = validate([]).notParent();
		var expected = true;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	it('should pass when object is parent', function () {

		var test = validate({}).isParent();
		var test2 = validate({}).notParent();
		var expected = true;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	//! isBuffer

	it('should fail when undefined is buffer', function () {

		var test = validate(undefined).isBuffer();
		var test2 = validate(undefined).notBuffer();
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	it('should fail when null is buffer', function () {

		var test = validate(null).isBuffer();
		var test2 = validate(null).notBuffer();
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	it('should fail when bool is buffer', function () {

		var test = validate(false).isBuffer();
		var test2 = validate(false).notBuffer();
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	it('should fail when string is buffer', function () {

		var test = validate("").isBuffer();
		var test2 = validate("").notBuffer();
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	it('should fail when number is buffer', function () {

		var test = validate(5).isBuffer();
		var test2 = validate(5).notBuffer();
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	it('should fail when date is buffer', function () {

		var test = validate(new Date()).isBuffer();
		var test2 = validate(new Date()).notBuffer();
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	it('should pass when buffer is buffer', function () {

		var test = validate(typeof Buffer === 'function' ? new Buffer('') : undefined).isBuffer();
		var test2 = validate(typeof Buffer === 'function' ? new Buffer('') : undefined).notBuffer();
		var expected = typeof Buffer === 'function';

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	it('should fail when array is buffer', function () {

		var test = validate([]).isBuffer();
		var test2 = validate([]).notBuffer();
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	it('should fail when object is buffer', function () {

		var test = validate({}).isBuffer();
		var test2 = validate({}).notBuffer();
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
});
