const baseUrl = "http://localhost:3030/jsonstore";

export const getAllPosts = async () => {
  let response = await fetch(`${baseUrl}/eco`);

  let posts = await response.json();

  let result = Object.values(posts);

  return result;
};

export const createPost = async (postData) => {
  let response = await fetch(`${baseUrl}/eco`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(postData),
  });

  let result = await response.json();

  return result;
};
