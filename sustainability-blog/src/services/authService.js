const baseUrl = "https://sustainability-blog.herokuapp.com";

export const register = ({ email, password }) => {
  return fetch(`${baseUrl}/users/register`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => res.json());
};

export const login = ({ email, password }) => {
  return fetch(`${baseUrl}/users/login`, {
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
  return fetch(`${baseUrl}/users/logout`, {
    headers: {
      "X-Authorization": accessToken,
    },
  });
};
