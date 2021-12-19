import "./edit.css";
import { useParams, useNavigate } from "react-router-dom";

import usePostState from "../../hooks/usePostState";
import * as productService from "../../services/productService";
import { useAuthContext } from "../../contexts/authContext";

export const Edit = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = usePostState(postId);
  const { user } = useAuthContext();

  let onEditPostHandler = (e) => {
    e.preventDefault();

    let updatePostData = new FormData(e.currentTarget)
    let name = updatePostData.get('name');
    let description = updatePostData.get('description');
    let imageUrl = updatePostData.get('imageUrl');
    let category = updatePostData.get('type');


    productService.editPost(post._id, {name, description, imageUrl, category}, user.accessToken)
    .then(result=>{
        navigate('/products');
    });
  };

  return (
    <section id="edit-page" className="edit">
      <form id="edit-form" method="POST" onSubmit={onEditPostHandler}>
        <fieldset>
          <legend>Edit my Post</legend>
          <p className="field">
            <label htmlFor="name">Product name</label>
            <span className="input">
              <input
                type="text"
                name="name"
                id="name"
                defaultValue={post.name}
              />
            </span>
          </p>
          <p className="field">
            <label htmlFor="description">Description</label>
            <span className="input">
              <textarea
                name="description"
                id="description"
                defaultValue={post.description}
              />
            </span>
          </p>
          <p className="field">
            <label htmlFor="image">Image</label>
            <span className="input">
              <input
                type="text"
                name="imageUrl"
                id="image"
                defaultValue={post.imageUrl}
              />
            </span>
          </p>
          <p className="field">
            <label htmlFor="type">Category</label>
            <span className="input">
              <select id="type" name="type" defaultValue={post.category}>
                <option value="Kitchen">Kitchen</option>
                <option value="Bathroom">Bathroom</option>
                <option value="self-care">Self care</option>
                <option value="Swaps">Swaps</option>
                <option value="other">Other</option>
              </select>
            </span>
          </p>
          <input className="button submit" type="submit" value="Save" />
        </fieldset>
      </form>
    </section>
  );
};
