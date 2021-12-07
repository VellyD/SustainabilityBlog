import "./allProducts.css";
import { ProductCard } from "./ProductCard.js/ProductCard";

export const AllProducts = () => {
  return (
    <div class="content">
      <div class="ic">
        More Website Templates @ TemplateMonster.com - January 27, 2014!
      </div>
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
              account.
            </p>
          </div>
          <div class="clear"></div>
          <ProductCard />
        

        </div>
      </div>
    </div>
  );
};
