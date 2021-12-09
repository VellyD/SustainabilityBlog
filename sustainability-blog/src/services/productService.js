const baseUrl = "http://localhost:3030/jsonstore";


export const getAllPosts = async () => {
  let response = await fetch(`${baseUrl}/eco`);

  let posts = await response.json();

  let result = Object.values(posts);

  return result;
};
