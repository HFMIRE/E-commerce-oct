import React from "react";
import { Box, Image, Badge, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface ProductProps {
  category: string;
  description: string;
  id: string;
  image: string;
  price: number;
  rating: object;
  title: string;
}
const ProductCardTile = ({
  id,
  category,
  image,
  price,
  title,
}: ProductProps) => {
  return (
    <div>
      <Box
        maxW="md"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="inner"
      >
        <Image
          objectFit="scale-down"
          src={image}
          alt="product image"
          height="300px"
          margin="auto"
          padding="20px"
          width="300px"
        />

        <Box p="6">
          <Box d="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="purple">
              {category}
            </Badge>
          </Box>

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

          <Box>
            <Box as="span" color="purple.600" fontSize="sm">
              £
            </Box>
            {price}
          </Box>
          <Box d="flex" mt="4" alignItems="center" ml="100px">
            <Link to={`/product/${id}`}>
              <Button colorScheme="purple">View Product</Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default ProductCardTile;
