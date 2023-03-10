import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <div>Not Found page</div>
      <p>
        Please go to <Link to="/"> main page</Link>
      </p>
    </div>
  );
};

export default NotFound;
