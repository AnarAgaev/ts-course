function example(x?: number | string) {
    if (typeof x === 'string') {
        x.toUpperCase()
    } else if (typeof x === 'number') {
        x.toFixed()
    } else if (x  === undefined) {
        console.log('no value');
    } else {
        x
    }
}

function exampleTwo(str: string | string[] | null) {
    // if (typeof str === 'object') {

    // if (Array.isArray(str)) {}

    if (str && typeof str === 'object') {
        str.concat([''])
    } else if (typeof str === 'string') {
        str.toUpperCase()
    }
}

function exampleThree(x: number[] | Date) {
    if (x instanceof Date) {
        x.getDay()
    } else {
        x.concat([777])
    }
}

type FishAlias = { swim: () => void }
type BirdAlias = { fly: () => void }

function move(animal: FishAlias | BirdAlias) {
    if ('swim' in animal) {
        return animal.swim()
    }

    return animal.fly()
}

export {}