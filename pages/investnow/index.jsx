import { Container, Typography } from "@mui/material";
import React from "react";
import InvestmentPlans from "../../components/InvestmentPlans";

const MyInvestmentPlans = () => {
  return (
    <Container>
      <InvestmentPlans>
        <Typography variant="h4" textAlign="left" mt={3}>
          {t("select_plan")}
        </Typography>
      </InvestmentPlans>
    </Container>
  );
};

export default MyInvestmentPlans;
