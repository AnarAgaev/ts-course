// First exercise
function printPoint(point: {x: string, y: string}): void {
    console.log(`Coordinate of the point is x: ${point.x} and y ${point.y}`);
}

const firstObj = {
    x: '1',
    y: '2'
}
printPoint(firstObj);

const lastObj = {
    x: '1',
    y: '2',
    z: 3
}
printPoint(lastObj)

// Second exercise
function printName(user: {
    firstName: string
    lastName?: string
}): void {
    console.log('Hello', user.firstName.toUpperCase());

    if (user.lastName) {
        console.log('Nice to meet you Mr.', user.lastName.toUpperCase());
    }
}
printName({firstName: 'Horem'})
printName({firstName: 'Ann', lastName: 'Chorenina'})
