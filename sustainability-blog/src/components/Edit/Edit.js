import "./edit.css";
import { useParams, useNavigate } from "react-router-dom";
import usePostState from "../../hooks/usePostState";
import * as productService from "../../services/productService";
import { useAuthContext } from "../../contexts/authContext";

export const Edit = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [post] = usePostState(postId);
  const { user } = useAuthContext();

  let onEditPostHandler = (e) => {
    e.preventDefault();

    let updatePostData = new FormData(e.currentTarget);
    let name = updatePostData.get("name");
    let description = updatePostData.get("description");
    let imageUrl = updatePostData.get("imageUrl");
    let category = updatePostData.get("type");

    productService
      .editPost(
        post._id,
        { name, description, imageUrl, category },
        user.accessToken,
      )
      .then(() => navigate("/products"));
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <form id="edit-form" onSubmit={onEditPostHandler}>
          <fieldset>
            <legend>Edit Post</legend>

            <div className="field">
              <label htmlFor="name">Product Name</label>
              <input
                type="text"
                name="name"
                id="name"
                defaultValue={post.name}
                placeholder="Product name"
              />
            </div>

            <div className="field">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                defaultValue={post.description}
                placeholder="Description"
                rows="4"
              />
            </div>

            <div className="field">
              <label htmlFor="image">Image URL</label>
              <input
                type="text"
                name="imageUrl"
                id="image"
                defaultValue={post.imageUrl}
                placeholder="https://..."
              />
            </div>

            <div className="field">
              <label htmlFor="type">Category</label>
              <select
                id="type"
                name="type"
                className="form-select"
                defaultValue={post.category}
              >
                <option value="Kitchen">Kitchen</option>
                <option value="Bathroom">Bathroom</option>
                <option value="self-care">Self Care</option>
                <option value="Swaps">Swaps</option>
                <option value="other">Other</option>
              </select>
            </div>

            <input className="submit-btn" type="submit" value="Save Changes" />
          </fieldset>
        </form>
      </div>
    </div>
  );
};
