const baseUrl = "https://sustainability-backend-l7wt.onrender.com";

export const register = ({ email, password }) => {
  return fetch(`${baseUrl}/auth/register`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => res.json());
};

export const login = ({ email, password }) => {
  return fetch(`${baseUrl}/auth/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  }).then((res) => res.json());
};

export const logout = (accessToken) => {
  return fetch(`${baseUrl}/auth/logout`, {
    headers: {
      "X-Authorization": accessToken,
    },
  });
};
