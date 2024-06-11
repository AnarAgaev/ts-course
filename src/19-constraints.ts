function getLength<T extends {length: number}>(arg: T) {
    return arg.length
}

getLength('abc')
getLength(['one', 'two', 'three'])
getLength({length: 2})
// getLength(123) // there isn't length value
// getLength(true) // there isn't length value

const tempObj = { variable: 'value', length: 1 }
getLength(tempObj)


// !!!
// The is a special type. It's names object