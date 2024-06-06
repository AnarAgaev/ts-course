function sum(a: number, b: number): number {
    return a + b;
}

const arrowSum = (a: number, b:number): number => a + b;

const functionSum = function(a: number, b: number): number {
    return a + b;
}

sum(2, 3);

// If there's an optional parameter, use question mark before the colon
function logo(name: string, userId?: number): void {
    console.log('Hello', name, 'with ID', userId || 'anonym');
}

// logo('User',  123);

function crash(): never {
    throw new Error('crash')
}

function average(...nums: number[]): number {
    const sum = nums.reduce((current, total) => current + total, 0);

    return sum / nums.length;
}

// Practice of the function typing
function slice(str: string, start: number, end?: number): string {

    let accumulator: string = '';

    end = end || str.length + 1;

    for (let i = 0; i < str.length; i++) {
        if (i >= start - 1 && i < end - 1) {
            accumulator += str[i];
        }
    }

    return accumulator;
}

console.log(slice('accumulator', 3));


// Function from the teacher
function sliceTwo(str: string, start: number, end?: number): string {
    let newStr: string = '';

    let lastIndex: number;

    if (end) {
        lastIndex = end > str.length ? str.length : end;
    } else {
        lastIndex = str.length;
    }

    for (let i: number = start; i < lastIndex; i++) {
        newStr += str[i];
    }

    return newStr;
}

export default sliceTwo
