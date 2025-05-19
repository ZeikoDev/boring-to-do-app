import type { Todo as TodoType } from '../types'

interface Props extends TodoType {
    onRemoveTodo: (id: number) => void
}

export const Todo = ({ id, title, completed, onRemoveTodo }: Props) => {
    return (
        <div className="view">
            <input
                className="toggle"
                type="checkbox"
                checked={completed}
                onChange={() => { }}
            />
            <label>{title}</label>
            <button className="destroy" onClick={() => onRemoveTodo(id)} />
        </div>
    )
}
