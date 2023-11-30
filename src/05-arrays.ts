interface Obj {
    [key: string] : unknown
}

const numbers = [ 1, 2, 3, 'string', true, {} ];

const strs: (string | number)[] = ['some text', 1234];
const eArr = strs.entries()
console.log(eArr.next().value);

const strs2: Array<string | number> = [];

const strsArr: string[] = []

strsArr.push('only some string')

const carArr: Car[] = []
carArr.push({ wheel: 5, brand: 'Audi', type: 'coupe' })


// Массив массивов (матрица) [[1, 2], [3, 4]]
const arrOfArr: (number | boolean)[][] = [[1, 2], [3, 4]]
arrOfArr.push([5, true])
console.log(arrOfArr);

function printArr(arr: unknown[]): void {
    arr.forEach((el, idx, arr) => {
        console.log(el, idx);
    })
}

printArr(arrOfArr)

// TypeScript уже знает про Interface Car
const newCarArr: Car[] = [{wheel: 3, type: 'Sedan', brand: 'Porshe'}]
