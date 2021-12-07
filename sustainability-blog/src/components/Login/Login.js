import "./formData.css";
import * as authService from '../../services/authService'

export const Login = () => {
  let onSubmitHandler = (e) => {
    e.preventDefault();


  };
  return (
    <div className="content">
      <div className="container_12">
        <div className="content">
          <section id="login-page" className="login">
            <form id="login-form" onSubmit={onSubmitHandler}>
              <fieldset>
                <legend>Login Form</legend>
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
                <input className="button submit" type="submit" value="Login" />
              </fieldset>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};
