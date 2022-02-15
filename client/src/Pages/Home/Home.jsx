import React from "react";
import {
  Button,
  Box,
  Container,
  Grid,
  GridItem,
  IconButton,
  Image,
  SimpleGrid,
  Text,
  useColorMode,
} from "@chakra-ui/react";

import HubBoardIcon from "../../Image/HubBoard.svg";
import { FiLogIn } from "react-icons/fi";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const Home = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Container maxW="container.xl" px={4} py={2}>
          <Grid maxW="100%" templateColumns="repeat(12, 1fr)" gap={6}>
            <GridItem
              colSpan={2}
              display="flex"
              justifyContent="space-evenly"
              alignItems="center"
            >
              <Image src={HubBoardIcon} sx={{ minW: "75px" }} w="75px" />
              <Text>HubBoard</Text>
            </GridItem>
            <GridItem
              colSpan={10}
              display="flex"
              justifyContent="flex-end"
              alignItems="center"
            >
              <IconButton
                mr={3}
                colorScheme="orange"
                onClick={toggleColorMode}
                icon={
                  colorMode === "light" ? <BsFillMoonFill /> : <BsFillSunFill />
                }
              />
              <Button colorScheme="orange">Sign up</Button>
            </GridItem>
          </Grid>
          <Box>
          <Grid templateColumns="repeat(12, 1fr)" gap={6}>

          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Home;
