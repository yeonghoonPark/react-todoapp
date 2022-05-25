import './App.css';

// 1. 내가 입력할 input상자가 있어야하고 버튼을 누르면 글자가 출력되야 함
// 2. 삭제버튼을 누르면 버튼이 사라져야한다.

function App() {
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
              <label htmlFor="todo">
                <h2 className="title">Write down What u have to do Today</h2>
              </label>
              <br />
              <input type="text" name="" id="todo" />
              <button>Insert</button>
            </form>
          </div>
        </section>

        {/* OUTPUT-TODO */}
        <section className="output-todo">
          <div className="container">
            <h3 className="title">A thing to do : Wake up</h3>
            <button>Delete</button>
            <button>Complete</button>
          </div>
        </section>


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
