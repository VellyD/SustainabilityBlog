import "./edit.css";
import { useParams } from "react-router-dom";

import usePostState from "../../hooks/usePostState";

export const Edit = () => {
  const { postId } = useParams();
  const [post, setPost] = usePostState(postId);

  let onEditPostHandler = (e) => {
    e.preventDefault();

    console.log("submit");
  };

  return (
    <section id="edit-page" className="edit">
      <form id="edit-form" method="POST" onSubmit={onEditPostHandler}>
        <fieldset>
          <legend>Edit my Post</legend>
          <p className="field">
            <label htmlFor="name">Product name</label>
            <span className="input">
              <input type="text" name="name" id="name" defaultValue={post.name} />
            </span>
          </p>
          <p className="field">
            <label htmlFor="description">Description</label>
            <span className="input">
              <textarea name="description" id="description" defaultValue={post.description}/>
            </span>
          </p>
          <p className="field">
            <label htmlFor="image">Image</label>
            <span className="input">
              <input type="text" name="imageUrl" id="image" defaultValue={post.imageUrl} />
            </span>
          </p>
          <p className="field">
            <label htmlFor="type">Category</label>
            <span className="input">
              <select id="type" name="type" value={post.category}>
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
