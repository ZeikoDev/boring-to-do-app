export type Todo = {
    id: number
    title: string
    completed: boolean
}

export interface TodoListProps {
    todos: Todo[]
    onRemoveTodo: (id: number) => void
}


