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
    <div className="home-page">
      {/* Mission section */}
      <div className="home-mission">
        <h2>Small swaps. Big impact.</h2>
        <p>
          Sustainable Swaps is a community where people share everyday
          eco-friendly product alternatives. No perfection required — just one
          swap at a time.
        </p>
        <div className="home-mission-pillars">
          <div className="pillar">
            <span>🌱</span>
            <h4>Eco Friendly</h4>
            <p>Products that are kinder to the planet</p>
          </div>
          <div className="pillar">
            <span>💰</span>
            <h4>Budget Friendly</h4>
            <p>Small changes that save money long term</p>
          </div>
          <div className="pillar">
            <span>🤝</span>
            <h4>Community Driven</h4>
            <p>Real recommendations from real people</p>
          </div>
        </div>
      </div>

      {/* Latest swaps */}
      <div className="home-latest">
        <h3>Latest Swaps</h3>
        <div className="home-cards">
          {newestPosts.length > 0 ? (
            newestPosts.map((x) => <HomeCard key={x._id} productCard={x} />)
          ) : (
            <p className="no-pets">No swaps yet — be the first!</p>
          )}
        </div>
      </div>
    </div>
  );
};
