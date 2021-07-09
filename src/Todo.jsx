function Todo({i,todoClass, todo, todos, handleAddTodo}) {
    const favoriteValue = (id) => {
        const data = todos.map((todo, i) => {
          if (i === id) {
            todo.favorite = !todo.favorite;
            return todo;
          }
          return todo;
        });
        handleAddTodo(data);
      };
    
      const deleteTodo = (id) => {
        const data = todos.filter((todo, i) => {
          if (i !== id) {
            return todo;
          }
          return null;
        });
    
        handleAddTodo(data);
      };
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