import "./productDetails.css";
import { Link } from "react-router-dom";

export const ProductDetails = ({}) => {
  return (
    <section id="details-page" className="details">
      <div className="product-information">
        <h3>Product name: </h3>
        <p className="type">Category:</p>
        <div className="img">
          <img src="" />
        </div>
      </div>

      <div className="product-description">
        <h3>Description:</h3>
        <p> Detailed description </p>
      </div>

      <div className="edit-del-btn">
        <>

          <Link className="button-55" to={`/edit/`}>
            Edit
          </Link>
          
          <Link className="button-55" to={`/delete`} > 
            Delete
          </Link>
        </>
      </div>
    </section>
  );
};
