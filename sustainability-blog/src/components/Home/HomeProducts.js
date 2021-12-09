import "./home.css";
import { useState, useEffect } from "react";

import { HomeCard } from "./HomeCard/HomeCard";
import * as newestProducts from "../../services/productService";

export const HomeProducts = () => {
  const [newest, setNewest] = useState([]);

  let newestPosts = newest.slice(0, 3);
  useEffect(() => {
    newestProducts
      .getAllPosts()
      .then((res) => setNewest(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div class="content">
      <div class="container_12">
        <div class="content">
          <div class="container_12">
            <div class="grid_12">
              <h2>
                Hello there green friend! Here you can find newest products
                which have been added my our green heroes.
              </h2>
            </div>
            {newestPosts.map((x) => (
              <HomeCard id={x._id} productCard={x} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
