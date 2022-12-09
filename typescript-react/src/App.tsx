import { useState } from "react"
import NewTodo from "./components/NewTodo"
import TodoList from "./components/TodoList"
import { Todo } from "./todo.model"

function App(): JSX.Element {
  const [todos, setTodos] = useState<Todo[]>([])

  function todoAddHandler(text: string) {
    setTodos(prevTodos => [...prevTodos, { id: Math.random().toString(), text }])
  }

  function todoDeleteHandler(todoId: string) {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId)
    })
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  )
}

export default App
