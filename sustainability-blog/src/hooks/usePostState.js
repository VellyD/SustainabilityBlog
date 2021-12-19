import { useState, useEffect } from "react";
import * as productService from '../services/productService'

const usePostState = (postId) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    productService.getOne(postId).then((productResult) => {
      setProduct(productResult);
    });
  }, [postId]);

  return[
      product,
      setProduct
  ]
};

export default usePostState;