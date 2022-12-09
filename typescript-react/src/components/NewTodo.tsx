import React, { useRef } from "react"

interface Props {
  onAddTodo: (todoText: string) => void
}

function NewTodo(props: Props): JSX.Element {
  const textInputRef = useRef<HTMLInputElement>(null)

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault()

    const enteredText = textInputRef.current!.value
    props.onAddTodo(enteredText)
  }

  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  )
}

export default NewTodo
