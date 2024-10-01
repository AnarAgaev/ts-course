// Record
type RecordSignature = Record<string, number>

type Brands = 'Apple' | 'IBM' | 'DELL' | 'Lenovo' | 'HP' | 'Huawei'
type BrandNames = Record<Brands, Record<string, string | number>>

const recordEx: BrandNames = {
    Apple: {
        id: 1
    }
}


interface Todo {
    id: string | number
    title: string
    description: string
    completed: boolean
    createdAt: Date
}

// Pick
type PickTodoTypeEx = Pick<Todo, 'id' | 'title' | 'completed'>
const partOfTodoByPick: PickTodoTypeEx = {
    id: 1,
    title: 'Some caption',
    completed: false
}

// Omit
type OmitTodoTypeEx = Omit<Todo, 'title' | 'description' | 'completed'>
const partOfTodoByOmit: OmitTodoTypeEx = {
    id: 1,
    createdAt: new Date(Date.now())
}

export {}