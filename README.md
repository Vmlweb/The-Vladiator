# The Vladiator

[![Build Status](http://bamboo.vmlweb.co.uk:8085/plugins/servlet/wittified/build-status/OPEN-VLAD)](http://bamboo.vmlweb.co.uk:8085/browse/OPEN-VLAD)

Javascript validation and assertion library.

## Getting Started Vladiating

Below are some basic examples of usage.

```javascript
var validate = require('the-vladiator');

//E-mail address
validate('email@email.com').isRequired().isString().isEmail().didPass(); //returns true if passed validation

//Name
validate('John').isRequired().isString().notEmpty().didFail(); //returns true if failed validation

//Positive number
validate('5').isRequired().isNumber().isPositive().didFail();
```

### Type Vladiation

You can test whether your input is a certain type

```javascript
.isBool()
.notBool()

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

### Equality Vladiation

```javascript
//Checks for equality using ===

.isEqual(comparison)

.notEqual(comparison)
```

### Numeric Vladiation

```javascript
.isPositive()
.isNegative()

.higherThan(amount)
.lowerThan(amount)
```

### Length Vladiation

```javascript
.isEmpty()
.notEmpty()

.hasLength(length)

.longerThan(length)
.shorterThan(length)
```

### Optional Vladiation

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

### Object Vladiation

```javascript
.missingKey(key)
.hasKey(key)

.missingValue(value)
.hasValue(value)

.missingKeyValue(key, value)
.hasKeyValue(key, value)
```

### Nested Vladiation

```javascript
//Iterates one level deep in arrays or objects
.extract()

//Iterates through all nested levels
.recursive()
```

### Custom Vladiation

```javascript
//Validates whether input is pie
.is(function(value){
	return value === Math.PI;
});
```

### Other Vladiatables

```javascript
.isEmail(email)
.notEmail(email)

//Checks for MongoDB ObjectIds
.isMongoId()
.notMongoId()

//Checks whether value is an Enum.
.isMongoEnum(type, field) //Takes a MongoDB model and property name respectively
.notMongoEnum(type, field)
```

### Other Stuff

```javascript
//Replaces the currently checking value
.and(newValue)

//Inverts the following checks result
.not()
```
