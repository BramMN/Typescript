interface Props {
  items: { id: string, text: string }[]
}

function TodoList(props: Props): JSX.Element {
  return (
    <ul>
      {props.items.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  )
}

export default TodoList
