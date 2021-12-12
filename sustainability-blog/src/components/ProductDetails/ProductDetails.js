import "./productDetails.css";

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
    </section>
  );
};
