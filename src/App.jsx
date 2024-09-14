import React, { useState, useReducer } from "react";

// Reducer 3가지 항목

// reducer - state를 업데이트하는 역할(은행)
// dispatch - state 업데이트를 위한 요구
// action - 요구의 내용

const App = () => {
  const [number, setNumber] = useState(0);

  const reducer = (state, action) => {
    console.log(action.payload);
    switch (action.type) {
      case "deposit":
        return state + action.payload;
      case "withdraw":
        return state - action.payload;
      default:
        return state;
    }
  };

  const [money, dispatch] = useReducer(reducer, 0);

  return (
    <div className="main">
      <h2>useReducer 은행에 오신것을 환영합니다</h2>
      <input
        type="number"
        step={1000}
        min={0}
        onChange={(e) => setNumber(e.target.value)}
      />
      <p>잔고: {money}원</p>
      <button onClick={() => dispatch({ type: "deposit", payload: +number })}>
        입금
      </button>
      <button onClick={() => dispatch({ type: "withdraw", payload: +number })}>
        출금
      </button>
    </div>
  );
};

export default App;
