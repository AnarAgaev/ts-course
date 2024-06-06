// numbers
let x = 10.5;
// let y = 1234n;
let z = NaN;
// x = ''; // is error

// string
let str1: string = 'Hello world';
// str1 = 5; // is error

// boolean
let o = true;
o = false;
// o = 1; // is error

// nothing
let u: undefined = undefined;
let n: null = null;

// literal
const num = 108;
const str2 = 'any string';

// universal
let mm: any = 1;
mm = 'str';
mm = [];
mm.tuUpperCase();

let xx: unknown = 2;
// xx.toUpperCase(); // is error
if (typeof xx === 'string') xx.toUpperCase();

export {}