import {
  Box,
  Button,
  Container,
  Paper,
  Typography,
  SvgIcon,
  Grid,
  Avatar,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import LandingAppBar from "../components/LandingAppBar";
import MyAppBar from "../components/MyAppBar";
import ProfileMenu, { PROFILE_LINKS } from "../components/ProfileMenu";
import {
  Cancel,
  CheckCircle,
  ContentPaste,
  Done,
  PendingActions,
} from "@mui/icons-material";
import BuyCrypto from "../public/buy-crypto.svg";
import Image from "next/image";

function setActive(router, link) {
  return router.pathname == link ? { borderBottom: 1, borderRadius: 0 } : "";
}


const Profile = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const { currentUser, logOut, usdBalance } = useAuth();

  async function handleLogOut() {
    setError("");

    try {
      await logOut();
      router.push("/");
    } catch (error) {
      setError("Failed to log out");
      console.log(error);
    }
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
     

      <Container>
        <Typography variant="h6" my={2}>
          Hi, Welcome User
        </Typography>

        {/* Balances */}

        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={3}>
            <Paper>
              <Box pb={4} pt={2} m>
                <Typography mb={2}>Available Balance</Typography>
                <Typography variant="h5">$0.00</Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Paper>
              <Box pb={4} pt={2} m>
                <Typography mb={2}>Active Investment</Typography>
                <Typography variant="h5">N/A</Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Paper>
              <Box pb={4} pt={2} m>
                <Typography mb={2}>Total Deposit</Typography>
                <Typography variant="h5">N/A</Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Paper>
              <Box pb={4} pt={2} m>
                <Typography mb={2}>Total Earned</Typography>
                <Typography variant="h5">N/A</Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        {/* End Balances */}

        <Box width="100%">
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Paper
                sx={{
                  background: "gainsboro",
                }}
              >
                <Box p={3} pb={4} display="flex" justifyContent="space-between">
                  <Typography variant="body">1. Create Account</Typography>
                  <SvgIcon component={Done} color="success" />
                </Box>
              </Paper>
            </Grid>

            <Grid item xs={12} md={4}>
              <Paper>
                <Box display="flex" justifyContent="space-between" p={3}>
                  <Typography>2. Enter The Market</Typography>
                  <Button size="small">Make a Deposit</Button>
                </Box>
              </Paper>
            </Grid>

            <Grid item xs={12} md={4}>
              <Paper>
                <Box p={3} display="flex" justifyContent="space-between">
                  <Typography>3. Start Pro Trading</Typography>
                  <Button size="small">Pro Trading</Button>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        {/* <Typography variant="h6" mt={3}>
          Portfolio
        </Typography>
        <Paper>
          <Box textAlign="center" p={2}>
            <Image src={BuyCrypto} width={200} height={200} />
            <Typography variant="body" display="block" my={2}>
              Buy cryptocurrencies to keep them safe
            </Typography>
            <Button variant="outlined" my={2}>
              Go To Pro Trading
            </Button>
          </Box>
        </Paper> */}

        {/* <Typography my={2} variant="h6">
          Watchlist
        </Typography>
        <Box>
          <Box textAlign="center">
            <SvgIcon component={ContentPaste} fontSize="large" />
          </Box>
          <Typography variant="body" display="block" textAlign="center" my={3}>
            Select your favorite cryptocurrencies to follow them here.{" "}
          </Typography>

          <Button fullWidth>Explore more cryptocurrencies</Button>
        </Box> */}

        {/* <Typography my={2}>Your Activity</Typography>
        <Paper>
          <Box display="flex" justifyContent="space-between" p={2}>
            <SvgIcon component={PendingActions} fontSize="large" />
            <Box mx={2}>
              <Typography variant="body">Transaction History</Typography>
              <Typography variant="subtitle2">
                Every deposit and withdrawal you&lsquo;ve made at Zipo-Aid.
              </Typography>
            </Box>
            <Button>View</Button>
          </Box>
        </Paper> */}
        <Paper>
          <Box my={2} p={3}>
            <Typography my={2}>Profile</Typography>
            <Box display="flex">
              <Box mx={2}>
                <Avatar>Z</Avatar>
                <Typography my={2}>$0</Typography>
              </Box>
              <Box>
                <Box>
                  <Typography mb={1} color="GrayText" variant="subtitle2">
                    Account:
                  </Typography>
                  <Typography>zipoaid</Typography>
                </Box>
                <Box my={1}>
                  <Typography color="GrayText" variant="subtitle2">
                    Status:
                  </Typography>
                  <Box>
                    <Box display="flex">
                      <SvgIcon component={CheckCircle} color="success" />
                      <Typography>Zipo-Aid Starter</Typography>
                    </Box>
                    <Box display="flex">
                      <SvgIcon component={Cancel} color="error" />
                      <Typography>Zipo-Aid User</Typography>
                    </Box>
                    <Box display="flex">
                      <SvgIcon component={Cancel} color="error" />
                      <Typography>Zipo-Aid VIP</Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box>
              <Button>Settings</Button>
              <Button>Logout</Button>
            </Box>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default Profile;
