import { Flex, Box,  Button, Icon, Text } from "@chakra-ui/react";

import { AiOutlinePrinter } from 'react-icons/Ai';
import { BsPeople } from 'react-icons/Bs'
import { IoSettingsOutline } from 'react-icons/Io5'
import { MdAppRegistration } from 'react-icons/Md'

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
          <Box>
          <MdAppRegistration size="250" color="white"  />
          {/* <Text>Κινήσεις</Text> */}
          </Box>
         
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
          <Box>
          <AiOutlinePrinter size="250" color="white"  />
          {/* <Text>Εκτυπώσεις</Text> */}
          </Box>
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
          <Box>
          <BsPeople size="250" color="white"  />
          {/* <Text>Συναλλασσόμενοι</Text> */}
          </Box>
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
          <Box>
          <IoSettingsOutline size="250" color="white"  />
          {/* <Text>Ρυθμίσεις</Text> */}
          </Box>
        </Button>

      </Flex>
    </Box>
  );
}
