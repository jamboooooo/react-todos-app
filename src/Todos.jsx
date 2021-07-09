import Form from "./Form";
import { useState } from "react";

function Todos() {
  const todosDefault = [
    {
      text: "Купить хлеб",
      favorite: false,
    },
    {
      text: "Посетить интукод",
      favorite: false,
    },
    {
      text: "Выучить JS",
      favorite: false,
    },
    {
      text: "Выиграть в фифу у Ахьмада",
      favorite: true,
    },
  ];

  const [todos, setTodos] = useState(todosDefault);
  const [text, setText] = useState("");
  const favoriteValue = (id) => {
    const data = todos.map((todo, i) => {
      if (i === id) {
        todo.favorite = !todo.favorite;
        return todo;
      }
      return todo;
    });
    setTodos(data);
  };

  const deleteTodo = (id) => {
    const data = todos.filter((todo, i) => {
      if (i !== id) {
        return todo;
      }
      return null;
    });

    setTodos(data);
  };

  return (
    <>
      <Form text={text} setText={setText} setTodos={setTodos} todos={todos} />
      <div className="todos">
        {todos.map((todo, i) => {
          const todoClass = `todo ${todo.favorite ? "selected" : ""}`;

          return (
            <div key={i} className={todoClass}>
              <div className="favorite" onClick={() => favoriteValue(i)}>
                ★
              </div>
              <div className="todo-text">{todo.text}</div>
              <div className="delete-todo">
                <button onClick={() => deleteTodo(i)}>X</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Todos;
