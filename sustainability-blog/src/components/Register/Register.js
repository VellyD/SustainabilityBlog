import './registerFormData.css'

export const Register = () => {
  return (
    <div className="content">
      <div className="container_12">
        <div className="content">
          <section id="login-page" className="login">
            <form id="login-form">
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
                <input className="button submit" type="submit" value="Register" />
              </fieldset>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};
