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
				ids: [
					'507f1f77bcf86cd799439011',
					'507f1f77bcf86cd799439012',
					'507f1f77bcf86cd799439013',
					'507f1f77bcf86cd799439014',
					'507f1f77bcf86cd799439015',
					'507f1f77bcf86cd799439016',
					'507f1f77bcf86cd799439017',
					'507f1f77bcf86cd799439018',
					'507f1f77bcf86cd799439019',
					'507f1f77bcf86cd799439020',
					'507f1f77bcf86cd799439021'
				]
			}
		};
		
		var test = validate(database).extract('users.ids').isMongoId().is(function(value){

			//Check whether exists in database
			var exists = true;
			return exists;
		});
			
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		
	});
	
});