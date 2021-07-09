import Form from "./Form";
import Todo from "./Todo";
import { useReducer } from "react";

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

  const reducer = (state, action) => {
    switch (action.type) {
      case "addTodo":
        return {
          text: "",
          todos: action.payload,
        };
      case "setText":
        return {
          ...state,
          text: action.payload,
        };
      default:
        return state;
    }
  };

  const [data, dispatch] = useReducer(reducer, {
    todos: todosDefault,
    text: "",
  });

  const handleAddTodo = (value) => {
    dispatch({
      type: "addTodo",
      payload: value,
    });
  };

  const hadleSetText = (value) => {
    dispatch({
      type: "setText",
      payload: value,
    });
  };

  return (
    <>
      <Form
        text={data.text}
        handleAddTodo={handleAddTodo}
        hadleSetText={hadleSetText}
        todos={data.todos}
      />
      <div className="todos">
        {data.todos.map((todo, i) => {
          const todoClass = `todo ${todo.favorite ? "selected" : ""}`;
          return (
            <Todo
              i={i}
              todoClass={todoClass}
              todo={todo}
              todos={data.todos}
              handleAddTodo={handleAddTodo}
            />
          );
        })}
      </div>
    </>
  );
}

export default Todos;
