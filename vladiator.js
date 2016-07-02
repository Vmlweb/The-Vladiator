"use strict";
(function() {

	//! Polyfills
	
	Array.from||(Array.from=function(){var r=Object.prototype.toString,n=function(n){return"function"==typeof n||"[object Function]"===r.call(n)},t=function(r){var n=Number(r);return isNaN(n)?0:0!==n&&isFinite(n)?(n>0?1:-1)*Math.floor(Math.abs(n)):n},e=Math.pow(2,53)-1,o=function(r){var n=t(r);return Math.min(Math.max(n,0),e)};return function(r){var t=this,e=Object(r);if(null==r)throw new TypeError("Array.from requires an array-like object - not null or undefined");var a,u=arguments.length>1?arguments[1]:void 0;if("undefined"!=typeof u){if(!n(u))throw new TypeError("Array.from: when provided, the second argument must be a function");arguments.length>2&&(a=arguments[2])}for(var i,f=o(e.length),c=n(t)?Object(new t(f)):new Array(f),h=0;f>h;)i=e[h],u?c[h]="undefined"==typeof a?u(i,h):u.call(a,i,h):c[h]=i,h+=1;return c.length=f,c}}());

	//! Class
	
	var Validate = function(value){
		this.value = value;
		this.fail = false;
		this.skip = false;
		this.extract = false;
		this.recursive = false;
		this._not = false;
	}
	
	//! Misc
	
	Validate.prototype.not = function(){ this._not = true; return this; }
	Validate.prototype.and = function(newValue){ this.skip = false; this.value = newValue; return this; }
	
	Validate.prototype.extract = function(){ this.extract = true; return this; }
	Validate.prototype.recursive = function(){ this.recursive = true; return this; }
	
	//! Completion Checks
	
	Validate.prototype.throws = function(exception){ if (this.didFail()){ throw exception; } };
	
	Validate.prototype.didPass = function(){ return !this.fail; }
	Validate.prototype.didFail = function(){ return this.fail; }
	
	//! Checking
	
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
	
	//! Custom Checks
	
	Validate.prototype.is = function(custom){ return this.check(this._is, Array.from(arguments)); }
	Validate.prototype._is = function(custom, value){
		
		//Perform checks
		return custom(value);
	}
	
	//! Optional Checks
	
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
	
	Validate.prototype.valueOptional = function(){ return this.check(this._valueOptional); }
	Validate.prototype._valueOptional = function(value){
		
		//Perform checks
		if (value === undefined || value === null){
			this.skip = true;
		}
		return true;
	}
	Validate.prototype.valueRequired = function(){ return this.check(this._valueRequired); }
	Validate.prototype._valueRequired = function(value){
		
		//Perform checks
		return value !== undefined && value !== null;
	}
	
	//! Equality Checks
	
	Validate.prototype.isEqual = function(comparison){ return this.check(this._isEqual, Array.from(arguments)); }
	Validate.prototype._isEqual = function(comparison, value){
		
		//Perform checks
		return value === comparison;
	}
	
	Validate.prototype.notEqual = function(comparison){ return this.check(this._notEqual, Array.from(arguments)); }
	Validate.prototype._notEqual = function(comparison, value){
		
		//Perform checks
		return value !== comparison;
	}
	
	//! Numeric Checks
	
	Validate.prototype.higherThan = function(amount){ return this.check(this._higherThan, Array.from(arguments)); }
	Validate.prototype._higherThan = function(amount, value){
		
		//Perform checks
		return value > amount;
	}
	
	Validate.prototype.lowerThan = function(amount){ return this.check(this._lowerThan, Array.from(arguments)); }
	Validate.prototype._lowerThan = function(amount, value){
		
		//Perform checks
		return value < amount;
	}
	
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
	
	//! Length Checks
	
	Validate.prototype.notEmpty = function(){ return this.check(this._notEmpty); }
	Validate.prototype._notEmpty = function(value){ return !this._isEmpty(value); }
	Validate.prototype.isEmpty = function(){ return this.check(this._isEmpty); }
	Validate.prototype._isEmpty = function(value){
		
		//Perform checks
		if (this._isString(value)){
			return value.trim().length <= 0;
		}else{
			return value.length <= 0;
		}
	}
	
	Validate.prototype.longerThan = function(length){ return this.check(this._longerThan, Array.from(arguments)); }
	Validate.prototype._longerThan = function(length, value){
		
		//Perform checks
		return value.length > length;
	}
	
	Validate.prototype.shorterThan = function(length){ return this.check(this._shorterThan, Array.from(arguments)); }
	Validate.prototype._shorterThan = function(length, value){
		
		//Perform checks
		return value.length < length;
	}
	
	Validate.prototype.hasLength = function(length){ return this.check(this._hasLength, Array.from(arguments)); }
	Validate.prototype._hasLength = function(length, value){
		
		//Perform checks
		return value.length === length;
	}
	
	//! Type Checks
	
	Validate.prototype.notBool = function(){ return this.check(this._notBool); }
	Validate.prototype._notBool = function(value){ return !this._isBool(value); }
	Validate.prototype.isBool = function(){ return this.check(this._isBool); }
	Validate.prototype._isBool = function(value){
		
		//Perform checks
		return typeof value === 'boolean';
	}
	
	Validate.prototype.notNumber = function(){ return this.check(this._notNumber); }
	Validate.prototype._notNumber = function(value){ return !this._isNumber(value); }
	Validate.prototype.isNumber = function(){ return this.check(this._isNumber); }
	Validate.prototype._isNumber = function(value){
		
		//Perform checks
		return typeof value === 'number';
	}
	
	Validate.prototype.notString = function(){ return this.check(this._notString); }
	Validate.prototype._notString = function(value){ return !this._isString(value); }
	Validate.prototype.isString = function(){ return this.check(this._isString); }
	Validate.prototype._isString = function(value){
		
		//Perform checks
		return typeof value === 'string';
	}
	
	Validate.prototype.notArray = function(){ return this.check(this._notArray); }
	Validate.prototype._notArray = function(value){ return !this._isArray(value); }
	Validate.prototype.isArray = function(){ return this.check(this._isArray); }
	Validate.prototype._isArray = function(value){
		
		//Perform checks
		return value instanceof Array;
	}
	
	Validate.prototype.notObject = function(){ return this.check(this._notObject); }
	Validate.prototype._notObject = function(value){ return !this._isObject(value); }
	Validate.prototype.isObject = function(){ return this.check(this._isObject); }
	Validate.prototype._isObject = function(value){
		
		//Perform checks
		return value instanceof Object && !(value instanceof Array);
	}
	
	Validate.prototype.notParent = function(){ return this.check(this._notParent); }
	Validate.prototype._notParent = function(value){ return !this._isParent(value); }
	Validate.prototype.isParent = function(){ return this.check(this._isParent); }
	Validate.prototype._isParent = function(value){
		
		//Perform checks
		return value instanceof Object || value instanceof Array;
	}
	
	//! Object Checks
	
	Validate.prototype.missingKey = function(searchKey){ return this.check(this._missingKey, Array.from(arguments)); }
	Validate.prototype._missingKey = function(searchKey, value){ return !this._hasKey(searchKey, value); }
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
	
	Validate.prototype.missingValue = function(searchValue){ return this.check(this._missingValue, Array.from(arguments)); }
	Validate.prototype._missingValue = function(searchValue, value){ return !this._hasValue(searchValue, value); }
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
	
	Validate.prototype.missingKeyValue = function(searchKey, searchValue){ return this.check(this._missingKeyValue, Array.from(arguments)); }
	Validate.prototype._missingKeyValue = function(searchKey, searchValue, value){ return !this._hasKeyValue(searchKey, searchValue, value); }
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
	
	//! Misc Checks
	
	Validate.prototype.notEmail = function(){ return this.check(this._notEmail); }
	Validate.prototype._notEmail = function(value){ return !this.isEmail(value); }
	Validate.prototype.isEmail = function(){ return this.check(this._isEmail); }
	Validate.prototype._isEmail = function(value){
		
		//Perform checks
		return /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(value);
	}
	
	Validate.prototype.notMongoId = function(){ return this.check(this._notMongoId); }
	Validate.prototype._notMongoId = function(value){ return !this._notMongoId(value); }
	Validate.prototype.isMongoId = function(){ return this.check(this._isMongoId); }
	Validate.prototype._isMongoId = function(value){
		
		//Perform checks
		return /^[a-f\d]{24}$/i.test(value);
	}
	Validate.prototype.notMongoEnum = function(type, field){ return this.check(this._notMongoEnum, Array.from(arguments)); }
	Validate.prototype._notMongoEnum = function(type, field, value){ return !this._isMongoEnum(type, field, value); }
	Validate.prototype.isMongoEnum = function(type, field){ return this.check(this._isMongoEnum, Array.from(arguments)); }
	Validate.prototype._isMongoEnum = function(type, field, value){
		
		//Perform checks
		return type.schema.path(field).enumValues.indexOf(value) >= 0;
	}
	
	//! Browser Compatibility

	if (typeof module !== 'undefined' && typeof module.exports !== 'undefined'){
		module.exports = function(value){ return new Validate(value); };
	}else{
		window.validate = function(value){ return new Validate(value); };
	}
})();