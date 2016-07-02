if (typeof module !== 'undefined' && typeof module.exports !== 'undefined'){
	var assert = require('chai').should();
	var validate = require('../vladiator.js');
}

describe('Nested', function() {
	
	//! extract array
	
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
		
		var test = validate(arr).notEmpty().extract().isBool().isTrue();
		var test2 = validate(arr).notEmpty().extract().notBool().isTrue();
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should fail when array is not empty and contains truthy booleans and a false', function () {
		
		var arr = [true, false, true];
		
		var test = validate(arr).notEmpty().extract().isBool().isTrue();
		var test2 = validate(arr).notEmpty().extract().notBool().isTrue();
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.equal(expected);
		test2.didFail().should.not.equal(expected);
	});
	
	it('should fail when array is not empty and contains truthy booleans and a string', function () {
		
		var arr = [true, "3", true];
		
		var test = validate(arr).notEmpty().extract().isBool().isTrue();
		var test2 = validate(arr).notEmpty().extract().notBool().isTrue();
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.equal(expected);
		test2.didFail().should.not.equal(expected);
	});
	
	it('should fail when array is empty', function () {
		
		var arr = [];
		
		var test = validate(arr).notEmpty().extract().isBool().isTrue();
		var test2 = validate(arr).notEmpty().extract().notBool().isTrue();
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.equal(expected);
		test2.didFail().should.not.equal(expected);
	});
	
	//! extract object

	it('should pass when object contains integers', function () {
		
		var obj = {
			test: 1,
			test2: 2,
			test3: 3,
			test4: 4,
			test5: 5
		};
		
		var test = validate(obj).extract().isNumber();
		var test2 = validate(obj).extract().notNumber();
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should fail when object contains integers and a string', function () {
		
		var obj = {
			test: 1,
			test2: 2,
			test3: "3",
			test4: 4,
			test5: 5
		};		
		var test = validate(obj).extract().isNumber();
		var test2 = validate(obj).extract().notNumber();
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.equal(expected);
		test2.didFail().should.not.equal(expected);
	});
	
	it('should pass when object is not empty and contains truthy booleans', function () {
		
		var obj = {
			test: true,
			test2: true,
			test3: true
		};
		
		var test = validate(obj).notEmpty().extract().isBool().isTrue();
		var test2 = validate(obj).notEmpty().extract().notBool().isTrue();
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should fail when object is not empty and contains truthy booleans and a false', function () {
		
		var obj = {
			test: true,
			test2: false,
			test3: true
		};
		
		var test = validate(obj).notEmpty().extract().isBool().isTrue();
		var test2 = validate(obj).notEmpty().extract().notBool().isTrue();
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.equal(expected);
		test2.didFail().should.not.equal(expected);
	});
	
	it('should fail when object is not empty and contains truthy booleans and a string', function () {
		
		var obj = {
			test: true,
			test2: "3",
			test3: true
		};
		
		var test = validate(obj).notEmpty().extract().isBool().isTrue();
		var test2 = validate(obj).notEmpty().extract().notBool().isTrue();
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.equal(expected);
		test2.didFail().should.not.equal(expected);
	});
	
	it('should fail when object is empty', function () {
		
		var obj = {};
		
		var test = validate(obj).notEmpty().extract().isBool().isTrue();
		var test2 = validate(obj).notEmpty().extract().notBool().isTrue();
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.equal(expected);
		test2.didFail().should.not.equal(expected);
	});
	
	//! recursive array
	
	it('should pass when array contains integers', function () {
		
		var arr = [1, [1, 2, 3, 4], 3, [1, [1, 2, 3], 3, 4], 5];
		
		var test = validate(arr).extract().recursive().isNumber();
		var test2 = validate(arr).extract().recursive().notNumber();
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should fail when array contains integers and a string', function () {
		
		var arr = [1, 2, [1, 2, [1, "3"]], 4, [1, 2, 3, 4]];
		
		var test = validate(arr).extract().recursive().isNumber();
		var test2 = validate(arr).extract().recursive().notNumber();
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.equal(expected);
		test2.didFail().should.not.equal(expected);
	});
	
	it('should pass when array is not empty and contains truthy booleans', function () {
		
		var arr = [[true, true, true], true, [true, true]];
		
		var test = validate(arr).notEmpty().extract().recursive().isBool().isTrue();
		var test2 = validate(arr).notEmpty().extract().recursive().notBool().isTrue();
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should fail when array is not empty and contains truthy booleans and a false', function () {
		
		var arr = [true, [true, true, [true, false], true], [true, true, true]];
		
		var test = validate(arr).notEmpty().extract().recursive().isBool().isTrue();
		var test2 = validate(arr).notEmpty().extract().recursive().notBool().isTrue();
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.equal(expected);
		test2.didFail().should.not.equal(expected);
	});
	
	it('should fail when array is not empty and contains truthy booleans and a string', function () {
		
		var arr = [true, [[true, true], true, [true, true, true, "3"]], true];
		
		var test = validate(arr).notEmpty().extract().recursive().isBool().isTrue();
		var test2 = validate(arr).notEmpty().extract().recursive().notBool().isTrue();
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.equal(expected);
		test2.didFail().should.not.equal(expected);
	});
	
	it('should fail when array is empty', function () {
		
		var arr = [];
		
		var test = validate(arr).notEmpty().extract().recursive().isBool().isTrue();
		var test2 = validate(arr).notEmpty().extract().recursive().notBool().isTrue();
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.equal(expected);
		test2.didFail().should.not.equal(expected);
	});
	
	//! recursive object

	it('should pass when object contains integers', function () {
		
		var obj = {
			test: 1,
			test2: { test1: 1, test2: { test2: 5 }, test3: 2 },
			test3: 3,
			test4: { test2: 5, test5: 5 },
			test5: {}
		};
		
		var test = validate(obj).extract().recursive().isNumber();
		var test2 = validate(obj).extract().recursive().notNumber();
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should fail when object contains integers and a string', function () {
		
		var obj = {
			test: { test2: 5 },
			test2: 2,
			test3: { test2: { test1: 1, test3: 2, test5: "3" }, test3: {} },
			test4: 4,
			test5: 5
		};		
		var test = validate(obj).extract().recursive().isNumber();
		var test2 = validate(obj).extract().recursive().notNumber();
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.equal(expected);
		test2.didFail().should.not.equal(expected);
	});
	
	it('should pass when object is not empty and contains truthy booleans', function () {
		
		var obj = {
			test: {},
			test2: { test2: true, test5: { test2: true, test6: true, test5: true } },
			test3: true
		};
		
		var test = validate(obj).notEmpty().extract().recursive().isBool().isTrue();
		var test2 = validate(obj).notEmpty().extract().recursive().notBool().isTrue();
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should fail when object is not empty and contains truthy booleans and a false', function () {
		
		var obj = {
			test: true,
			test2: { test2: true, test5: { test2: false }, test2: true },
			test3: {}
		};
		
		var test = validate(obj).notEmpty().extract().recursive().isBool().isTrue();
		var test2 = validate(obj).notEmpty().extract().recursive().notBool().isTrue();
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.equal(expected);
		test2.didFail().should.not.equal(expected);
	});
	
	it('should fail when object is not empty and contains truthy booleans and a string', function () {
		
		var obj = {
			test: { test2: true },
			test2: { test2: "3", test5: true, test7: true, test8: {}},
			test3: true
		};
		
		var test = validate(obj).notEmpty().extract().recursive().isBool().isTrue();
		var test2 = validate(obj).notEmpty().extract().recursive().notBool().isTrue();
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.equal(expected);
		test2.didFail().should.not.equal(expected);
	});
	
	it('should fail when object is empty', function () {
		
		var obj = {};
		
		var test = validate(obj).notEmpty().extract().recursive().isBool().isTrue();
		var test2 = validate(obj).notEmpty().extract().recursive().notBool().isTrue();
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.equal(expected);
		test2.didFail().should.not.equal(expected);
	});
	
});