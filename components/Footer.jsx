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
import { useTranslation } from "react-i18next";

const Footer = () => {
  const router = useRouter();
  const { t } = useTranslation();
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
            {t("about")}
          </Typography>

          <Typography
            variant="body2"
            onClick={() => {
              router.push("/about");
            }}
          >
            {t("about_us")}
          </Typography>
          <Typography variant="body2" my>
            {t("contact_us")}
          </Typography>
          <Typography variant="body2">FAQs</Typography>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Typography variant="h6" my={2}>
            {t("legal")}
          </Typography>

          <Typography variant="body2">{t("privacy_policy")}</Typography>
          <Typography variant="body2" my>
            {t("terms_of_service")}
          </Typography>
          <Typography variant="body2">{t("cert_of_inc")}</Typography>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Typography variant="h6">{t("contact")}</Typography>
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
        {t("footer_1")}
      </Typography>
      <br />
      <Typography variant="body2">{t("footer_2")} </Typography>

      <Divider />

      <Typography
        sx={{
          mt: 2,
        }}
        variant="caption"
        textAlign="center"
      >
        {t("copyright")}
      </Typography>
    </Box>
  );
};

export default Footer;
