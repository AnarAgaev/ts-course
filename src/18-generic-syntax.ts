/**
 * For made/initial Generic should use pair symbols <>
 */

// Array<string> // string[]
// Promise<number>

type TypeFactory<T> = T
type SType = TypeFactory<string>
type NType = TypeFactory<number>
type BType = TypeFactory<boolean>

type UnionFactory<FT, ST> = FT | ST
type SomeUnionType = UnionFactory<string, number>


// Example 1.
function toArray<T> (...args: T[]): T[] { return args }
const numsArr = toArray(1, 2, 3, 4)
const strsArr = toArray('s', 't', 'r', 's')


// Example 2.
function head(value: string): string
function head(value: []): undefined
function head<T>(value: readonly T[]): T
function head(value: any): any {
    return value[0]
}


// Example 3/
interface ModelData<T> { title: string; value: T; }

const objExampleModelData: ModelData<number> = {
    title: 'Some title',
    value: 12
}
// objExampleModelData.value = true // Get Error! Value should be type number



// Example on arrow function
const headArrow = <T>(value: T[]): T => value[0]
