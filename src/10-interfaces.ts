interface User {
    readonly email: string
    readonly login: string
    passowrd: string
}

interface User {
    isOinline?: boolean
}

interface Window {
    isAuth?: boolean
}
// window.isAuth = false

interface Person {
    readonly firstName: string
    lastName: string
    phone?: string
    bearthday: number
}

interface Employee extends User, Person {
    constractStart: Date
}

interface Developer extends Employee {
    skills: string[]
    phone: string
    level?: 'junior' | 'middle' | 'senior'
    say(): void
    code?: (arg: string) => void
}

// const worker: Developer = {}
// class MyDeveloper implements Developer {}

export default developer