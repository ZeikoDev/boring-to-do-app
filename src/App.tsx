import { useState } from "react"
import { Todos } from "./components/Todos"
import type { Todo } from "./types"

const mockData = [
  {
    id: 1,
    title: 'Ts/js course',
    completed: true,
  },
  {
    id: 2,
    title: 'Sent application',
    completed: false,
  },
  {
    id: 3,
    title: 'Develop DK',
    completed: false,
  },
]

const App = () => {
  const [todos, setTodos] = useState(mockData)

  const handleDelete = (id: number) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  return (
    <div className="todoapp">
      <Todos
        todos={todos}
        onRemoveTodo={handleDelete}
      />
    </div>
  )
}

export default App
