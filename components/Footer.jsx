import { Box, Typography, Container } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Container
      sx={{
        bgcolor: "#181a20",
      }}
    >
      <Box
        display={{ xs: "none", md: "flex" }}
        color="white"
        sx={{ flexWrap: "wrap" }}
        justifyContent="space-between"
      >
        <Box>
          <Typography variant="body">ABOUT</Typography>

          <Typography>Legal & Privacy</Typography>
          <Typography>FAQ</Typography>
        </Box>

        <Box>
          <Typography>PRODUCTS</Typography>

          <Typography>Beginner Benefits</Typography>
          <Typography> Markets</Typography>
        </Box>

        <Box>
          <Typography>SERVICES</Typography>

          <Typography>Pro Traders</Typography>
        </Box>

        <Box>
          <Typography>ADDRESS</Typography>

          <Typography>
            {" "}
            Zipo-Aid Ltd <br /> 2 New Street Square <br /> London EC71B 9TW{" "}
            <br />
            United Kingdom{" "}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Footer;
