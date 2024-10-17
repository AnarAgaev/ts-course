/**
 * We can create abstract Classes or Properties
 * Using Abstracts, fire the TS Error, when we try create the instance from the Abstraction
 */

abstract class Vehicle {
    abstract color: string // property

    abstract drive(speed: number): void // method

    public stop() {
        console.log('Stopped')
    }
}

export default class Car extends Vehicle {
    constructor(public color: string) {
        super()
        this.color = color
    }

    drive(speed: number): void {
        console.log('Let us with speed', speed.toFixed())
    }
}


const v1 = new Vehicle() // We can't make instance because Vehicle is abstract