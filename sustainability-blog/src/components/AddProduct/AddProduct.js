import "./addProduct.css";
import { useNavigate } from "react-router-dom";

import * as productService from "../../services/productService";

export const AddProduct = () => {
  const navigate = useNavigate();

  let onCreatePost = (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);

    let name = formData.get('name');
    let description = formData.get('description');
    let imageUrl = formData.get('imageUrl');
    let category = formData.get('type');

    productService.createPost({name, description, imageUrl, category})
    .then(res => navigate('/products'))
    .catch(err => console.log(err))
    
  };

  return (
    <div className="content">
      <div className="container_12">
        <div className="gallery">
          <section id="create-page" className="create">
            <form onSubmit={onCreatePost} id="create-form" action="" method="">
              <fieldset>
                <legend>Add new post</legend>
                <p className="field">
                  <label htmlFor="name">Product name</label>
                  <span className="input">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                    />
                  </span>
                </p>
                <p className="field">
                  <label htmlFor="description">Description</label>
                  <span className="input">
                    <textarea
                      name="description"
                      id="description"
                      placeholder="Description"
                    ></textarea>
                  </span>
                </p>
                <p className="field">
                  <label htmlFor="image">Image</label>
                  <span className="input">
                    <input
                      type="text"
                      name="imageUrl"
                      id="image"
                      placeholder="Image"
                    />
                  </span>
                </p>
                <p className="field">
                  <label htmlFor="type">Category</label>
                  <span className="input">
                    <select id="type" name="type">
                      <option value="dog">Kitchen</option>
                      <option value="cat">Bathroom</option>
                      <option value="parrot">Self care</option>
                      <option value="reptile">Swaps</option>
                      <option value="other">Other</option>
                    </select>
                  </span>
                </p>
                <input
                  className="button submit"
                  type="submit"
                  value="Add post"
                />
              </fieldset>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};
