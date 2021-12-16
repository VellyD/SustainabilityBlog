import "./productDetails.css";
import { useEffect } from "react/cjs/react.development";
import { Link, useParams } from "react-router-dom";
import { useContext, useState } from "react";

import { AuthContext } from "../../contexts/authContext";

import * as productService from "../../services/productService";

export const ProductDetails = () => {
  const { user } = useContext(AuthContext);
  const [product, setProduct] = useState({});
  const { postId } = useParams();

  useEffect(async () => {
    let productResult = await productService.getOne(postId);

    setProduct(productResult);
  }, []);

  const userButtons = (
    <div className="edit-del-btn">
      <>
        <Link className="button-55" to={`/edit/`}>
          Edit
        </Link>

        <Link className="button-55" to={`/delete`}>
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
        <h3>Description:</h3>
        <p> {product.description} </p>
      </div>

      {user._id == product._ownerId ? userButtons : ""}
    </section>
  );
};
