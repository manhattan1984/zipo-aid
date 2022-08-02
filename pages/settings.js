import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { t } from "i18next";
import React from "react";
import { useAuth } from "../context/AuthContext";

const Settings = () => {
  const { currentUser } = useAuth();
  return (
    <>
      <Container maxWidth="xs">
        <Paper sx={{ my: 3 }}>
          <Box p>
            <Typography my variant="h4">
              {t("settings")}
            </Typography>

            <TextField
              fullWidth
              sx={{ my: 1 }}
              value={currentUser.email}
              disabled
            />

            <TextField sx={{ my: 1 }} fullWidth label={t("bitcoin_wallet")} />
            <TextField sx={{ my: 1 }} fullWidth label={t("ethereum_wallet")} />
            <TextField
              sx={{ my: 1 }}
              fullWidth
              label={t("bitcoin_cash_wallet")}
            />
            <TextField sx={{ my: 1 }} fullWidth label={t("cardano_wallet")} />
            <TextField sx={{ my: 1 }} fullWidth label={t("ripple_wallet")} />

            <Button sx={{my: 2}}>{t("save")}</Button>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default Settings;
