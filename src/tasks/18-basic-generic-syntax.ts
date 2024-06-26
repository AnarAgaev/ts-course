export function append <T> (el: T, list: T[]): T[] {
    return list.concat(el)
}

append(1,  [2, 4, 6, 8])
// append('some sting', [1, 2, 3, 4]) // Has error. All the vars should be single type


// This func rewritten on Arrow function
export const prepend = <T> (el: T, arr: T[]): T[] => arr.concat(el)