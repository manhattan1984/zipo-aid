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
import { MarketOverview } from "react-ts-tradingview-widgets";

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

        <Box width="100%" my={3}>
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

        <Button
          onClick={() => {
            router.push("/dashboard");
          }}
        >
          Go To Dashboard
        </Button>

        <Box my={2}>
          <MarketOverview
            colorTheme="dark"
            height={400}
            width="100%"
            showFloatingTooltip
          ></MarketOverview>
        </Box>

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
