import { Flex, Box, Button, Icon, Text, Grid, boxSize } from "@chakra-ui/react";

export default function CustomButton({ Icon, link, text }) {
  return (
    <Button
      h={{ base: "120", sm: "250", md: "350" }}
      minW={{ base: "120", sm: "250", md: "350" }}
      shadow="lg"
      bg="tomato"
      borderRadius="30"
      _hover={{
        bg: "orange.300",
      }}
    >
      <Icon size="50%" color="white" />
    </Button>
  );
}
