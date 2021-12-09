export const HomeCard = ({
    productCard,
}) => {
  return (
    <div class="grid_4">
      <div class="text1">
        <a href="#">{productCard.name}</a>
      </div>
      <br />
      {productCard.description}
      <br />
      <a href="#" class="btn">
        More
      </a>
    </div>
  );
};
