import React, { FormEvent, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import UseEffectExample from "./useEffect";
import StudentManagement from "./studentManager";

function App() {
  const [count, setCount] = useState<number>(0);
  const [valueInpput, setValueInput] = useState<string>("");
  const [tasks, setTasks] = useState<string[]>([]);
  console.log(valueInpput);

  const handleChangeCount = (action: string) => {
    if (action == "up") {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };
  const handleAddValue = () => {
    setTasks([...tasks, valueInpput]);
    setValueInput("");
    console.log(tasks);
  };
  const handleDeleteValue = (index: number) => {
    setTasks(tasks.filter((item, i) => i !== index));
  };

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => handleChangeCount("up")}>up</button>
      <hr />
      <br />

      <input
        type="text"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setValueInput(event.target.value)
        }
        value={valueInpput}
      />
      <button onClick={handleAddValue}>add</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleDeleteValue(index)}>delete</button>
          </li>
        ))}
      </ul>
      <UseEffectExample />
      <hr />
      <StudentManagement/>
    </div>
  );
}
export default App;
