// Readonly
type Todo = {
    readonly id: number | string
    title: string,
    description?: string
    completed: boolean
    created: Date
}

type ReadonlyTodo = Readonly<Todo> // Делает все поля Только для чтения

type PartialTodo = Partial<Todo> // Делает все поля необязательными

type RequiredTodo = Required<Todo> // Делает все поля обязательными

export {}