import "./addProduct.css";
import { useNavigate } from "react-router-dom";

import { useAuthContext } from "../../contexts/authContext";

import * as productService from "../../services/productService";

export const AddProduct = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  let onCreatePost = (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);

    let name = formData.get("name");
    let description = formData.get("description");
    let imageUrl = formData.get("imageUrl");
    let category = formData.get("type");

    productService
      .createPost({ name, description, imageUrl, category }, user.accessToken)
      .then((res) => navigate("/products"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <form onSubmit={onCreatePost} id="create-form">
          <fieldset>
            <legend>Add New Post</legend>

            <div className="field">
              <label htmlFor="name">Product Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="e.g. Reusable Shopping Bag"
              />
            </div>

            <div className="field">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                placeholder="Tell us about this eco-friendly product..."
                rows="4"
              />
            </div>

            <div className="field">
              <label htmlFor="image">Image URL</label>
              <input
                type="text"
                name="imageUrl"
                id="image"
                placeholder="https://..."
              />
            </div>

            <div className="field">
              <label htmlFor="type">Category</label>
              <select id="type" name="type" className="form-select">
                <option value="Kitchen">Kitchen</option>
                <option value="Bathroom">Bathroom</option>
                <option value="self-care">Self Care</option>
                <option value="Swaps">Swaps</option>
                <option value="other">Other</option>
              </select>
            </div>

            <input className="submit-btn" type="submit" value="Add Post" />
          </fieldset>
        </form>
      </div>
    </div>
  );
};
