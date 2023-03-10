import { useState, createContext} from "react";
import Widget from "./components/Widget";
import "./App.css";

//   1 Create Context
export const Context = createContext()

const App = () => {
  const [user, setUser] = useState({ name: "Username" });

  return (
    <div className="App">
		<Context.Provider value={user}>

		<Widget/>

		</Context.Provider>
    </div>
  );
};

export default App;
