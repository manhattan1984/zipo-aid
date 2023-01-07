import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";

const Loading = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight={"90vh"}
      justifyContent="center"
      textAlign="center"
    >
      <Box>
        <CircularProgress />
      </Box>
    </Box>
  );
};

export default Loading;
