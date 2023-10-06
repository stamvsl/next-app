import { Flex, Box, Button, Icon, Text, Grid } from "@chakra-ui/react";

export default function CustomButton({ Icon, link, text }) {
  return (
    <Button
      height={{ base: "120", sm: "300", md: "350" }}
      minW={{ base: "120", sm: "300", md: "350" }}
      shadow="lg"
      bg="tomato"
      borderRadius="30"
      _hover={{
        bg: "orange.300",
      }}
    >
      <Icon size="125" color="white" />
    </Button>
  );
}
