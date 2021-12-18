import "./productDetails.css";
import { useEffect } from "react/cjs/react.development";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

import { useAuthContext } from "../../contexts/authContext";

import * as productService from "../../services/productService";

export const ProductDetails = () => {
  const { user } = useAuthContext();
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

  let likesClickHandler = ()=>{

  }
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

  const guestLikeButton = (
    <div className="edit-del-btn">
      <Link className="button-55" onClick={likesClickHandler}>
        Like
      </Link>
    </div>
  );

  return (
    <section id="details-page" className="details">
      <div className="product-information">
        <h3>Product name: {product.name} </h3>
        <p className="type">Category:{product.category}</p>
        <p className="type">Likes: </p>

        <div className="img">
          <img alt="" src={`${product.imageUrl}`} />
        </div>
      </div>

      <div className="product-description">
        <h3>Details about the product:</h3>
        <p> {product.description} </p>
       
      </div>

      {user._id === product._ownerId ? userButtons : guestLikeButton}

      
    </section>
  );
};
