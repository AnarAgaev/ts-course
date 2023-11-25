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

logo('User',  123);

function crash(): never {
    throw new Error('crash')
}

function average(...nums: number[]): number {
    const sum = nums.reduce((current, total) => current + total, 0);

    return sum / nums.length;
}
