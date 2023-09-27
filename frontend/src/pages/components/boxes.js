import { Flex, Box,  Button, Wrap } from "@chakra-ui/react";

export default function Boxes() {
  return (
    <Box >
      <Flex height={"500"} >
        <Button 
        fontWeight={"bold"}
        shadow={"lg"}
        display="flex" 
        bg="tomato" 
        w="100%" p={4} 
        color="white" 
        m="10" padding="20"
        alignItems='center' 
        justifyContent="center"  
        height={"500"} fontSize={"40"} 
        borderRadius='30'  
        _hover={{
            bg: 'orange.300',
           }}>
          Κινήσεις
        </Button>

        <Button 
        fontWeight={"bold"}
        shadow={"lg"}
        display="flex" 
        bg="tomato" 
        w="100%" p={4} 
        color="white" 
        m="10" padding="20"
        alignItems='center' 
        justifyContent="center"  
        height={"500"} fontSize={"40"} 
        borderRadius='30'  
        _hover={{
            bg: 'orange.300',
           }}
           >
          Εκτυπώσεις
        </Button>

        <Button
        fontWeight={"bold"}
        shadow={"lg"}
        display="flex" 
        bg="tomato" 
        w="100%" p={4} 
        color="white" 
        m="10" padding="20"
        alignItems='center' 
        justifyContent="center"  
        height={"500"} fontSize={"40"} 
        borderRadius='30'  
        _hover={{
            bg: 'orange.300',
           }}> 
          Συναλλασσόμενοι
        </Button>

        <Button
        fontWeight={"bold"}
        shadow={"lg"}
        display="flex" 
        bg="tomato" 
        w="100%" p={4} 
        color="white" 
        m="10" padding="20"
        alignItems='center' 
        justifyContent="center"  
        height={"500"} fontSize={"40"} 
        borderRadius='30'  
        _hover={{
            bg: 'orange.300',
           }}> 
          Ρυθμίσεις
        </Button>

      </Flex>
    </Box>
  );
}
