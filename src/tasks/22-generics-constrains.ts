export function keys <O extends object> (obj: O): Array<keyof O> {
    const currentKeys: Array<keyof O> = []

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) currentKeys.push(key)
    }

    return currentKeys
}

export function values <O extends object> (obj: O): Array<O[keyof O]> {
    const currentValues: Array<O[keyof O]> = []

    for (const key in obj) {
        currentValues.push(obj[key])
    }

    return currentValues
}