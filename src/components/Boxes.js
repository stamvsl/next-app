import { Flex, Box,  Button, Icon, Text, Grid, GridItem, gridTemplateColumns, gridTemplateRows, templateAreas, Center } from "@chakra-ui/react";
import CustomButton from "./CustomButton";
import { AiOutlinePrinter } from 'react-icons/Ai';
import { BsPeople } from 'react-icons/Bs'
import { IoSettingsOutline } from 'react-icons/Io5'
import { MdAppRegistration } from 'react-icons/Md'

export default function Boxes() {
 
  return (
    <Box padding={"50"}  display={"Grid"} justifyContent={"center"}>
      <Grid  
        gridTemplateColumns={{ md: "1fr 1fr", sm: "1fr" }}
        gridTemplateRows={{ md: "1fr 1fr", sm: "1fr" }}
        gap="10"
        templateAreas={
          `{md: "1 2"
                "3 4",
            sm:"1"
               "2"
               "3"
               "4"
        }`}
        justifyContent={"center"}
        
      >
        <GridItem>
          <CustomButton Icon={MdAppRegistration} area={"1"} />
        </GridItem>
        <GridItem>
          <CustomButton Icon={BsPeople} area={"2"} />
        </GridItem>
        <GridItem>
          <CustomButton Icon={AiOutlinePrinter} area={"3"} />
        </GridItem>
        <GridItem>
          <CustomButton Icon={IoSettingsOutline} area={"4"} />
        </GridItem>
      </Grid>
    </Box>
  );


  
}







          