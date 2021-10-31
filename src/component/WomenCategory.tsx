import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/layout";
import axios from "axios";

// interface CategoryProps {
//   id: string;
//   image: string;
//   price: number;
//   title: string;
// }
const WomenCategory = () => {
  const [allProducts, setallProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then(function (response) {
        setallProducts(response.data);
        console.log(allProducts);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [allProducts]);
  const filterWomen = () => {
    for (let i = 0; i < allProducts.length; ++i) {
      console.log(allProducts[i]);
    }
  };
  filterWomen();
  return <Box>{/* <Text>{women}</Text> */}</Box>;
};

export default WomenCategory;
