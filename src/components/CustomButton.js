import { Flex, Box,  Button, Icon, Text } from "@chakra-ui/react";

export default function CustomButton ({Icon, link, text}){
    return(
      <Button 
      fontWeight={"bold"}
      shadow={"lg"}
      display="flex" 
      bg="tomato" 
      w="100%" 
      p={4} 
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
             <Icon size="250" color="white"  />
        </Button>

    )
  }