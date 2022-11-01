import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const count = useSelector((state) => state.counter.count);
  return (
    <div>
      count: {count}
      <Counter></Counter>
    </div>
  );
}

export default App;
