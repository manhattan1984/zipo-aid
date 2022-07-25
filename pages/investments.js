import { CloudCircleSharp } from "@mui/icons-material";
import { Box, Paper, SvgIcon, Typography } from "@mui/material";
import React from "react";

const Investments = () => {
  return (
    <>
      <Typography my={4} variant="h4">
        Investments
      </Typography>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        sx={{
          height: "40vh",
        }}
      >
        <Paper>
          <Box pt={7} pb={15}>
            <Typography pb={2} variant="h5" color="GrayText">
              You have made no investments recently
            </Typography>
            <SvgIcon fontSize="large" component={CloudCircleSharp} />
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default Investments;
