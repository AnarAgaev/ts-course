
type answer_1 = 77 extends number ? true : false // true

type answer_2 = number extends 77 ? true : false // false

type answer_3 = string[] extends any ? true : false // true

type answer_4 = string[] extends any[] ? true : false // true

type answer_5 = never extends any ? true : false // true

type answer_6 = any extends any ? true : false // true

type answer_7 = Date extends { new(...args: any[]): any } ? true : false // false

type answer_8 = typeof Date extends { new(...args: any[]): any } ? true : false // true

export {}