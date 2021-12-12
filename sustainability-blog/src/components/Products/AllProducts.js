import "./allProducts.css";

import { useState, useEffect } from "react";
import { ProductCard } from "./ProductCard.js/ProductCard";

import * as postService from "../../services/productService";

export const AllProducts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    postService
      .getAllPosts()
      .then((res) => setPosts(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="content">
      <div className="container_12">
        <div className="grid_12">
          <h2>All Products</h2>
        </div>
        <div className="clear"></div>
        <div className="gallery">
         <p>*If you want to add your personal experience, please log in your profile or register for free.</p>
          
          {posts.length > 0 ? (
            posts.map((x) => <ProductCard key={x._id} productData={x} />)
          ) : (
            <p className="no-pets">No Posts in database!</p>
          )}
        </div>
      </div>
    </div>
  );
};
