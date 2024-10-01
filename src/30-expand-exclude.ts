
// Exclude
type T0 = Exclude<'a' | 'b' |'c', 'a'>  // T0 = 'b' | 'c'
type T1 = Exclude<'a' | 'b' |'c', 'a' |'b' |'d'>  // T1 = 'c'
type T2 = Exclude<string | number | (() => void), Function>  // T2 = string | number

// Using Exclude for narrowing types
type Status = 'success' | 'clientError' | 'serverError' | 200 | 401 | 504
type NumberStatus = Exclude<Status, string> // NumberStatus = 200 | 401 | 504
type TextStatus = Exclude<Status, number> // NumberStatus = 'success' | 'clientError' | 'serverError'



// Extract
type T3 = Extract<'a' | 'b' |'c', 'a'>  // T3 = 'a'
type T4 = Extract<'a' | 'b' |'c', 'a' |'b' |'d'>  // T4 = 'a' | 'b'
type T5 = Extract<string | number | (() => void), Function>  // T5 = () => void

// Using Extract for narrow types
interface Person {
    age: number
    firstName: string
    lastName: string
    sex: 'male' | 'female'
    country: string
    education: string
    skills: string[]
}
type PersonNames = Extract<keyof Person, 'firstName' | 'lastName' | 'fullName'>



// NonNullable
type T6 = NonNullable<string | number | undefined>  // T6 = string | number
type T7 = NonNullable<string[] | null | undefined>  // T7 = string[] 






export function keys <O extends object> (obj: O) {
    const currentKeys = []

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) currentKeys.push(key)
    }

    return currentKeys
}





export {}