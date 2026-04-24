import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/authContext";
import { useState } from "react";
import "./header.css";

export const Header = () => {
  const { user } = useAuthContext();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const userView = (
    <>
      {/* Profile */}
      <li className="profile-menu">
        <button onClick={toggleMenu} className="welcome-text">
          {user.email.split("@")[0]} ▾
        </button>

        {isOpen && (
          <ul className="dropdown-menu">
            <li>
              <span className="dropdown-email">{user.email}</span>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
        )}
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
          No big changes — just better everyday choices.
        </div>
      </div>

      <div className="menu_block">
        <div className="container_12 nav-wrapper">
          {/* 🔼 Add Swap moved OUTSIDE ul */}
          {user.email && (
            <div className="add-swap-container">
              <Link to="/products/add" className="add-swap-btn">
                + Add Swap
              </Link>
            </div>
          )}

          <nav className="horizontal-nav full-width">
            <ul className="sf-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Swaps</Link>
              </li>

              {user.email ? userView : guestView}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
