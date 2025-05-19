import type { TodoListProps } from "../types"
import { Todo } from "./Todo"

export const Todos = ({ todos, onRemoveTodo }: TodoListProps) => {
    return (
        <ul className="todo-list">
            {todos.map(todo => (
                <li
                    key={todo.id}
                    className={`${todo.completed ? 'completed' : ''}`}>
                    <Todo
                        id={todo.id}
                        title={todo.title}
                        completed={todo.completed}
                        onRemoveTodo={onRemoveTodo}
                    />
                </li>
            ))}
        </ul>
    )
}
