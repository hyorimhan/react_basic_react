import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  function plusBtn() {
    setCount(count + 1);
  }

  function minusBtn() {
    setCount(count - 1);
  }

  function resetBtn() {
    setCount(0);
  }
  return (
    <>
      <div className="container">
        <div className="count">{count}</div>
      </div>
      <div className="container">
        <div className="btn">
          <button onClick={plusBtn} className="plus">
            +
          </button>
          <button onClick={minusBtn} className="minus">
            -
          </button>
          <button onClick={resetBtn} className="reset">
            reset
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
