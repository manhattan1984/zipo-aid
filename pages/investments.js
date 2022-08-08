import { CloudCircleSharp } from "@mui/icons-material";
import { Box, Paper, SvgIcon, Typography, Container } from "@mui/material";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useAuth } from "../context/AuthContext";

const Investments = () => {
  const { t } = useTranslation();
  const { investmentHistory, getInvestmentsHistory } = useAuth();

  useEffect(() => {
    getInvestmentsHistory();
  }, []);

  const Investment = ({ plan, date, status }) => {
    return (
      <Box textAlign="center" display="flex" justifyContent="space-between">
        <Typography>Plan: {plan}</Typography>
        <Typography>Date: {date}</Typography>
        <Typography>Status: {status}</Typography>
      </Box>
    );
  };

  return (
    <Container>
      <Typography my={4} variant="h4">
        {t("investments")}
      </Typography>

      {investmentHistory ? (
        <>
          {investmentHistory.map(({ investmentPlan, date, status }, index) => (
            <Investment
              plan={investmentPlan}
              date={date}
              status={status}
              key={index}
            />
          ))}
        </>
      ) : (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          sx={{
            height: "40vh",
          }}
        >
          <Paper>
            <Box pt={7} pb={15}>
              <Typography pb={2} variant="h5" color="GrayText">
                {t("no_investments")}
              </Typography>
              <SvgIcon fontSize="large" component={CloudCircleSharp} />
            </Box>
          </Paper>
        </Box>
      )}
    </Container>
  );
};

export default Investments;
