//Validate class and constructor
var Validate = function(value){
	this.value = value;
	this.fail = false;
	this.skip = false;
	this.extract = false;
	this.recursive = false;
	this._not = false;
}

//Methods
Validate.prototype.not = function(){ this._not = true; return this; }
Validate.prototype.and = function(newValue){ this.skip = false; this.value = newValue; return this; }
Validate.prototype.doExtract = function(){ this.extract = true; return this; }
Validate.prototype.doRecursive = function(){ this.recursive = true; return this; }
Validate.prototype.doExtractRecursive = function(){ this.extract = true; this.recursive = true; return this; }
Validate.prototype.didPass = function(){ return !this.fail; }
Validate.prototype.didFail = function(){ return this.fail; }

//Checking
Validate.prototype.check = function(checkItem, args){
	if (this.fail || this.skip){ return this; }
	
	//Perform checks
	if (this.extract){
		if (this.recursive){
			
			//Recursive object validation
			var checkObject;
			checkObject = function(object){
				for (var i in object){
					if (object.hasOwnProperty(i)){
						
						//Check whether item has children
						if (object[i] instanceof Array || object[i] instanceof Object){
							checkObject(object[i]);
						}else{
							
							//Validate deep child item
							if (args){
								this.fail = !checkItem.apply(this, args.concat([object[i], i]));
							}else{
								this.fail = !checkItem.call(this, object[i]);
							}
							if (this._not){ this.fail = !this.fail; }
							if (this.fail){ return this; }
						}
					}
				}
			}
			checkObject(this.value);
			
		}else{
			
			//Linear object validation
			for (var i in this.value){
				if (this.value.hasOwnProperty(i)){
				
					//Validate child item
					if (args){
						this.fail = !checkItem.apply(this, args.concat([this.value[i], i]));
					}else{
						this.fail = !checkItem.call(this, this.value[i]);
					}
					if (this._not){ this.fail = !this.fail; }
					if (this.fail){ return this; }
				}
			}
		}
	}else{
		
		//Validate parent item
		if (args){
			this.fail = !checkItem.apply(this, args.concat([this.value]));
		}else{
			this.fail = !checkItem.call(this, this.value);
		}
		if (this._not){ this.fail = !this.fail; }
		if (this.fail){ return this; }
	}
	
	this._not = false;
	
	return this;
}

//! Optional

Validate.prototype.isOptional = function(){ return this.check(this._isOptional); }
Validate.prototype._isOptional = function(value){
	
	//Perform checks
	if (value === undefined){
		this.skip = true;
	}
	return true;
}
Validate.prototype.isRequired = function(){ return this.check(this._isRequired); }
Validate.prototype._isRequired = function(value){
	
	//Perform checks
	return value !== undefined;
}

Validate.prototype.isOptionalWithValue = function(){ return this.check(this._isOptionalWithValue); }
Validate.prototype._isOptionalWithValue = function(value){
	
	//Perform checks
	if (value === undefined || value === null){
		this.skip = true;
	}
	return true;
}
Validate.prototype.isRequiredWithValue = function(){ return this.check(this._isRequiredWithValue); }
Validate.prototype._isRequiredWithValue = function(value){
	
	//Perform checks
	return value !== undefined && value !== null;
}

//! Numeric Checks

Validate.prototype.isNegative = function(){ return this.check(this._isNegative); }
Validate.prototype._isNegative = function(value){
	
	//Perform checks
	return value < 0;
}
Validate.prototype.isPositive = function(){ return this.check(this._isPositive); }
Validate.prototype._isPositive = function(value){
	
	//Perform checks
	return value >= 0;
}

//! Equality

Validate.prototype.isEqual = function(comparison){ return this.check(this._isEqual, Array.from(arguments)); }
Validate.prototype._isEqual = function(comparison, value){
	
	//Perform checks
	return value === comparison;
}

Validate.prototype.isNotEqual = function(comparison){ return this.check(this._isNotEqual, Array.from(arguments)); }
Validate.prototype._isNotEqual = function(comparison, value){
	
	//Perform checks
	return value !== comparison;
}

//! Literal Types

Validate.prototype.isNotBool = function(){ return this.check(this._isNotBool); }
Validate.prototype._isNotBool = function(value){ return !this._isBool(value); }
Validate.prototype.isBool = function(){ return this.check(this._isBool); }
Validate.prototype._isBool = function(value){
	
	//Perform checks
	return typeof value === 'boolean';
}

Validate.prototype.isNotNumber = function(){ return this.check(this._isNotNumber); }
Validate.prototype._isNotNumber = function(value){ return !this._isNumber(value); }
Validate.prototype.isNumber = function(){ return this.check(this._isNumber); }
Validate.prototype._isNumber = function(value){
	
	//Perform checks
	return typeof value === 'number';
}

Validate.prototype.isNotString = function(){ return this.check(this._isNotString); }
Validate.prototype._isNotString = function(value){ return !this._isString(value); }
Validate.prototype.isString = function(){ return this.check(this._isString); }
Validate.prototype._isString = function(value){
	
	//Perform checks
	return typeof value === 'string';
}

