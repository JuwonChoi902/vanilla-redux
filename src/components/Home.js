import { useState } from "react";
import { connect, useSelector } from "react-redux";
import { add } from "../store";
import ToDo from "./ToDo";

function Home({ toDos, addToDo }) {
  const [text, setText] = useState("");
  const todo = useSelector((state) => state);

  const userInput = (e) => {
    setText(e.target.value);
  };

  const makeList = (e) => {
    e.preventDefault();
    if (text === "") return;
    addToDo(text);
    setText("");
  };

  return (
    <>
      <h1>To Do List</h1>
      <form onSubmit={makeList}>
        <input type="text" value={text} onChange={userInput}></input>
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((todo) => (
          <ToDo key={todo.id} {...todo}></ToDo>
        ))}
      </ul>
    </>
  );
}

function mapStateToProps(state) {
  return {
    toDos: state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addToDo: (text) => dispatch(add(text)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
