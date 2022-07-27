import { Grid, Paper, Box, Typography, Container } from "@mui/material";
import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const {
    currentUser,
    usdBalance,
    getBalances,
    getUsername,
    username,
    activeInvestment,
    totalEarned,
    totalDeposit,
  } = useAuth();

  useEffect(() => {
    getBalances();
    getUsername();
  }, []);

  return (
    <Container>
      <Typography variant="h6" my={2}>
        Welcome, {username}
      </Typography>

      <Grid container spacing={2} mb={3}>
        <Grid item xs={12} md={6} lg={3}>
          <Paper
            sx={{
              backgroundColor: "primary.light",
            }}
          >
            <Box color="white" width="100%" pb={4} pt={2} m>
              <Typography mb={2}>Available Balance</Typography>
              <Typography variant="h5">${usdBalance}</Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Paper
            sx={{
              backgroundColor: "secondary.light",
            }}
          >
            <Box color="white" pb={4} pt={2} m>
              <Typography mb={2}>Active Investment</Typography>
              <Typography variant="h5">{activeInvestment}</Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Paper
            sx={{
              backgroundColor: "primary.main",
            }}
          >
            <Box color="white" pb={4} pt={2} m>
              <Typography mb={2}>Total Deposit</Typography>
              <Typography variant="h5">${totalDeposit}</Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Paper
            sx={{
              backgroundColor: "secondary.main",
            }}
          >
            <Box color="white" pb={4} pt={2} m>
              <Typography mb={2}>Total Earned</Typography>
              <Typography variant="h5">${totalEarned}</Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
