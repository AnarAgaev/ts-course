
// Functions
function objectFromPair(pair: [string, string]) {
    const [key, value] = pair

    return {
        [key]: value
    }
}

type FirstArg<T> = T extends (first: infer First, ...args: any[]) => any ? First : never

const customPair: FirstArg<typeof objectFromPair> = ['key', 'value']

objectFromPair(customPair)



// Classes
type ConstructorFirstArg<T> = T extends { new(arg: infer A, args: any[]): any } ? A : never

class Computer {
    constructor(brand: string) {}
}

let brand: ConstructorFirstArg<typeof Computer> = ''

let dateArg: ConstructorFirstArg<typeof Date>


export {}