import { Box, Container, Link, Paper, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";

const Referrals = () => {
  const { getUsername, username } = useAuth();
  useEffect(() => {
    getUsername();
  }, []);

  return (
    <Container>
      <Paper
        sx={{
          mt: 3,
        }}
      >
        <Box p pb={3}>
          <Typography gutterBottom variant="h4">
            Your Referral Link
          </Typography>
          <Link variant="caption">
            https://www.zipoaidinvestments/register/{username}
          </Link>
        </Box>
      </Paper>
    </Container>
  );
};

export default Referrals;
