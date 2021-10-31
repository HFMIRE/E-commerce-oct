import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import ProductCard from "./ProductCard";
interface ProductInfoProps {
  category: string;
  description: string;
  id: string;
  image: string;
  price: number;
  title: string;
}
const ProductInfo = () => {
  // giving types to state variable types
  const [product, setProduct] = useState<ProductInfoProps | null>(null);
  let location = useLocation();
  const id = location.pathname.split("/")[2];
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then(function (response) {
        const productData = response.data;
        setProduct(productData);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [id]);

  return (
    <Box>
      {product && (
        <ProductCard
          category={product.category}
          description={product.description}
          id={product.id}
          image={product.image}
          price={product.price}
          title={product.title}
        />
      )}
    </Box>
  );
};

export default ProductInfo;
