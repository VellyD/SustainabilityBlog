import "./allProducts.css";

import { useState, useEffect } from "react";
import { ProductCard } from "./ProductCard.js/ProductCard";

import * as postService from "../../services/productService";

export const AllProducts = () => {
  const [posts, setPosts] = useState([]);
  console.log(posts);
  useEffect(() => {
    postService
      .getAllPosts()
      .then((res) => setPosts(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div class="content">
      <div class="container_12">
        <div class="grid_12">
          <h2>All Products</h2>
        </div>
        <div class="clear"></div>
        <div class="gallery">
          <div class="grid_9">
            <p>
              Hello there green friend! Here you can find all products which
              have been added my our green heroes. If you want to add your
              personal experience, please join our community and register your
              account now. :)
            </p>
          </div>
          <div class="clear"></div>

          {posts.length > 0 ? (
            posts.map((x) => <ProductCard id={x._id} productData={x} />)
          ) : (
            <p className="no-pets">No Posts in database!</p>
          )}
        </div>
      </div>
    </div>
  );
};
