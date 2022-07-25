import { Telegram } from "@mui/icons-material";
import { Box, Typography, Grid, Divider, IconButton } from "@mui/material";
import React from "react";

const Footer = () => {
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

          <Typography variant="body2">About Us</Typography>
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
    </Box>
  );
};

export default Footer;
