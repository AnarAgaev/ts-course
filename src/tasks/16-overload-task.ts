function head(value: string): string
function head(value: number[]): number
function head(value: boolean[]): boolean
function head(value: any): any {
    return value[0]
}

const str = head('string')
const num = head([1, 2, 3, 4])
const bool = head([true, false, false])

console.log(str.toLocaleUpperCase)
console.log(num*2)
console.log(!bool)

export {}
