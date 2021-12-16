import "./productDetails.css";
import { useEffect } from "react/cjs/react.development";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import { AuthContext } from "../../contexts/authContext";

import * as productService from "../../services/productService";

export const ProductDetails = () => {
  const { user } = useContext(AuthContext);
  const [product, setProduct] = useState({});
  const { postId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    productService.getOne(postId).then((productResult) => {
      setProduct(productResult);
    });
  }, [postId]);

  let onDeleteHandler = (e) => {
    e.preventDefault();

    productService
      .removePost(postId, user.accessToken)
      .then((res) => {
        navigate("/products");
      })
      .catch((err) => console.log(err));
  };

  const userButtons = (
    <div className="edit-del-btn">
      <>
        <Link className="button-55" to="edit">
          Edit
        </Link>

        <Link className="button-55" onClick={onDeleteHandler} to={`/delete`}>
          Delete
        </Link>
      </>
    </div>
  );
  return (
    <section id="details-page" className="details">
      <div className="product-information">
        <h3>Product name: {product.name} </h3>
        <p className="type">Category:{product.category}</p>
        <div className="img">
          <img src={`${product.imageUrl}`} />
        </div>
      </div>

      <div className="product-description">
        <h3>Details about the product:</h3>
        <p> {product.description} </p>
        {/* <p>Author:{user.nikname}</p> */}
      </div>

      {user._id == product._ownerId ? userButtons : ""}
    </section>
  );
};
