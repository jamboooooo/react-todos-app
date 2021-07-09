function Todo({i,todoClass, todo, favoriteValue, deleteTodo}) {
    return <div key={i} className={todoClass}>
    <div className="favorite" onClick={() => favoriteValue(i)}>
      ★
    </div>
    <div className="todo-text">{todo.text}</div>
    <div className="delete-todo">
      <button onClick={() => deleteTodo(i)}>X</button>
    </div>
  </div>
}

export default Todo