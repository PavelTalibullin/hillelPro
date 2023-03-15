import { createStore, combineReducers } from "redux";
import { useDispatch, useSelector } from "react-redux";

const initialStateCounter = { count: 0 };

const counterReduser = (state = initialStateCounter, action) => {
  const { type } = action;

  switch (type) {
    case "Increment":
      return { count: state.count + 1 };
    case "Decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const initialStateAuth = { isLogin: false };

const authReduser = (state = initialStateAuth, action) => {
  switch (action.type) {
    case "Login":
      return { isLogin: true };
    case "Logout":
      return { isLogin: false };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  counter: counterReduser,
  auth: authReduser,
});

export const store = createStore(rootReducer);

const ReduxCounter = () => {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.counter);
  console.log("state", count);

  const handleIncrement = () => {
    dispatch({ type: "Increment" });
  };
  const handleDecrement = () => {
    dispatch({ type: "Decrement" });
  };

  return (
    <div>
      <h1>Count: {count.count}</h1>

      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default ReduxCounter;
