/**
 * We have three modifiers for methods and properties
 * public - can use its at all places (default value)
 * privet - can use only into the this class
 * protected - can use only into the extends class, but can't use into the instants
 */


export class Vehicle {
    public drive(speed: number): void {
        console.log('Let us go with speed', speed.toFixed())
        this.log(speed)
    }

    public stop(): void {
        console.log('Let us stop')
    }

    private log(speed: number): void {
        console.log('Vehicle has changed speed to', speed)
    }

    protected alternativeLog(text: string) {
        console.log(text.toUpperCase())
    }
}

class Car extends Vehicle {
    public changeSpeed(speed: number) {
        this.drive(speed)
        this.alternativeLog('Speed was changed')
    }
}

const car1 = new Car()
car1.drive(60)
car1.stop()
car1.log(70) // Error, because log is privet method