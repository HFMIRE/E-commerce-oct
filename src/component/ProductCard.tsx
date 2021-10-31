import React, { useContext, useState } from "react";
import {
  Box,
  SimpleGrid,
  Image,
  Button,
  Badge,
  Divider,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Heading from "./Heading";
import { CartContext } from "./CartContext";
interface ProductProps {
  category: string;
  description: string;
  id: string;
  image: string;
  price: number;
  title: string;
}
const ProductCard = ({
  category,
  description,
  image,
  price,
  title,
}: ProductProps) => {
  // const [countProduct, setCountProduct] = useState(0);
  const { cartValue, setCartValue } = useContext(CartContext);
  return (
    <Box>
      <Heading />
      <SimpleGrid columns={2} spacing={10} my={20}>
        <Box height="500px" mx={10} p={5}>
          <Image boxSize="500px" objectFit="contain" src={image} alt={title} />
        </Box>
        <Box height="800px" maxW="4xl" mx={10}>
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
            noOfLines={1}
          >
            {title}
          </Box>
          <Box d="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="purple">
              {category}
            </Badge>
          </Box>
          <Box>
            <Box as="span" color="purple.600" fontSize="sm">
              £
            </Box>
            {price}
          </Box>
          <Box mt="1">{description}</Box>
          <Divider p={3} orientation="horizontal" />
          <Button onClick={() => setCartValue(cartValue + 1)}>
            Add to your Cart
          </Button>
          {cartValue}
          <Box d="flex" alignContent="space-evenly" p={10}>
            <Box>
              <Link to={`/`}>
                <Button colorScheme="purple">see more product</Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default ProductCard;
