import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import ProductCardTile from "./ProductCardTile";
import { SimpleGrid, Box } from "@chakra-ui/react";
import Heading from "./Heading";
import { CartContext } from "./CartContext";

const LandingPage = () => {
  const [allProducts, setallProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then(function (response) {
        console.log(response.data);
        setallProducts(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [allProducts]);
  return (
    <Box>
      <Box>
        <Heading />
      </Box>
      <SimpleGrid columns={4} spacing={10} p={10} color="gray" mx={100}>
        {allProducts.map(
          ({ category, description, id, image, price, rating, title }, idx) => {
            return (
              <ProductCardTile
                category={category}
                key={idx}
                description={description}
                id={id}
                image={image}
                price={price}
                rating={rating}
                title={title}
              />
            );
          }
        )}
      </SimpleGrid>
    </Box>
  );
};

export default LandingPage;
