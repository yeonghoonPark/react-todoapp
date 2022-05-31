import React from "react";

// <OutputTodo />에 전달하는 component
function OutputTodoList(props) {
  return (
    <div className="container output-todo-list">
      <h3 className="title">{props.item}</h3>
      <button className="del-btn" onClick={props.outputTodoListDelete}>Delete</button>
      <button className="com-btn" onClick={props.completeStyle}>Complete</button>
    </div>
  )
}

export default OutputTodoList;