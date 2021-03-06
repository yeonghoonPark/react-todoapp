/* 
 * 작성자, 박영훈
 *
 * React를 이용한 To-do List 제작, js코드
 *
 * 마지막 업데이트, 2022년 06월 23일
*/

import './App.css';
import { useState } from 'react';
import OutputTodo from './components/OutputTodo';

const currentTime = () => {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  const clock = document.querySelector('.clock');
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
setInterval(currentTime, 1000);

function App() {

  // useState
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState([]);


  // 'Insert' 클릭시 input에 입력 된 값을 <OutputTodo />로 출력하는 함수
  const addItem = () => {
    if(inputValue === ''){
      alert('Please write down what you to do :)');
    }else{
      setTodoList([...todoList, inputValue]);
      setInputValue('');
    }
  }

  // 'Delete' 클릭시 <OutputTodo /> 제거하는 함수
  const outputTodoListDelete = (event) => {
    const deleteBtn = event.target;
    const outputTodoList = deleteBtn.parentNode;
    outputTodoList.remove();
  }

  // 'Complate' 클릭시 각각의 변수의 className에 active를 부여, CSS변경하는 함수
  const completeStyle = (event) => {
    const completeBtn = event.target;
    const deleteBtn = completeBtn.previousSibling;
    const outputTodoTitle = deleteBtn.previousSibling;
    const completeStyleArray = [completeBtn, deleteBtn, outputTodoTitle];
    completeStyleArray.map((item) => {
      return item.classList.add('active');
    })
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
            <h2 className="title">Write down What u have to do Today</h2>
            <h2 className="clock">00:00:00</h2>
            <br />
            <form id="insert-form" onSubmit={(event) => { event.preventDefault(); }}>
              <input type="text" placeholder="00:00, To-do :)" value={inputValue} onChange={(event) => {
                setInputValue(event.target.value);
              }} />
              <button onClick={addItem}>Insert</button>
            </form>
          </div>
        </section>

        {/* OUTPUT-TODO */}
        <section className="output-todo">
          <div className="container output-todo-list">
            <h3 className="title">06:00, Wake Up</h3>
            <button className="del-btn" onClick={outputTodoListDelete}>Delete</button>
            <button className="com-btn" onClick={completeStyle}>Complete</button>
          </div>
        </section>
        <OutputTodo todoList={todoList} outputTodoListDelete={outputTodoListDelete} completeStyle={completeStyle} />

        {/* FOOTER */}
        <footer className="footer">
          <div className="container">
            <address>
              Copyright by yh-Park, huklmnj2@naver.com
            </address>
          </div>
        </footer>

      </div>

    </div>
  );
}

export default App;
