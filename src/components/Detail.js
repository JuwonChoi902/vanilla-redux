import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

function Detail({ toDos }) {
  const id = useParams().id;
  const thisToDo = toDos.find((todo) => todo.id === Number(id));
  console.log(thisToDo.text);

  return (
    <>
      <h1>{thisToDo.text}</h1>
      <h5>Create at : {thisToDo.id} </h5>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  return { toDos: state };
}

export default connect(mapStateToProps)(Detail);
