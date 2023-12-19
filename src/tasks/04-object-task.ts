interface User {
    login: string
    email: string
    password: string
    isOnline: boolean
    lastVisited: Date
}

interface Admin extends User {
    role: string
}

const testUser: User = {
    login: 'qerty',
    email: 'example@mail.com',
    password: '000',
    isOnline: false,
    lastVisited: new Date(2023, 6, 2)
}

const testAdmin: Admin = {
    login: 'qerty',
    email: 'example@mail.com',
    password: '000',
    isOnline: false,
    lastVisited: new Date(2023, 6, 2),
    role: 'admin'
}

export function login(user: {login: string, password: string}) {
    if (user.login && user.login !== '') return

    if (user.login && user.login !== '') {
        console.log('Hellow user')
    }
}

login(testUser)
login(testAdmin)