/** @file Core/defs */



/** @define {boolean} */
export const $SECURE$ = true;

/** @define {boolean} */
export const $CHECK_ARGUMENTS$ = true;

/** @define {boolean} */
export const $OPTIMIZE$ = false;

/** @define {boolean} */
export const $DEBUG$: boolean = true;

/** @define {boolean} */
export const $THROW$: boolean = true;

/** @define {boolean} */
export const $ASSERTS$: boolean = true;



export const enum EEndian {
	LO = 0,
	HI = 1 - LO
}

export interface IThisArg { }
export interface IGenericFunction { (...args: Array<any>): any; }

export const enum ENewLine$ {
	STRING = "\n",
}


export const NEW_LINE_LENGTH = ENewLine$.STRING.length;


export const enum ETypeOfValue {
	BOOLEAN = "boolean",
	FUNCTION = "function",
	NUMBER = "number",
	OBJECT = "object",
	STRING = "string",
	SYMBOL = "symbol",
	UNDEFINED = "undefined",
}

export const enum Float32 {
	MAX_VALUE = 3.402823e38,
	MIN_VALUE = -MAX_VALUE,
	BIT_LENGTH = 32,
	BYTE_LENGTH = BIT_LENGTH / 8
}

export const enum Float64 {
	MAX_VALUE = 1.7976931348623157e308,
	MIN_VALUE = -MAX_VALUE,
	BIT_LENGTH = 64,
	BYTE_LENGTH = BIT_LENGTH / 8,
	MANTISSA_BITS = 52,
}

export const enum EInteger {
	// MAX_SAFE_INTEGER = 9007199254740991,
	MAX_SAFE_INTEGER = 2 ** (Float64.MANTISSA_BITS + 1) - 1,
	MAX_VALUE = MAX_SAFE_INTEGER,
	MIN_VALUE = -MAX_SAFE_INTEGER,
	BIT_LENGTH = Float64.BIT_LENGTH,
	BYTE_LENGTH = BIT_LENGTH / 8,
}

export const enum EUInteger {
	// MAX_SAFE_INTEGER = 9007199254740991,
	MAX_VALUE = EInteger.MAX_SAFE_INTEGER,
	MIN_VALUE = 0,
	BIT_LENGTH = Float64.BIT_LENGTH,
	BYTE_LENGTH = BIT_LENGTH / 8,
}

export const enum EUint8 {
	BYTE_LENGTH = 1,
	BIT_LENGTH = 8 * BYTE_LENGTH,
	MAX_VALUE = 255,
	MIN_VALUE = 0,
}

export const enum EInt8 {
	BYTE_LENGTH = EUint8.BYTE_LENGTH,
	BIT_LENGTH = 8 * BYTE_LENGTH,
	MAX_VALUE = (EUint8.MAX_VALUE - 1) / 2,
	MIN_VALUE = -MAX_VALUE - 1,
}

export const enum EUint16 {
	BYTE_LENGTH = EUint8.BYTE_LENGTH * 2,
	BIT_LENGTH = 8 * BYTE_LENGTH,
	MAX_VALUE = EUint8.MAX_VALUE ** 2 + EUint8.MAX_VALUE * 2,
	MIN_VALUE = 0,
}

export const enum EInt16 {
	BYTE_LENGTH = EUint16.BYTE_LENGTH,
	BIT_LENGTH = 8 * BYTE_LENGTH,
	MAX_VALUE = (EUint16.MAX_VALUE - 1) / 2,
	MIN_VALUE = -MAX_VALUE - 1,
}

export const enum EUint32 {
	BYTE_LENGTH = EUint16.BYTE_LENGTH * 2,
	BIT_LENGTH = 8 * BYTE_LENGTH,
	MAX_VALUE = EUint16.MAX_VALUE ** 2 + EUint16.MAX_VALUE * 2,
	MIN_VALUE = 0,
}

export const enum EInt32 {
	BYTE_LENGTH = EUint32.BYTE_LENGTH,
	BIT_LENGTH = 8 * BYTE_LENGTH,
	MAX_VALUE = (EUint32.MAX_VALUE - 1) / 2,
	MIN_VALUE = -MAX_VALUE - 1,
}

export const enum EUint64 {
	BYTE_LENGTH = EUint32.BYTE_LENGTH * 2,
	BIT_LENGTH = 8 * BYTE_LENGTH,
	MAX_VALUE = EUint32.MAX_VALUE ** 2 + EUint32.MAX_VALUE * 2,
	MIN_VALUE = 0,
}

export const enum EInt64 {
	BYTE_LENGTH = EUint64.BYTE_LENGTH,
	BIT_LENGTH = 8 * BYTE_LENGTH,
	MAX_VALUE = (EUint64.MAX_VALUE - 1) / 2,
	MIN_VALUE = -MAX_VALUE - 1
}



export interface ICloseable {
	close$(): void;
}




// ETriState
export const enum EOrder {
	SMALLER = -1,
	LESSER = SMALLER,
	EQUAL = 0,
	GREATER = 1,
	HIGHER = GREATER,
	NOT_EQUAL = GREATER,
	DIFFERENT = NOT_EQUAL,
	// FALSE = -1,
	// NO = FALSE,
	// UNKNOWN = 0,
	// MAYBE = UNKNOWN,
	// TRUE = 1,
	// YES = TRUE,
}



export interface IEqualComparer<T> {
	$$$___iequalcomparer___$$$: void;
	(a: T, b: T): EOrder;
}




export interface IOrderComparer<T> extends IEqualComparer<T> {
	$$$___iordercomparer___$$$: void;
	(a: T, b: T): EOrder;
}



export interface IReferer$ {
	releaseReference$?(reference: IReference$): boolean;
}



export interface IReference$ {
	acquire$(referer?: IReferer$): void;
	release$(referer?: IReferer$): void;
}



export interface IManager$<T> {
	acquire$(item: T, referer$?: any): void;
	release$(item: T, referer$?: any): void;
}




export interface IStats<TKey, TValue> extends Iterable<[TKey, TValue]> {
	getStat$(key: TKey): TValue;
	setStat$(key: TKey, value: TValue): void;
	getSerial$(): EInteger;
	import$(otherStats: IStats<TKey, TValue>): void;
}



export interface ISerializedStats<TKey, TValue> {
	serial$: EInteger;
	items$: Array<[TKey, TValue]>;
}



export interface IArrayOrderedSet<T> extends Array<T> {
	$$$___iarrayorderedset___$$$: T;
}

