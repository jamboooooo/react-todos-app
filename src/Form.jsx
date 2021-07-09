function Form({ todos, text, handleAddTodo, hadleSetText }) {
  const addTodo = () => {
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].text.toUpperCase() === text.toUpperCase()) {
        alert("Такая задача уже существует");
        console.log(21);
        return;
      }
    }
    handleAddTodo([{ text: text, favorite: false }, ...todos]);
  };
  return (
    <div className="form">
      <input
        type="text"
        placeholder="Inter to do text..."
        value={text}
        onChange={(e) => hadleSetText(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
}

export default Form;
