export class Temperature {
    constructor(public celsius: number) {}

    public get fahrenheit(): number {
        return this.celsius * 1.8 + 32;
    }

    public set fahrenheit(value: number) {
        this.celsius = (value - 32) / 1.8;
    }

    public static fromFahrenheit(value: number): Temperature {
        return new Temperature(Math.round((value - 32) / 1.8));
    }
}

const defaultTemperatureInstance = new Temperature(33)
const fahrenheitTemperatureInstance = Temperature.fromFahrenheit(77)

defaultTemperatureInstance.fahrenheit = 177
fahrenheitTemperatureInstance.celsius