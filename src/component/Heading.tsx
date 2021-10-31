import React from "react";
import { Box, SimpleGrid, Text } from "@chakra-ui/layout";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
const Heading = () => {
  return (
    <SimpleGrid columns={2} spacing={100} alignItems="flex-end" my={10}>
      <Box ml={10}>
        <Link to="/">
          <Logo />
        </Link>
      </Box>
      <Box
        d="flex"
        justifyContent="flex-end"
        flex-wrap="nowrap"
        css={{ gap: "2rem" }}
        mr={50}
      >
        <Link to="/woman">
          <Text fontSize="2xl" fontWeight="semibold" color="purple.900">
            Woman
          </Text>
        </Link>
        <Text fontSize="2xl" fontWeight="semibold" color="purple.900">
          Men
        </Text>
        <Text fontSize="2xl" fontWeight="semibold" color="purple.900">
          Electronics
        </Text>
        <Text fontSize="2xl" fontWeight="semibold" color="purple.900">
          Jewelery
        </Text>
        <Text fontSize="2xl" fontWeight="semibold" color="purple.900">
          Cart
        </Text>
        <FaShoppingBag size={28} />
      </Box>
    </SimpleGrid>
  );
};

export default Heading;
