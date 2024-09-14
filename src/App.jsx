import React, { useState, useReducer } from "react";

// Reducer 3가지 항목

// reducer - state를 업데이트하는 역할(은행)
// dispatch - state 업데이트를 위한 요구
// action - 요구의 내용

const App = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "deposit":
        return state + action.payload;
      case "withdraw":
        return state - action.payload;
      default:
        return state;
    }
  };
  const [number, setNumber] = useState(0);
  // 0은 초기값으로 지정되어있음
  const [money, dispatch] = useReducer(reducer, 0);
  return (
    <div className="main">
      <h2>useReducer 은행에 오신것을 환영합니다</h2>
      <p>잔고: {money}원</p>
      <input
        type="number"
        value={number}
        min="0"
        onChange={(e) => setNumber(e.target.value)}
        step="1000"
      />
      <button
        onClick={() => {
          dispatch({ type: "deposit", payload: +number });
        }}
      >
        예금
      </button>
      <button
        onClick={() => {
          dispatch({ type: "withdraw", payload: +number });
        }}
      >
        출금
      </button>
    </div>
  );
};

export default App;
