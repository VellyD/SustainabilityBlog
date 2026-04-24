import "./allProducts.css";
import { useState, useEffect } from "react";
import { ProductCard } from "./ProductCard.js/ProductCard";
import * as postService from "../../services/productService";
import { useAuthContext } from "../../contexts/authContext";

export const AllProducts = () => {
  const [posts, setPosts] = useState([]);
  const { user } = useAuthContext();

  useEffect(() => {
    postService
      .getAllPosts()
      .then((res) => setPosts(Object.values(res)))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="content all-products-page">
      <h2>All Swaps</h2>
      <h2>
        ,,Making more sustainable choices doesn’t have to be complicated. These
        are simple swaps you can easily fit into your daily routine—no big
        lifestyle changes, just small steps that add up over time.,,
      </h2>

      {!user.email && (
        <p className="guest-message">
          *If you want to add your personal experience, please
          <a href="/login"> log in</a> or
          <a href="/register"> register</a> for free.
        </p>
      )}

      <div className="products-grid">
        {posts.length > 0 ? (
          posts.map((x) => <ProductCard key={x._id} productData={x} />)
        ) : (
          <p className="no-pets">No Posts in database!</p>
        )}
      </div>
    </div>
  );
};
