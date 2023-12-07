type Level = 'junior' | 'middle' | 'senior'

interface Devoloper {
    login: string
    skills: string[]
    level: Level
}

// create a function that change level of incoming developer
function gradeDeveloper(user: { level: Level }, newLevel: Level | undefined): Level {

    if (newLevel) {
        user.level = newLevel
        return user.level
    }

    switch (user.level) {
        case 'junior':
            user.level = 'middle'
            break;
        case 'middle':
            user.level = 'senior'
            break;
    }

    return user.level
}

const dev: Devoloper = {
    level: 'junior',
    login: 'user',
    skills: ['HTML', 'CSS', 'JS']
}

gradeDeveloper(dev, 'middle')