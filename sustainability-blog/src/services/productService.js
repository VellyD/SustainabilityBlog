const baseUrl = "http://localhost:3030/data";

export const getAllPosts = async () => {
  let response = await fetch(`${baseUrl}/eco`);

  let posts = await response.json();

  let result = Object.values(posts);

  return result;
};

export const createPost = async (postData, token) => {
  let response = await fetch(`${baseUrl}/eco`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-authorization" : token,
    },
    body: JSON.stringify(postData),
  });

  let result = await response.json();

  return result;
};

export const getOne = async (id) => {
  let response = await fetch(`${baseUrl}/eco/${id}`);

  let result = await response.json();

  return result;
};

