import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/authContext";
import "./header.css";

export const Header = () => {
  const { user } = useAuthContext();
  const userView = (
    <>
      <li>
        <Link to="/add-products">Add Products</Link>
      </li>
      <li>
        <Link to="/logout">Logout</Link>
      </li>
      <li>
        <span className="welcome-text">{user.email} (Planet Hero!)</span>
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
      <div className="container_12">
        <div className="slogan-header">Sustainable Swaps</div>
        <div className="slogan-message">
          No big changes—just better everyday choices.
        </div>
      </div>
      <div className="menu_block">
        <div className="container_12">
          <nav className="horizontal-nav full-width">
            <ul className="sf-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              {user.email ? userView : guestView}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
