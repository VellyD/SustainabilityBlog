import "./productDetails.css";
import { Link, useParams, useNavigate } from "react-router-dom";

import { useAuthContext } from "../../contexts/authContext";

import usePostState from "../../hooks/usePostState";
import * as productService from "../../services/productService";

export const ProductDetails = () => {
  const { user } = useAuthContext();
  const { postId } = useParams();
  const [product] = usePostState(postId);
  const navigate = useNavigate();

  let onDeleteHandler = (e) => {
    e.preventDefault();

    productService
      .removePost(postId, user.accessToken)
      .then((res) => {
        navigate("/products");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="details-container">
      {/* Left side — image */}
      <div className="details-image">
        <img alt={product.name} src={product.imageUrl} />
      </div>

      {/* Right side — info */}
      <div className="details-info">
        <h2>{product.name}</h2>
        <p className="details-category">
          <span>Category:</span> {product.category}
        </p>
        <p className="details-likes">
          <span>Likes:</span> {product.likes?.length || 0}
        </p>
        <div className="details-description">
          <h3>About this product</h3>
          <p>{product.description}</p>
        </div>

        {/* Buttons */}
        <div className="details-buttons">
          {user._id &&
            product.author &&
            (user._id === product.author?._id?.toString() ? (
              <>
                <Link
                  className="product-overlay-btn"
                  to={`/edit/${product._id}`}
                >
                  Edit
                </Link>
                <button
                  className="product-overlay-btn delete-btn"
                  onClick={onDeleteHandler}
                >
                  Delete
                </button>
              </>
            ) : (
              <button className="product-overlay-btn like-btn">Like</button>
            ))}
        </div>
      </div>
    </div>
  );
};
