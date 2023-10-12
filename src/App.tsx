import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const couter = useSelector(
    (state: { countReducer: number }) => state.countReducer
  ) as number;
  const [value, setValue] = useState<string>("");
  const todolist = useSelector(
    (state: { todosReducer: string[] }) => state.todosReducer
  ) as string[];
  const color = useSelector(
    (state: { colorBackround: string }) => state.colorBackround
  );
 
  
  return (
    <div className="App" style={{ backgroundColor: color }}>
      <button onClick={() => dispatch({ type: "COLOR",  })}>
        COLOR
      </button>
      <button onClick={() => dispatch({ type: "UP" })}>UP</button>
      <button onClick={() => dispatch({ type: "DOWN" })}>DOWN</button>
      <button onClick={() => dispatch({ type: "CORE" })}>CORE</button>
      <h1>{couter}</h1>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => dispatch({ type: "CREATE", todo: value })}>
        ADD
      </button>
      <ul>
        {todolist.map((todo, i) => (
          <li>
            {todo}
            <button onClick={() => dispatch({ type: "DELETE", index: i })}>
              DELETE
            </button>
            <button
              onClick={() =>
                dispatch({ type: "UPDATE", index: i, todo: value })
              }
            >
              UPDATE
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
