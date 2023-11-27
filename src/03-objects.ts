interface Car {
    wheel: number
    brand: string
    type: string

    isNew?: boolean
    name?: string

    [key: string]: unknown
}

const firstCar: Car = {
    wheel: 4,
    brand: 'BMW',
    type: 'Sedan',
    name: '5 series'
}

const secondCar: Car = {
    wheel: 3,
    brand: 'Audi',
    type: 'Cross',
    isNew: true,
}
