import React from "react";
import { Box, Text } from "@chakra-ui/layout";
import { ReactComponent as Logo } from "../assets/logo.svg";
const Heading = () => {
  return (
    <Box d="flex" justifyContent="space-around" justifyItems="initial">
      <Logo />
      <Text fontSize="3xl">Woman </Text>
      <Text fontSize="3xl">Men </Text>
      <Text fontSize="3xl">Electronics </Text>
      <Text fontSize="3xl">Jewelery</Text>
    </Box>
  );
};

export default Heading;
