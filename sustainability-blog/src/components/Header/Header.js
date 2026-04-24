import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/authContext";
import "./header.css";

export const Header = () => {
  const { user } = useAuthContext();

  const userView = (
    <>
      <li>
        <Link to="/products/add" className="add-swap-btn">
          + Add Swap
        </Link>
      </li>
      <li className="profile-menu">
        <span className="welcome-text">{user.email.split("@")[0]} ▾</span>
        <ul className="dropdown-menu">
          <li>
            <span className="dropdown-email">{user.email}</span>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </li>
    </>
  );

  const guestView = (
    <>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
    </>
  );

  return (
    <header>
      <div className="container_12 header-inner">
        {/* Add Swap button — top right */}
        {user.email && (
          <Link to="/products/add" className="add-swap-btn">
            + Add Swap
          </Link>
        )}
        <div className="slogan-header">Sustainable Swaps</div>
        <div className="slogan-message">
          No big changes — just better everyday choices.
        </div>
      </div>
      {/* rest stays same */}
    </header>
  );
};
