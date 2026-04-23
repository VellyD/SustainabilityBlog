import "./formData.css";

import * as authService from "../../services/authService";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/authContext";

export const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuthContext();

  let onSubmitHandler = (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);
    let email = formData.get("email");
    let password = formData.get("password");

    authService
      .login({ email, password })
      .then((result) => {
        login(result);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <form id="login-form" onSubmit={onSubmitHandler}>
          <fieldset>
            <legend>Login</legend>

            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email@domain.com"
              />
            </div>

            <div className="field">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </div>

            <input className="submit-btn" type="submit" value="Login" />
          </fieldset>
        </form>
      </div>
    </div>
  );
};
