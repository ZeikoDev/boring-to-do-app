import { useState } from "react"
import { Todos } from "./components/Todos"

const mockData = [
  {
    id: 1,
    title: 'todo 1',
    completed: false,
  },
  {
    id: 2,
    title: 'todo 2',
    completed: true,
  },
  {
    id: 3,
    title: 'todo 3',
    completed: false,
  },
]

const App = () => {
  const [todos,] = useState(mockData)
  return (
    <Todos todos={todos} />
  )
}

export default App
