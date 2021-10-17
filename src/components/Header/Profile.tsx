import { Box, Flex, Text, Avatar } from "@chakra-ui/react";
import React from "react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Luiz Spinelli</Text>
        <Text color="gray.300" fontSize="small">
          luiz.lucchi@gmail.com
        </Text>
      </Box>
      <Avatar
        size="md"
        name="Luiz Spinelli"
        src="https://github.com/luizspinelli.png"
      />
    </Flex>
  );
}
