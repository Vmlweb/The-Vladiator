if (typeof module !== 'undefined' && typeof module.exports !== 'undefined'){
	var assert = require('chai').should();
	var validate = require('../vladiator.js');
}

describe('Length', function() {

	//! isEmpty String

	it('should pass when string is empty', function () {

		var test = validate('').isEmpty();
		var test2 = validate('').notEmpty();
		var expected = true;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	it('should pass when space string is empty', function () {

		var test = validate(' ').isEmpty();
		var test2 = validate(' ').notEmpty();
		var expected = true;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	it('should fail when text and space string is not empty', function () {

		var test = validate(' test ').isEmpty();
		var test2 = validate(' test ').notEmpty();
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	it('should fail when text string is not empty', function () {

		var test = validate('test').isEmpty();
		var test2 = validate('test').notEmpty();
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	//! isEmpty Array

	it('should pass when array is empty', function () {

		var test = validate([]).isEmpty();
		var test2 = validate([]).notEmpty();
		var expected = true;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	it('should fail when single array is not empty', function () {

		var test = validate(['']).isEmpty();
		var test2 = validate(['']).notEmpty();
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	it('should fail when multi array is not empty', function () {

		var test = validate(['', '']).isEmpty();
		var test2 = validate(['', '']).notEmpty();
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	//! isEmpty Object

	it('should pass when object is empty', function () {

		var test = validate({}).isEmpty();
		var test2 = validate({}).notEmpty();
		var expected = true;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	it('should fail when single object is not object', function () {

		var test = validate({ test: '' }).isEmpty();
		var test2 = validate({ test: '' }).notEmpty();
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	it('should fail when multi object is not empty', function () {

		var test = validate({ test: '', test2: ''}).isEmpty();
		var test2 = validate({ test: '', test2: ''}).notEmpty();
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});

	//! hasLength String

	it('should pass when empty string has 0 length', function () {

		var test = validate('').hasLength(0);
		var expected = true;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
	});

	it('should fail when empty string has 1 length', function () {

		var test = validate('').hasLength(1);
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
	});

	it('should pass when empty string has 1 length', function () {

		var test = validate(' ').hasLength(1);
		var expected = true;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
	});

	it('should fail when empty string has 2 length', function () {

		var test = validate(' ').hasLength(2);
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
	});

	it('should pass when string has 2 length', function () {

		var test = validate('he').hasLength(2);
		var expected = true;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
	});

	it('should fail when string has 3 length', function () {

		var test = validate('he').hasLength(3);
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
	});

	it('should pass when string has array length', function () {

		var test = validate('hello').hasLength([1, 2, 3, 4, 5]);
		var expected = true;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
	});

	it('should fail when string does not have array length', function () {

		var test = validate('hello').hasLength([1, 2, 3, 4, 5, 6]);
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
	});

	it('should pass when string has object length', function () {

		var test = validate('hello').hasLength({ h: 1, e: 2, l: 3, d: 4, o: 5 });
		var expected = true;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
	});

	it('should fail when string does not have object length', function () {

		var test = validate('hello').hasLength({ h: 1, e: 2, l: 3, d: 4, o: 5, w: 6 });
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
	});

	//! hasLength Array

	it('should pass when empty array has 0 length', function () {

		var test = validate([]).hasLength(0);
		var expected = true;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
	});

	it('should fail when empty array has 1 length', function () {

		var test = validate([]).hasLength(1);
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
	});

	it('should pass when array has 2 length', function () {

		var test = validate(['h','e']).hasLength(2);
		var expected = true;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
	});

	it('should fail when array has 3 length', function () {

		var test = validate(['h','e']).hasLength(3);
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
	});

	it('should pass when array has array length', function () {

		var test = validate(['h','e','l','l','o']).hasLength([1, 2, 3, 4, 5]);
		var expected = true;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
	});

	it('should fail when array does not have array length', function () {

		var test = validate(['h','e','l','l','o']).hasLength([1, 2, 3, 4, 5, 6]);
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
	});

	it('should pass when array has object length', function () {

		var test = validate(['h','e','l','l','o']).hasLength({ h: 'h', e: 'e', l: 'l', d: 'l', o: 'o' });
		var expected = true;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
	});

	it('should fail when array does not have object length', function () {

		var test = validate(['h','e','l','l','o']).hasLength({ h: 'h', e: 'e', l: 'l', d: 'l', o: 'o', w: 'o' });
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
	});

	//! hasLength Object

	it('should pass when empty object has 0 length', function () {

		var test = validate({}).hasLength(0);
		var expected = true;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
	});

	it('should fail when empty object has 1 length', function () {

		var test = validate({}).hasLength(1);
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
	});

	it('should pass when object has 2 length', function () {

		var test = validate({ h: 'h', e: 'e'}).hasLength(2);
		var expected = true;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
	});

	it('should fail when object has 3 length', function () {

		var test = validate({ h: 'h', e: 'e'}).hasLength(3);
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
	});

	it('should pass when object has array length', function () {

		var test = validate({ h: 'h', e: 'e', l: 'l', d: 'l', o: 'o' }).hasLength([1, 2, 3, 4, 5]);
		var expected = true;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
	});

	it('should fail when object does not have array length', function () {

		var test = validate({ h: 'h', e: 'e', l: 'l', d: 'l', o: 'o' }).hasLength([1, 2, 3, 4, 5, 6]);
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
	});

	it('should pass when object has object length', function () {

		var test = validate({ h: 'h', e: 'e', l: 'l', d: 'l', o: 'o' }).hasLength({ h: 'h', e: 'e', l: 'l', d: 'l', o: 'o' });
		var expected = true;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
	});

	it('should fail when object does not have object length', function () {

		var test = validate({ h: 'h', e: 'e', l: 'l', d: 'l', o: 'o' }).hasLength({ h: 'h', e: 'e', l: 'l', d: 'l', o: 'o', w: 'w' });
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
	});

	//! longerThan

	it('should pass when test is longer than te', function () {

		var test = validate('test').longerThan('te');
		var expected = true;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
	});

	it('should pass when test is longer than 2 characters', function () {

		var test = validate('test').longerThan(2);
		var expected = true;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
	});

	it('should pass when array is longer than 2', function () {

		var test = validate(['h', 'e', 'y']).longerThan(2);
		var expected = true;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
	});

	it('should pass when array is longer than comparison array', function () {

		var test = validate(['h', 'e', 'y']).longerThan(['h', 'e' ]);
		var expected = true;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
	});

	it('should pass when object is longer than 2', function () {

		var test = validate({ h: 'h', e: 'e', y: 'y' }).longerThan(2);
		var expected = true;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
	});

	it('should pass when object is longer than comparison object', function () {

		var test = validate({ h: 'h', e: 'e', y: 'y' }).longerThan({ h: 'h', e: 'e' });
		var expected = true;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
	});

	//! shorterThan

	it('should fail when test is shorter than te', function () {

		var test = validate('test').shorterThan('te');
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
	});

	it('should fail when test is shorter than 2 characters', function () {

		var test = validate('test').shorterThan(2);
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
	});

	it('should fail when array is shorter than 2', function () {

		var test = validate(['h', 'e', 'y']).shorterThan(2);
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
	});

	it('should fail when array is shorter than comparison array', function () {

		var test = validate(['h', 'e', 'y']).shorterThan(['h', 'e' ]);
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
	});

	it('should fail when object is shorter than 2', function () {

		var test = validate({ h: 'h', e: 'e', y: 'y' }).shorterThan(2);
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
	});

	it('should fail when object is shorter than comparison object', function () {

		var test = validate({ h: 'h', e: 'e', y: 'y' }).shorterThan({ h: 'h', e: 'e' });
		var expected = false;

		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
	});

});
