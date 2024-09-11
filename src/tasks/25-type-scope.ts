export function createMap <T>(list: T[]) {
    return function<U>(cb: (el: T) => U): U[] {
        const result = []

        for (const el of list) {
            result.push(cb(el))
        }

        return result
    }
}

const mapNums = createMap([1, 2, 3])
const result = mapNums((num) => num + 2)
