import "./registerFormData.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import * as authService from "../../services/authService";

export const Register = () => {
  let navigate = useNavigate();
  const { login } = useContext(AuthContext);

  let onRegisterHandler = (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);
    let email = formData.get("email");
    let nikname = formData.get("nikname");
    let password = formData.get("password");
    let repassword = formData.get("repassword");

    if (password === repassword) {
      authService
        .register({ email, password, nikname })
        .then((result) => {
          login(result, nikname);
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div className="content">
      <div className="container_12">
        <div className="content">
          <section id="login-page" className="login">
            <form id="login-form" onSubmit={onRegisterHandler}>
              <fieldset>
                <legend>Register Form</legend>
                <p className="field">
                  <label htmlFor="email">Email </label>
                  <span className="input">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </span>
                </p>
                <p className="field">
                  <label htmlFor="nikname">Nikname </label>
                  <span className="input">
                    <input
                      type="text"
                      name="nikname"
                      id="nikname"
                      placeholder="nikname"
                    />
                  </span>
                </p>
                <p className="field">
                  <label htmlFor="password">Password </label>
                  <span className="input">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                    />
                  </span>
                </p>
                <p className="field">
                  <label htmlFor="password">Repeat Password </label>
                  <span className="input">
                    <input
                      type="password"
                      name="repassword"
                      id="repassword"
                      placeholder="Repeat Password"
                    />
                  </span>
                </p>
                <input
                  className="button submit"
                  type="submit"
                  value="Register"
                />
              </fieldset>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};
