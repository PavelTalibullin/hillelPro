import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const auth = useSelector((state) => state.auth);
  console.log(auth);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch({ type: "Login" });
  };

  return (
    <div>
      <div>
        <NavLink to="/">Main</NavLink>
        <NavLink to="/cart">Cart</NavLink>
      </div>
      {/* <p>{auth}</p> */}
      <button onClick={handleLogin}>Log in</button>
    </div>
  );
};

export default Header;
