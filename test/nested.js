if (typeof module !== 'undefined' && typeof module.exports !== 'undefined'){
	var assert = require('chai').should();
	var validate = require('../vladiator.js');
}

var primaryColor = function(value){
	return ['blue', 'yellow', 'red', 'green'].indexOf(value.toLowerCase()) > -1;
}

describe('Nested', function() {
	
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
	
	it('should pass when array contains integers in property', function () {
		
		var arr = { test: [1, 2, 3, 4, 5] };
		
		var test = validate(arr).extract('test').isNumber();
		var test2 = validate(arr).extract('test').notNumber();
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should pass when array contains integers in property', function () {
		
		var arr = { test: [1, 2, 3, 4, 5] };
		
		var test = validate(arr).extract('test').isNumber();
		var test2 = validate(arr).extract('test').notNumber();
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should fail when array contains integers notted', function () {
		
		var arr = [1, 2, 3, 4, 5];
		
		var test = validate(arr).extract().not().isNumber();
		var test2 = validate(arr).extract().not().notNumber();
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should pass when array contains integers and is higher than 1', function () {
		
		var arr = [4, 2, 3, 4, 5];
		
		var test = validate(arr).extract().isNumber().higherThan(1);
		var test2 = validate(arr).extract().notNumber().higherThan(1);
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should fail when array contains integers and a string', function () {
		
		var arr = [1, 2, '3', 4, 5];
		
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
		
		var arr = [true, '3', true];
		
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
	
	it('should pass when object contains integers in property', function () {
		
		var obj = { test: {
			test: 1,
			test2: 2,
			test3: 3,
			test4: 4,
			test5: 5
		} };
		
		var test = validate(obj).extract('test').isNumber();
		var test2 = validate(obj).extract('test').notNumber();
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
			test3: '3',
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
			test2: '3',
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
	
	it('should pass when array contains integers notted', function () {
		
		var arr = [1, [1, 2, 3, 4], 3, [1, [1, 2, 3], 3, 4], 5];
		
		var test = validate(arr).extract().recursive().not().isNumber();
		var test2 = validate(arr).extract().recursive().not().notNumber();
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should pass when array contains integers and higher than 1', function () {
		
		var arr = [2, [4, 2, 3, 4], 3, [4, [3, 2, 3], 3, 4], 5];
		
		var test = validate(arr).extract().recursive().isNumber().higherThan(1);
		var test2 = validate(arr).extract().recursive().notNumber().higherThan(1);
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should fail when array contains integers and a string', function () {
		
		var arr = [1, 2, [1, 2, [1, '3']], 4, [1, 2, 3, 4]];
		
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
		
		var arr = [true, [[true, true], true, [true, true, true, '3']], true];
		
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
			test3: { test2: { test1: 1, test3: 2, test5: '3' }, test3: {} },
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
			test2: { test2: '3', test5: true, test7: true, test8: {}},
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