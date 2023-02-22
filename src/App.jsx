import { useState } from "react";
import Button from "./components/Button/Button";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <div>
        <Button onClick={increment}>Increment</Button>
      </div>
      <div>
        <Button onClick={decrement}>Decrement</Button>
      </div>
    </div>
  );
};

export default App;
