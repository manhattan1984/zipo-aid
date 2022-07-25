import { Grid, Paper, Box, Typography, Container } from "@mui/material";
import React from "react";

const Dashboard = () => {
  return (
    <Container>
      <Typography variant="h6" my={2}>
        Welcome, User
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
              <Typography variant="h5">$0.00</Typography>
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
              <Typography variant="h5">N/A</Typography>
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
              <Typography variant="h5">N/A</Typography>
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
              <Typography variant="h5">N/A</Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
