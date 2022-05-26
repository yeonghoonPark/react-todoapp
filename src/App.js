import './App.css';
import { useState } from 'react';

function OutputTodo(props) {
  return (
    <section className="output-todo">
      {props.todoList.map((item, index) => {
        return (
          <OutputTodoList item={item} key={index} />
        )
      })}
    </section>
  )
}

function OutputTodoList(props) {
  return (
    <div className="container output-todo-list">
      <h3 className="title">A thing to do : {props.item}</h3>
      <button>Delete</button>
      <button>Complete</button>
    </div>
  )
}

function App() {
  let [inputValue, setInputValue] = useState('');
  let [todoList, setTodoList] = useState([]);

  function addItem() {
    setTodoList([...todoList, inputValue]);
  }

  return (
    <div className="App">

      {/* WRAP */}
      <div className="wrap">

        {/* HEADER */}
        <header className="header">
          <div className="container">
            <h1 className="title">Today's To-do List</h1>
          </div>
        </header>

        {/* INSERT-TODO */}
        <section className="insert-todo">
          <div className="container">
            <form>
              <label>
                <h2 className="title">Write down What u have to do Today</h2>
              </label>
              <br />
              <input type="text" value={inputValue} onChange={(event) => {
                setInputValue(event.target.value);
              }} />
              <button onClick={addItem}>Insert</button>
            </form>


          </div>
        </section>

        {/* OUTPUT-TODO */}
        <OutputTodo todoList={todoList} />

        {/* FOOTER */}
        <footer className="footer">
          <div className="container">
            <address>Copyright by yeonghoon-Park</address>
          </div>
        </footer>

      </div>

    </div>
  );
}

export default App;
