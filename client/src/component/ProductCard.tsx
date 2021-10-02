import React from 'react'
import {Box, Image, Badge, }  from "@chakra-ui/react"
interface ProductProps {
    category: string 
    description: string 
    id: number
    image: string 
    price: number
    rating:object
    title: string 
}
const ProductCard = ({category, 
    image, 
    price, 
    title}:ProductProps) => {
    return (
        <div>
             <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={image} alt='product image' />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            {category}
          </Badge>
          {/* <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {property.beds} beds &bull; {property.baths} baths
          </Box> */}
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {title}
        </Box>

        <Box>
          <Box as="span" color="gray.600" fontSize="sm">
            £
          </Box>
          {price}
        </Box>

        {/* <Box d="flex" mt="2" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon
                key={id}
                color={i < rating ? "teal.500" : "gray.300"}
              />
            ))}
          {/* <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {property.reviewCount} reviews
          </Box> */}
        {/* </Box>  */}
      </Box>
    </Box>
        </div>
    )
}

export default ProductCard
