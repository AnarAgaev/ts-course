function getPropFromObj <T, U extends keyof T> (key: U, obj: T): T[U] {
    return obj[key]
}

const getPropFromObjAsArrowFn = <T, U extends keyof T> (key: U, obj: T): T[U] => obj[key]

// Example
const customObj = { a: 1, b: 2, c: 3 }
getPropFromObj('a', customObj) // 1
// getPropFromObj('d', customObj) // Error: There's no 'd' property at the customObj



// P.S: Comment for return value T[U]
interface Laptop { brand: string }
type F = Laptop['brand']
