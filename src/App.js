import logo from './logo.svg';
import './App.css';
import Board from './components/board.js'

function App() {

// app component
  return (
    <div className="App">
      {/* <h1 className="title">Chess Game</h1> */}
      <div className="board">
        <Board/>
      </div>
    </div>
  );
}

export default App;
