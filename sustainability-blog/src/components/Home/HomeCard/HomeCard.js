import { Link } from "react-router-dom";
import "./homeCard.css";

export const HomeCard = ({ productCard }) => {
  return (
    <div className="product-card">
      <div className="product-card-inner">
        <img src={productCard.imageUrl} alt={productCard.name} />
        <div className="product-overlay">
          <p className="product-overlay-title">{productCard.name}</p>
          <Link
            to={`/details/${productCard._id}`}
            className="product-overlay-btn"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};
