import { Flex, Box,  Button, Icon, Text } from "@chakra-ui/react";
import CustomButton from "./CustomButton";
import { AiOutlinePrinter } from 'react-icons/Ai';
import { BsPeople } from 'react-icons/Bs'
import { IoSettingsOutline } from 'react-icons/Io5'
import { MdAppRegistration } from 'react-icons/Md'

export default function Boxes() {
 
  return (
    <Box>
      <Flex>
        
          <CustomButton Icon={MdAppRegistration} />
          <CustomButton Icon={BsPeople} />
          <CustomButton Icon={AiOutlinePrinter} />
          <CustomButton Icon={IoSettingsOutline} />
       
      </Flex>
    </Box>
  );


  
}





{/* <Box>
          <MdAppRegistration size="250" color="white"  />
          </Box> */}

          