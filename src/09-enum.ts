enum ShapeKind {
    Circle, // 0
    Square // 1
}

const myShape = ShapeKind.Circle;

interface Circle {
    kind: ShapeKind.Circle
    radius: number
}

interface Square {
    kind: ShapeKind.Square
    sideLenght: number
}

const circleOne: Circle = {
    kind: ShapeKind.Circle,
    radius: 7
}

enum StatusCode {
    ERROR = 500,
    NOT_FOUND = 404,
    NOT_AUTH = 403
}

enum Grades {
    Junior = 'junior',
    Middle = 'middle',
    Sinior = 'sinior'
}

interface Dev {
    level: Grades.Junior,
    login: string,
    skills: string[]
}

const developer: Devoloper = {
    level: 'junior',
    login: 'admin',
    skills: ['HTML', 'SCSS', 'JS', 'GIT']
}

function unGrade(user: {level: Grades}) {
    if (user.level === Grades.Junior) {
        user.level = Grades.Middle
    } else if (user.level === Grades.Middle) {
        user.level = Grades.Sinior
    }
}

const lead: Devoloper[] = [{
    level: 'junior',
    login: 'admin',
    skills: ['HTML', 'SCSS', 'JS', 'GIT']
}]