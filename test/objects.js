if (typeof module !== 'undefined' && typeof module.exports !== 'undefined'){
	var assert = require('chai').should();
	var validate = require('../vladiator.js');
}

describe('Objects', function() {
	
	//! hasKey
	
	it('should pass when object has key', function () {
		
		var obj = {
			test: "",
			test2: 5
		};
		
		var test = validate(obj).hasKey("test");
		var test2 = validate(obj).missingKey("test");
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should fail when object missing key', function () {
		
		var obj = {
			test: "",
			test2: 5
		};
		
		var test = validate(obj).hasKey("test3");
		var test2 = validate(obj).missingKey("test3");
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should pass when object has two keys', function () {
		
		var obj = {
			test: "",
			test2: 5,
			test3: true
		};
		
		var test = validate(obj).hasKey("test").hasKey("test2");
		var test2 = validate(obj).missingKey("test").missingKey("test2");
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should fail when object missing two keys', function () {
		
		var obj = {
			test: "",
			test2: 5,
			test3: true
		};
		
		var test = validate(obj).hasKey("test4").hasKey("test5");
		var test2 = validate(obj).missingKey("test4").missingKey("test5");
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should fail when object missing one of two keys', function () {
		
		var obj = {
			test: "",
			test2: 5,
			test3: true
		};
		
		var test = validate(obj).hasKey("test2").hasKey("test4");
		var test2 = validate(obj).missingKey("test2").missingKey("test4");
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.equal(expected);
		test2.didFail().should.not.equal(expected);
	});
	
	it('should fail when object missing one of two keys reversed', function () {
		
		var obj = {
			test: "",
			test2: 5,
			test3: true
		};
		
		var test = validate(obj).hasKey("test4").hasKey("test2");
		var test2 = validate(obj).missingKey("test4").missingKey("test2");
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.equal(expected);
		test2.didFail().should.not.equal(expected);
	});
	
	//! hasValue
	
	it('should pass when object has value', function () {
		
		var obj = {
			test: "hello",
			test2: 5
		};
		
		var test = validate(obj).hasValue("hello");
		var test2 = validate(obj).missingValue("hello");
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should pass when object has value bool', function () {
		
		var obj = {
			test: false,
			test2: 5
		};
		
		var test = validate(obj).hasValue(false);
		var test2 = validate(obj).missingValue(false);
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should pass when object has value number', function () {
		
		var obj = {
			test: 5,
			test2: 5
		};
		
		var test = validate(obj).hasValue(5);
		var test2 = validate(obj).missingValue(5);
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should fail when object missing value string', function () {
		
		var obj = {
			test: "hello",
			test2: 5
		};
		
		var test = validate(obj).hasValue("hello3");
		var test2 = validate(obj).missingValue("hello3");
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should pass when object has two values', function () {
		
		var obj = {
			test: "hello",
			test2: 5,
			test3: "hello2"
		};
		
		var test = validate(obj).hasValue("hello").hasValue("hello2");
		var test2 = validate(obj).missingValue("hello").missingValue("hello2");
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should fail when object missing two values', function () {
		
		var obj = {
			test: "hello",
			test2: 5,
			test3: true
		};
		
		var test = validate(obj).hasValue("hello4").hasValue("hello5");
		var test2 = validate(obj).missingValue("hello4").missingValue("hello5");
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should fail when object missing one of two values', function () {
		
		var obj = {
			test: "hello2",
			test2: 5,
			test3: true
		};
		
		var test = validate(obj).hasValue("hello2").hasValue("hello4");
		var test2 = validate(obj).missingValue("hello2").missingValue("hello4");
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.equal(expected);
		test2.didFail().should.not.equal(expected);
	});
	
	it('should fail when object missing one of two values reversed', function () {
		
		var obj = {
			test: "hello2",
			test2: 5,
			test3: true
		};
		
		var test = validate(obj).hasValue("hello4").hasValue("hello2");
		var test2 = validate(obj).missingValue("hello4").missingValue("hello2");
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.equal(expected);
		test2.didFail().should.not.equal(expected);
	});
		
});