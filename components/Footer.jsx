import { Email, Telegram } from "@mui/icons-material";
import {
  Box,
  Typography,
  Grid,
  Divider,
  IconButton,
  SvgIcon,
} from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

const Footer = () => {
  const router = useRouter();
  return (
    <Box
      color="white"
      sx={{
        bgcolor: "#181a20",
      }}
      p={2}
      mt={3}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={4}>
          <Typography variant="h6" my={2}>
            About
          </Typography>

          <Typography
            variant="body2"
            onClick={() => {
              router.push("/about");
            }}
          >
            About Us
          </Typography>
          <Typography variant="body2" my>
            Contact Us
          </Typography>
          <Typography variant="body2">FAQs</Typography>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Typography variant="h6" my={2}>
            Legal
          </Typography>

          <Typography variant="body2">Privacy Policy</Typography>
          <Typography variant="body2" my>
            Terms of Service
          </Typography>
          <Typography variant="body2">Certificate of Incorporation</Typography>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Typography variant="h6">Contact</Typography>
          <IconButton>
            <Telegram color="primary" />
          </IconButton>
          <Box display="flex" ml>
            <SvgIcon component={Email} color="primary" />
            <Typography ml variant="caption">
              ZipoAidInvestmentz@gmail.com
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Divider />
      <Typography variant="body1" my>
        This website can be accessed worldwide however the information on the
        website is related to Kale Crypto Investment A/S and is not specific to
        any entity of miningtrust. All clients will directly engage with
        miningtrust A/S and all client agreements will be entered into with
        miningtrust A/S and thus governed by Danish Law.
      </Typography>
      <br />
      <Typography variant="body2">
        Apple and the Apple logo are trademarks of Apple Inc, registered in the
        US and other countries and regions. App Store is a service mark of Apple
        Inc. Google Play and the Google Play logo are trademarks of Google LLC.
      </Typography>

      <Divider />

      <Typography
        sx={{
          mt: 2,
        }}
        variant="caption"
        textAlign="center"
      >
        All rights reserved © 2022 ZipoAid. NMLS #1991139{" "}
      </Typography>
    </Box>
  );
};

export default Footer;
