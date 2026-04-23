import "./home.css";
import { useState, useEffect } from "react";
import { HomeCard } from "./HomeCard/HomeCard";
import * as newestProducts from "../../services/productService";

export const HomeProducts = () => {
  const [newest, setNewest] = useState([]);
  let newestPosts = newest.slice(-3);

  useEffect(() => {
    newestProducts
      .getAllPosts()
      .then((res) => setNewest(Object.values(res)))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="content home-page">
      <div className="home-intro">
        <h2>
          Hello there green friend! Here you can find newest products which have
          been added by our green heroes.
        </h2>
      </div>
      <div className="home-cards">
        {newestPosts.length > 0 ? (
          newestPosts.map((x) => <HomeCard key={x._id} productCard={x} />)
        ) : (
          <p className="no-pets">No Posts in database!</p>
        )}
      </div>
    </div>
  );
};
