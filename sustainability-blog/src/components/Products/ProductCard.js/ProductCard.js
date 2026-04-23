import { Link } from "react-router-dom";
import "./productCard.css";

export const ProductCard = ({ productData }) => {
  return (
    <div className="product-card">
      <div className="product-card-inner">
        <img src={productData.imageUrl} alt={productData.name} />
        <div className="product-overlay">
          <p className="product-overlay-title">{productData.name}</p>
          <Link
            to={`/details/${productData._id}`}
            className="product-overlay-btn"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};
