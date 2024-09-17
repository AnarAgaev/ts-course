import { average } from './02-functions'

// Ранее уже использовали для получения типов примитивов
console.log(typeof 'string') // string

// Можно получать тип значения переменной
let str = 'Hello TypeScript'
type StrType = typeof str

// Можно получить тип функции
type AverageFnType = typeof average
const max: AverageFnType = (...numbers) => Math.max(...numbers)
max(1, 2, 3)

// ReturnType - позволяет получить тип возвращаемого значения
type ReturnAverageFnType = ReturnType<typeof average>  // type ReturnAverageFnType = number
// type ReturnAverageFnType = ReturnType<AverageFnType>
