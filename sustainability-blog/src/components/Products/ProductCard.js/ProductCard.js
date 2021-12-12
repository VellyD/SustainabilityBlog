import { Link } from "react-router-dom";
import "./productCard.css";

export const ProductCard = ({ productData }) => {
  return (
    <div className="grid_3">
      <div >
        <div className="image_div">
          <img src={productData.imageUrl} alt="" className="img_inner" />
        </div>
        <div className="title">
          <p>{productData.name}</p>
          <Link to="/details/{productData._id}">Details</Link>
        </div>
      </div>
    </div>
  );
};
