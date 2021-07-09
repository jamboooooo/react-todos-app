function Form(props) {
  const addTodo = () => {
    for (let i = 0; i < props.todos.length; i++) {
      if (props.todos[i].text === props.text) {
        alert("Такая задача уже существует");
        console.log(21);
        return;
      }
    }
    props.setTodos([{ text: props.text, favorite: false }, ...props.todos]);
    props.setText("");
  };
  return (
    <div className="form">
      <input
        type="text"
        placeholder="Inter to do text..."
        value={props.text}
        onChange={(e) => props.setText(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
}

export default Form;
