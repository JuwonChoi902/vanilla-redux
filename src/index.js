import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addToDo = (text) => {
  return { text, type: ADD_TODO };
};

const deleteToDo = (id) => {
  return { id, type: DELETE_TODO };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      const newToDo = { id: Date.now(), text: action.text };
      return [newToDo, ...state];
    case DELETE_TODO:
      console.log("delete this!");
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text));
};

const dispatchDeleteToDo = (e) => {
  const id = Number(e.target.parentNode.id);
  store.dispatch(deleteToDo(id));
};

const paintTodo = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "DELETE";
    btn.addEventListener("click", dispatchDeleteToDo);
    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};

store.subscribe(() => console.log(store.getState()));
store.subscribe(paintTodo);

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  if (toDo.length) {
    input.value = "";
    dispatchAddToDo(toDo);
  }
};

form.addEventListener("submit", onSubmit);
