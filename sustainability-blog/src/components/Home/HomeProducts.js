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
    <div className="content">
      <div className="container_12">
        <div className="content">
          <div className="container_12">
            <div className="grid_12">
              <h2>
                Hello there green friend! Here you can find newest products
                which have been added my our green heroes.
              </h2>
            </div>
            {newestPosts.map((x) => (
              <HomeCard key={x._id} productCard={x} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
