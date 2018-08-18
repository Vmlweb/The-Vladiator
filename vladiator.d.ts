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
	    extract(field?: string): this

	    open(field?: string): this

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

	    //! Optional Checks

	    isOptional(): this
	    isRequired(): any
	    valueOptional(): any
	    valueRequired(): any

	    //! Equality Checks

	    isEqual(comparison: any): this
	    notEqual(comparison: any): this
	    notContains(comparison: any): this
	    contains(comparison: any): this

	    //! Numeric Checks

	    higherThan(amount: number): this
	    lowerThan(amount: number): this
	    isNegative(): this
	    isPositive(): this

			//! Length Checks

	    notEmpty(): this
	    isEmpty(): this
	    longerThan(length: number): this
	    shorterThan(length: number): this
	    hasLength(length: number): this

	    //! Type Checks

	    notBool(): this
	    isBool(): this
	    notTrue(): this
	    isTrue(): this
	    notFalse(): this
	    isFalse(): this

			notNumber(): this
	   	isNumber(): this
	    notString(): this
	    isString(): this

	    notDate(): this
	    isDate(): this

			notArray(): this
	    isArray(): this
	    notObject(): this
	    isObject(): this
	    notParent(): this
	    isParent(): this

	    //! Object Checks

	    missingKey(searchKey: string): this
	    hasKey(searchKey: string): this
	    missingValue(searchValue: any): this
	    hasValue(searchValue: any): this
	    missingKeyValue(searchKey: string, searchValue: any): this
	    hasKeyValue(searchKey: string, searchValue: any): this

	    //! Misc Checks

	    notEmail(): this
	    isEmail(): this

	    notMongoId(): this
	    isMongoId(): this
	    notMongoEnum(type: any, field: any): this
	    isMongoEnum(type: any, field: any): this

	    notSemver(): this
	    isSemver(): this
	}

	function validate(value: any): Validate

	namespace validate{ }

	export = validate
}
