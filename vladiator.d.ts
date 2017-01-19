declare module 'the-vladiator'{

	class Validate {
	    
	    //! Class
	    
	    value: any
	    
	    _fail: boolean
	    _skip: boolean
	    _extract: boolean
	    _recursive: boolean
	    _not: boolean
	    
	    constructor(value: any)
	    
		//! Nesting
		
	    recursive(): this
	    extract(field: string): this
	    
	    open(field: string): this
	    
	    //! Value
	    
	    not(): this
	    and(newValue: any): this
	    
	    upperCase(): this
	    lowerCase(): this
	    
	    //! Completion
	    
	    throws(exception: any): void
	    didPass(): boolean
	    didFail(): boolean
	    
	    //! Checking
	    
	    check(checkItem: any, args: any): this
	    
	    //! Custom Checks
	    
	    is(custom: (value: any) => boolean): this
	    _is(custom: (value: any) => boolean, value: any): any
	    
	    //! Optional Checks
	    
	    isOptional(): any
	    _isOptional(value: any): boolean
	    
	    isRequired(): any
	    _isRequired(value: any): boolean
	    
	    valueOptional(): any
	    _valueOptional(value: any): boolean
	    
	    valueRequired(): any
	    _valueRequired(value: any): boolean
	    
	    //! Equality Checks
	    
	    isEqual(comparison: any): this
	    _isEqual(comparison: any, value: any): boolean
	    
	    notEqual(comparison: any): this
	    _notEqual(comparison: any, value: any): boolean
	    
	    notContains(comparison: any): this
	    _notContains(comparison: any, value: any): boolean
	    
	    contains(comparison: any): this
	    _contains(comparison: any, value: any): boolean
	    
	    //! Numeric Checks
	    
	    higherThan(amount: number): this
	    _higherThan(amount: number, value: any): boolean
	    
	    lowerThan(amount: number): this
	    _lowerThan(amount: number, value: any): boolean
	    
	    isNegative(): any
	    _isNegative(value: any): boolean
	    
	    isPositive(): any
	    _isPositive(value: any): boolean
	    
	    //! Length Checks
	    
	    notEmpty(): any
	    _notEmpty(value: any): boolean
	    
	    isEmpty(): any
	    _isEmpty(value: any): boolean
	    
	    longerThan(length: number): this
	    _longerThan(length: number, value: any): boolean
	    
	    shorterThan(length: number): this
	    _shorterThan(length: number, value: any): boolean
	    
	    hasLength(length: number): this
	    _hasLength(length: number, value: any): boolean
	    
	    //! Type Checks
	    
	    notBool(): any
	    _notBool(value: any): boolean
	    
	    isBool(): any
	    _isBool(value: any): boolean
	    
	    notTrue(): any
	    _notTrue(value: any): boolean
	    
	    isTrue(): any
	    _isTrue(value: any): boolean
	    
	    notFalse(): any
	    _notFalse(value: any): boolean
	    
	    isFalse(): any
	    _isFalse(value: any): boolean
	    
	    notNumber(): any
	    _notNumber(value: any): boolean
	    
	    isNumber(): any
	    _isNumber(value: any): boolean
	    
	    notString(): any
	    _notString(value: any): boolean
	    
	    isString(): any
	    _isString(value: any): boolean
	    
	    notArray(): any
	    _notArray(value: any): boolean
	    
	    isArray(): any
	    _isArray(value: any): boolean
	    
	    notObject(): any
	    _notObject(value: any): boolean
	    
	    isObject(): any
	    _isObject(value: any): boolean
	    
	    notParent(): any
	    _notParent(value: any): boolean
	    
	    isParent(): any
	    _isParent(value: any): boolean
	    
	    //! Object Checks
	    
	    missingKey(searchKey: string): this
	    _missingKey(searchKey: string, value: any): boolean
	    
	    hasKey(searchKey: string): this
	    _hasKey(searchKey: string, value: any): boolean
	    
	    missingValue(searchValue: any): this
	    _missingValue(searchValue: any, value: any): boolean
	    
	    hasValue(searchValue: any): this
	    _hasValue(searchValue: any, value: any): boolean
	    
	    missingKeyValue(searchKey: string, searchValue: any): this
	    _missingKeyValue(searchKey: string, searchValue: any, value: any): boolean
	    
	    hasKeyValue(searchKey: string, searchValue: any): this
	    _hasKeyValue(searchKey: string, searchValue: any, value: any): boolean
	    
	    //! Misc Checks
	    
	    notEmail(): any
	    _notEmail(value: any): boolean
	    
	    isEmail(): any
	    _isEmail(value: any): boolean
	    
	    notMongoId(): any
	    _notMongoId(value: any): boolean
	    
	    isMongoId(): any
	    _isMongoId(value: any): boolean
	    
	    notMongoEnum(type: any, field: any): this
	    _notMongoEnum(type: any, field: any, value: any): boolean
	    
	    isMongoEnum(type: any, field: any): this
	    _isMongoEnum(type: any, field: any, value: any): boolean
	}
	
	function validate(value: any): Validate
	
	export = validate
}