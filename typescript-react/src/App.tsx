import { useState } from "react"
import NewTodo from "./components/NewTodo"
import TodoList from "./components/TodoList"
import { Todo } from "./todo.model"

function App(): JSX.Element {
  const [todos, setTodos] = useState<Todo[]>([])

  function todoAddHandler(text: string) {
    setTodos(prevTodos => [...prevTodos, { id: Math.random().toString(), text }])
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} />
    </div>
  )
}

export default App
