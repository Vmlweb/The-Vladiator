# The Vladiator

[![Build Status](http://bamboo.vmlweb.co.uk:8085/plugins/servlet/wittified/build-status/OPEN-VLAD)](http://bamboo.vmlweb.co.uk:8085/browse/OPEN-VLAD)

Javascript validation and assertion library. Any optimization suggestions are welcome.

## Getting Started

Below are some basic examples of usage.

```javascript
var validate = require('the-vladiator');

//E-mail address
validate('email@email.com').isRequired().isString().isEmail().didPass(); //returns true if passed validation

//Name
validate('John').isRequired().isString().notEmpty().didFail(); //returns true if failed validation

//Positive number
validate('5').isRequired().isNumber().isPositive().throws('Number must be positive'); //throws if failed validation
```

### Type Checks

You can test whether your input is a certain type

```javascript
.isBool()
.notBool()

.isTrue()
.notTrue()

.isFalse()
.notFalse()

.isNumber()
.notNumber()

.isString()
.notString()

.isArray()
.notArray()

.isObject()
.notObject()

//Checks for an array or object
.isParent()
.notParent()
```

### Equality Checks

```javascript
//Checks for equality using ===

.isEqual(comparison)

.notEqual(comparison)

//Check contents using indexOf

.contains(comparison)

.notContains(comparison)
```

### Numeric Checks

```javascript
.isPositive()
.isNegative()

.higherThan(amount)
.lowerThan(amount)
```

### Length Checks

```javascript
.isEmpty()
.notEmpty()

.hasLength(length)

.longerThan(length)
.shorterThan(length)
```

### Optional Checks

```javascript
//Ensures the value is defined
.isRequired()

//Skips remaining checks if value is undefined
.isOptional()

//Ensures that value is defined and not null
.valueRequired()

//Skips remaining checks if value is undefined or null
.valueOptional()
```

### Object Checks

```javascript
.missingKey(key)
.hasKey(key)

.missingValue(value)
.hasValue(value)

.missingKeyValue(key, value)
.hasKeyValue(key, value)
```

### Nested Checks

```javascript
//The value can be replaced with a nested object one or more levels deeper
.open('key')
.open('firstKey.secondKey')

//Iterates checking inside arrays or objects, all subsequent checks will be performed on each
.extract()
.extract('key')
.extract('firstKey.secondKey')

//Iterates checking through all nested levels inside arrays or objects
.recursive()
```

### Custom Checks

```javascript
//Validates whether input is pie
.is(function(value){
	return value === Math.PI;
});
```

### Other Checks

```javascript
.isEmail(email)
.notEmail(email)

//Checks for MongoDB ObjectIds
.isMongoId()
.notMongoId()

//Checks whether value is an Enum.
.isMongoEnum(type, field) //Takes a mongoose model and property name respectively
.notMongoEnum(type, field)
```

### Other Stuff

```javascript
//Replaces the currently checking value
.and(newValue)

//Inverts the following checks result
.not()

//Changes values case
.upperCase()
.lowerCase()
```

### Advanced Examples

We can compose some pretty lengthy validation rules as demonstrated below though it's recommended to split them into smaller more readable chunks.

#### Example One

```javascript
validate('myPassword').isString().longerThan(6).shorterThan(20).notContains('password').notEmail().throw('Enter a strong password')
```

#### Example Two

```javascript
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

validate(data).hasKey('usernames').hasKey('emails')
	.extract('usernames').isString().notEmpty()
	.and(data)
	.extract('emails').isString().isEmail()
	.throw('failed');
```

#### Example Three

```javascript
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

validate(database)
	.extract('users.data').hasKey('id').hasKey('email').hasKey('born')
	.extract('id').isMongoId().is(function(value){
		
		var exists = true; //Check whether exists in database
		return exists;
	})
	.throw('failed');
```