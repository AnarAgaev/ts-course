function someFn(args: { a: number, b: string}, someOtherParam: number) {
    return args.a + args.b
}

type SomeFnReturnType = ReturnType<typeof someFn> // Получить тип возвращаемый функцией
type SomeFnParametersType = Parameters<typeof someFn> // Получить тип параметров функции

type TypeOfTheParametersErrorConstructor = ConstructorParameters<ErrorConstructor> // Получить типы параметров класса

// Example of the Constructor parameters

class SomeClass {
    constructor(
        id: string | number,
        title: string,
        created: Date
    ) {}
}

type SomeClassConstructorParametersTypes = ConstructorParameters<typeof SomeClass>


// И Parameters и ConstructorParameters возвращают кортеж с параметрами и их типами






























export {}