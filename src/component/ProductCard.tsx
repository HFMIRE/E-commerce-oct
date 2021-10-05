import React, { useState } from "react";
import axios from "axios";
import { Box, HStack, Heading, Text } from "@chakra-ui/react";
interface ProductProps {
  category: string;
  description: string;
  id: string;
  image: string;
  price: number;
  rating: object;
  title: string;
}
const ProductCard = ({ id }: ProductProps) => {
  console.log(id);
  const [product, setProduct] = useState([]);
  axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then(function (response) {
      const productsData = response.data;
      console.log(productsData);
      setProduct(productsData);
    })
    .catch(function (error) {
      console.log(error);
    });
  return (
    <Box>
      <HStack spacing={8}>
        <Heading>{product}</Heading>
      </HStack>
    </Box>
  );
};

export default ProductCard;
