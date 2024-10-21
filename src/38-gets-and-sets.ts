// Getters and setters at the TS. At the TypeScript getters and setters are look like a usual JavaScript gets and sets.

export class Rectangle {
    constructor (public width: number, public height: number) {}

    get area(): number {
        return this.width * this.height
    }
}

const customRectangle = new Rectangle(20, 12)
customRectangle.area // At now we can get area like a property (not like a method) - customRectangle.area()


export class Car {
    constructor(public color: string, private _maxSpeed: number) {}

    get speed(): number {
        return this._maxSpeed
    }

    set speed(speed: number) {
        if (speed <= 0) return
        this._maxSpeed = speed
    }
}

const customCar = new Car('blue', 220)
customCar.speed = 0