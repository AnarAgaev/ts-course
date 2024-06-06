interface User {
    readonly email: string
    readonly login: string
    password: string
}

interface User {
    isOnline?: boolean
}

interface Window {
    isAuth?: boolean
}
// window.isAuth = false

interface Person {
    readonly firstName: string
    lastName: string
    phone?: string
    birthday: number
}

interface Employee extends User, Person {
    constructStart: Date
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

export default Developer