//! Complex Types

Validate.prototype.isNotArray = function(){ return this.check(this._isNotArray); }
Validate.prototype._isNotArray = function(value){ return !this._isNotArray(value); }
Validate.prototype.isArray = function(){ return this.check(this._isArray); }
Validate.prototype._isArray = function(value){
	
	//Perform checks
	return value instanceof Array;
}

Validate.prototype.isNotObject = function(){ return this.check(this._isNotObject); }
Validate.prototype._isNotObject = function(value){ return !this._isObject(value); }
Validate.prototype.isObject = function(){ return this.check(this._isObject); }
Validate.prototype._isObject = function(value){
	
	//Perform checks
	return value instanceof Object;
}

Validate.prototype.isNotParent = function(){ return this.check(this._isNotParent); }
Validate.prototype._isNotParent = function(value){ return !this._isParent(value); }
Validate.prototype.isParent = function(){ return this.check(this._isParent); }
Validate.prototype._isParent = function(value){
	
	//Perform checks
	return value instanceof Object || value instanceof Array;
}
//! Ownership

Validate.prototype.hasNoKey = function(searchKey){ return this.check(this._hasNoKey, Array.from(arguments)); }
Validate.prototype._hasNoKey = function(searchKey, value){ return !this._hasKey(searchKey, value); }
Validate.prototype.hasKey = function(searchKey){ return this.check(this._hasKey, Array.from(arguments)); }
Validate.prototype._hasKey = function(searchKey, value){
	
	//Perform checks
	var found = false;
	for (var i in value){
		if (value.hasOwnProperty(i)){
			if (i === searchKey){
				found = true;
			}
		}
	}
	return found;
}

Validate.prototype.hasNoValue = function(searchValue){ return this.check(this._hasNoValue, Array.from(arguments)); }
Validate.prototype._hasNoValue = function(searchValue, value){ return !this._hasNoValue(searchKey, value); }
Validate.prototype.hasValue = function(searchValue){ return this.check(this._hasValue, Array.from(arguments)); }
Validate.prototype._hasValue = function(searchValue, value){
	
	//Perform checks
	var found = false;
	for (var i in value){
		if (value.hasOwnProperty(i)){
			if (value[i] === searchValue){
				found = true;
			}
		}
	}
	return found;
}

Validate.prototype.hasNoKeyValue = function(searchKey, searchValue){ return this.check(this._hasNoKeyValue, Array.from(arguments)); }
Validate.prototype._hasNoKeyValue = function(searchKey, searchValue, value){ return !this._hasKeyValue(searchKey, searchValue, value); }
Validate.prototype.hasKeyValue = function(searchKey, searchValue){ return this.check(this._hasKeyValue, Array.from(arguments)); }
Validate.prototype._hasKeyValue = function(searchKey, searchValue, value){
	
	//Perform checks
	var found = false;
	for (var i in value){
		if (value.hasOwnProperty(i)){
			if (i === searchKey && value[i] === searchValue){
				found = true;
			}
		}
	}
	return found;
}

//! Length

Validate.prototype.isNotEmpty = function(){ return this.check(this._isNotEmpty); }
Validate.prototype._isNotEmpty = function(value){ return !this._isEmpty(value); }
Validate.prototype.isEmpty = function(){ return this.check(this._isEmpty); }
Validate.prototype._isEmpty = function(value){
	
	//Perform checks
	if (this._isString(value)){
		return value.trim().length <= 0;
	}else{
		return value.length <= 0;
	}
}

Validate.prototype.hasLength = function(type, field){ return this.check(this._hasLength, Array.from(arguments)); }
Validate.prototype._hasLength = function(value, length){
	
	//Perform checks
	return value.length === length;
}

//! Mongoose

Validate.prototype.isNotMongoId = function(){ return this.check(this._isNotMongoId); }
Validate.prototype._isNotMongoId = function(value){ return !this._isNotMongoId(value); }
Validate.prototype.isMongoId = function(){ return this.check(this._isMongoId); }
Validate.prototype._isMongoId = function(value){
	
	//Perform checks
	return /^[a-f\d]{24}$/i.test(value);
}
Validate.prototype.isNotMongoEnum = function(type, field){ return this.check(this._isNotMongoEnum, Array.from(arguments)); }
Validate.prototype._isNotMongoEnum = function(type, field, value){ return !this._isMongoEnum(type, field, value); }
Validate.prototype.isMongoEnum = function(type, field){ return this.check(this._isMongoEnum, Array.from(arguments)); }
Validate.prototype._isMongoEnum = function(type, field, value){
	
	//Perform checks
	return type.schema.path(field).enumValues.indexOf(value) >= 0;
}

//! Misc

Validate.prototype.isNotEmail = function(){ return this.check(this._isNotEmail); }
Validate.prototype._isNotEmail = function(value){ return !this.isEmail(value); }
Validate.prototype.isEmail = function(){ return this.check(this._isEmail); }
Validate.prototype._isEmail = function(value){
	
	//Perform checks
	return /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(value);
}

module.exports = function(value){ return new Validate(value); }