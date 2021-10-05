import React, { useState } from "react";
import axios from "axios";
import ProductCardTile from "./ProductCardTile";
import { Grid, Box } from "@chakra-ui/react";
import Heading from "./Heading";

const LandingPage = () => {
  const [allProducts, setallProducts] = useState([]);
  axios
    .get("https://fakestoreapi.com/products")
    .then(function (response) {
      const productsData = response.data;
      setallProducts(productsData);
    })
    .catch(function (error) {
      console.log(error);
    });

  return (
    <Box>
      <Box>
        <Heading />
      </Box>
      <Grid templateColumns="repeat(4, 1fr)" gap={6} color="gray">
        {allProducts.map(
          ({ category, description, id, image, price, rating, title }, idx) => {
            console.log(allProducts);
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
      </Grid>
    </Box>
  );
};

export default LandingPage;
