export type Todo = {
    id: number
    title: string
    completed: boolean
}

export interface TodoListProps {
    todos: Todo[]
}