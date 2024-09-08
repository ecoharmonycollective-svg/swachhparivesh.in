import "./styles/error.css";
import { Link } from "react-router-dom";
import ErrorFarmer from "../assets/error.png";
export default function ErrorPage() {
  return (
    <div className="error__container nav__margin cent">
      <div className="error__item col cent">
        <img className="error__img" src={ErrorFarmer} alt="404" />
        <div className="error__content">
          <h2 className="error-header">Page Not Found</h2>
          <p>
            The page you are looking for might have been removed, had its name
            changed or is temporarily unavailable.
          </p>
        </div>
        <Link to="/" className="goHome">
          Go to Home
        </Link>
      </div>
    </div>
  );
}
