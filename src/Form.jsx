function Form({todos, text, setText, setTodos}) {
  const addTodo = () => {
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].text.toUpperCase() === text.toUpperCase()) {
        alert("Такая задача уже существует");
        console.log(21);
        return;
      }
    }
    setTodos([{ text: text, favorite: false }, ...todos]);
    setText("");
  };
  return (
    <div className="form">
      <input
        type="text"
        placeholder="Inter to do text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
}

export default Form;
