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
      {/* <li>
        <Link to="/my-posts">My Posts</Link>
      </li> */}
      <li>
        <Link to="/logout">Logout</Link>
      </li>
      <li>
        <p>Welcome, {user.email}</p>
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
        <div className="slogan">
          The sustainable blog. Share your experience!
        </div>
      </div>
      <div className="menu_block">
        <div className="container_12">
          <nav className="horizontal-nav full-width horizontalNav-notprocessed">
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
