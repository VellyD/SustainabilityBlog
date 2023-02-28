const baseUrl = "https://sustainability-blog.herokuapp.com/data";

export const getAllPosts = () => {
  return fetch(`${baseUrl}/eco`).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw res;
    }
  });
};

export const createPost = async (postData, token) => {
  let response = await fetch(`${baseUrl}/eco`, {
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
  let response = await fetch(`${baseUrl}/eco/${id}`);

  let result = await response.json();

  return result;
};

export const editPost = (postId, postData, token) => {
  return fetch(`${baseUrl}/eco/${postId}`, {
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
  let response = await fetch(`${baseUrl}/eco/${postId}`, {
    method: "DELETE",
    headers: {
      "X-Authorization": token,
    },
  });

  let result = await response.json();

  return result;
};

//ToDo update - edit operation
