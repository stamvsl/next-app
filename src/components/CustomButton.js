import { Flex, Box,  Button, Icon, Text, Grid } from "@chakra-ui/react";

export default function CustomButton ({Icon, link, text}){
    return(
      <Button 
      
      height={"350"}
      minW={"350"}
      shadow="lg"
      bg="tomato" 
      alignItems='center' 
      justifyContent="center"  
      borderRadius='30'  
      _hover={{
          bg: 'orange.300',
         }}
         >
             <Icon size="150" color="white"  />
        </Button>

    )
  }