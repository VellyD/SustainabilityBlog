const baseUrl = "https://sustainability-backend-l7wt.onrender.com";

export const getAllPosts = () => {
  return fetch(`${baseUrl}/posts`).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw res;
    }
  });
};

export const createPost = async (postData, token) => {
  let response = await fetch(`${baseUrl}/posts`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-authorization": token,
    },
    body: JSON.stringify({ ...postData, likes: [] }),
  });

  let result = await response.json();

  return result;
};

export const getOne = async (id) => {
  let response = await fetch(`${baseUrl}/posts/${id}`);

  let result = await response.json();

  return result;
};

export const editPost = (postId, postData, token) => {
  return fetch(`${baseUrl}/posts/${postId}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      "X-authorization": token,
    },
    body: JSON.stringify(postData),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw res;
    }
  });
};

export const removePost = async (postId, token) => {
  let response = await fetch(`${baseUrl}/posts/${postId}`, {
    method: "DELETE",
    headers: {
      "X-Authorization": token,
    },
  });

  let result = await response.json();

  return result;
};

//ToDo update - edit operation
