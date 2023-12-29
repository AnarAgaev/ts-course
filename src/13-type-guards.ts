type Fish = { swim: () => void }
type Bird = { fly: () => void }

// as - утверждение. Исользуется когда надо явноу указать TY что нужно использовать некую переменную как конкретный тип
// as boolean, as string, as interfase, as Union etc.

function isFish(pet: Fish | Bird): pet is Fish  {
    return (pet as Fish).swim !== undefined
}

function move(animal: Fish | Bird) {
    // if ('swim' in animal) {

    if (isFish(animal)) {
        return animal.swim()
    }

    return animal.fly()
}

// Not using this example of Guard. It willn't work with '', 0 and etc.

// function isNull(val: any): val is null {
//     return !val
// }

// const empty = ''
// const zero = 0

// if (isNull(empty)) {
//     empty
// }

// isNull(zero)
