interface ICar {
    go(speed: number): void,
    maxSpeed?: number
}

export class Car implements ICar {
    go(speed: number) {
        console.log(`let's go with speed ${speed.toFixed(2)}`)
    }

    stop() {
        console.log(`let's stop`)
    }
}

const car = new Car
car.go(60)
car.maxSpeed = 200 // We can't you options property without adding its into the parent class

const isCarConstFromCarClass = car instanceof Car