import { Link } from "react-router-dom";
export const HomeCard = ({
    productCard,
}) => {
  return (
    <div className="grid_4">
      <div className="text1">
        <Link to="">{productCard.name}</Link>
      </div>
      <br />
      {productCard.description}
      <br />
      <Link to="/details/{productCard._id}" className="btn">
        More
      </Link>
    </div>
  );
};
