import React from "react";
import OutputTodoList from "./OutputTodoList";

function OutputTodo(props) {
  return (
    <section className="output-todo">
      {props.todoList.map((item, index) => {
        return (
          <OutputTodoList
            key={index}
            item={item}
            outputTodoListDelete={props.outputTodoListDelete}
            completeStyle={props.completeStyle} />
        )
      })}
    </section>
  )
}

export default OutputTodo;