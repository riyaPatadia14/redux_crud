import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { increment, decrement } from "../redux/action/Action";

const Counter = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  return (
    <div>
      <button onClick={() => dispatch(increment())}>+</button>
      <h2>{data}</h2>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default Counter;
