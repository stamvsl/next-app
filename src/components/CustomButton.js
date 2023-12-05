import { Flex } from "@chakra-ui/react";

export default function CustomButton({ Icon, link, text }) {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      h={{ base: "120", sm: "180", md: "300", lg: "350" }}
      minW={{ base: "120", sm: "180", md: "300", lg: "350" }}
      margin="15px 0 15px 0"
      shadow="lg"
      bg="tomato"
      borderRadius="30"
      _hover={{
        bg: "orange.300",
      }}
    >
      <Icon size="50%" color="white" />
    </Flex>
  );
}
