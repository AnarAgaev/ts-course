const tuplePairCreator = <T> (first: T) => {
    return <U> (second: U): [T, U] => {
        return [first, second]
    }
}

const toTupleWithOne = tuplePairCreator(true) // const toTupleWithOne: <U>(second: U) => [boolean, U]
const toTupleWithSecond = toTupleWithOne('str') // const toTupleWithSecond: [boolean, string]