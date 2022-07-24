import { Lock } from "@mui/icons-material";
import { Box, Paper, SvgIcon, Typography } from "@mui/material";
import React from "react";

const Protrading = () => {
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        sx={{
          height: "60vh",
        }}
      >
        <Paper>
          <Box py={7} px={3}>
            <SvgIcon component={Lock} fontSize="large"/>

            <Typography pt={2}>Pro Trading is available to only VIP users</Typography>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default Protrading;
