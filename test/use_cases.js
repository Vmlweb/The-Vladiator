if (typeof module !== 'undefined' && typeof module.exports !== 'undefined'){
	var assert = require('chai').should();
	var validate = require('../vladiator.js');
}

describe('Use Cases', function() {
	
	it('should pass when checking password for minimum and max characters', function () {
		
		var test = validate('myPassword').isString().longerThan(6).shorterThan(20).notContains('password').notEmail();
		var test2 = validate('myVeryLong20Characterpassword').isString().longerThan(6).shorterThan(20).notContains('password').notEmail();
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
		
	});
	
	it('should pass when checking usernames and emails', function () {
		
		var data = {
			usernames: [
				'User1',
				'User2',
				'User3',
				'User4',
				'User5'
			],
			emails: [
				'admin1@vmlweb.co.uk',
				'admin2@vmlweb.co.uk',
				'admin3@vmlweb.co.uk',
				'admin4@vmlweb.co.uk',
				'admin5@vmlweb.co.uk'
			]
		};
		
		var test = validate(data).extract('usernames').isString().notEmpty().and(data).extract('emails').isString().isEmail();
		var test2 = validate(data).extract('usernames').isString().notEmpty().and(data).extract('emails').isString().notContains('vmlweb.co.uk').isEmail();
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
		
	});
	
	it('should pass when checking database identifiers', function () {
		
		var database = {
			users: {
				metadata: {},
				data: [
					{ id: '507f1f77bcf86cd799439011', email: 'admin1@vmlweb.co.uk', born: 1467468682 },
					{ id: '507f1f77bcf86cd799439012', email: 'admin2@vmlweb.co.uk', born: 1467468682 },
					{ id: '507f1f77bcf86cd799439013', email: 'admin3@vmlweb.co.uk', born: 1467468682 },
					{ id: '507f1f77bcf86cd799439014', email: 'admin4@vmlweb.co.uk', born: 1467468682 },
					{ id: '507f1f77bcf86cd799439015', email: 'admin5@vmlweb.co.uk', born: 1467468682 },
					{ id: '507f1f77bcf86cd799439016', email: 'admin6@vmlweb.co.uk', born: 1467468682 },
					{ id: '507f1f77bcf86cd799439017', email: 'admin7@vmlweb.co.uk', born: 1467468682 },
					{ id: '507f1f77bcf86cd799439018', email: 'admin8@vmlweb.co.uk', born: 1467468682 },
					{ id: '507f1f77bcf86cd799439019', email: 'admin9@vmlweb.co.uk', born: 1467468682 }
				]
			}
		};
		
		var test = validate(database)
			.extract('users.data').hasKey('id').hasKey('email').hasKey('born')
			.extract('id').isMongoId().is(function(value){
				
				var exists = true; //Check whether exists in database
				return exists;
			});
			
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		
	});
	
});