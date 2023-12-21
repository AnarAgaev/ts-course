type Union1 = 'a' | 'b' | 'c' | 'd'
type Union2 = 'a' | 'e' | 'c' | 'f'

// Expample of the UnionOr has only unic properties from both parts (Union1 and Union2)
type UnionOr = Union1 | Union2
let letterOr: UnionOr // All vairiants: a | b | c | d | e | i

// Example of the UnionAnd has only properties that in at both parent Unions
type UnionAnd = Union1 & Union2
let letterAnd: UnionAnd // a | c

type UnionAsObj = { a: string, b: string, c: number } & { a: string, d: string, e: number }
const varAsUnionObj: UnionAsObj = {
    a: 'some string',
    b: 'some string',
    d: 'some string',
    c: 777,
    e: 333
}

type User = {
    readonly email: string
    readonly login: string
    passowrd: string
}

type Person = {
    readonly firstName: string
    lastName: string
    phone?: string
    bearthday: number
}

type Employee = User & Person

const user: Employee = {
    bearthday: 15,
    email: 'email',
    firstName: 'Agent',
    lastName: 'Smith',
    login: 'login',
    passowrd: 'password',
}

type Developer = {
    skills: string[]
    phone: string
    level?: 'junior' | 'middle' | 'senior'
    say(): void
    code?: (arg: string) => void
} & Employee

let developerUser: Developer


type user1 = {
    firstName: string
} | 'adimn'

type user2 = {
    status: boolean
}

type mainUser = user1 & user2

const someUser: mainUser = {
    firstName: 'agent',
    status: true
}

type userArr1 = [
    string, number
] | boolean

type userArr2 = [
    boolean
]

type mainArrUser = userArr1 & userArr2
