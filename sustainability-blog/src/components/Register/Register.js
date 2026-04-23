import "./registerFormData.css";

import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/authContext";
import * as authService from "../../services/authService";

export const Register = () => {
  let navigate = useNavigate();
  const { login } = useAuthContext();

  let onRegisterHandler = (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);
    let email = formData.get("email");
    let password = formData.get("password");
    let repassword = formData.get("repassword");

    if (password === repassword) {
      authService
        .register({ email, password })
        .then((result) => {
          login(result);
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <form id="login-form" onSubmit={onRegisterHandler}>
          <fieldset>
            <legend>Register</legend>

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

            <div className="field">
              <label htmlFor="repassword">Repeat Password</label>
              <input
                type="password"
                name="repassword"
                id="repassword"
                placeholder="Repeat Password"
              />
            </div>

            <input className="submit-btn" type="submit" value="Register" />
          </fieldset>
        </form>
      </div>
    </div>
  );
};
