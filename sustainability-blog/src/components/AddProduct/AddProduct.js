import './addProduct.css'

export const AddProduct = () => {
  return (
    <div class="content">
      <div class="container_12">
        <div class="gallery">
          <section id="create-page" className="create">
            <form id="create-form" action="" method="">
              <fieldset>
                <legend>Create new post</legend>
                <p className="field">
                  <label for="name">Product name</label>
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
                  <label for="description">Description</label>
                  <span className="input">
                    <textarea
                      name="description"
                      id="description"
                      placeholder="Description"
                    ></textarea>
                  </span>
                </p>
                <p className="field">
                  <label for="image">Image</label>
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
                  <label for="type">Category</label>
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
