import { Typography, Container } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Container>
      <Typography variant="h3" my={3}>
        Zipo Aid Investments
      </Typography>
      <Typography>
        Zipo Aid Investment Trader provides reliable, consistent and profitable
        financial assistance to our clients around the world. Investments in our
        trading platforms are securely secured and managed only by our
        experienced traders to ensure better risk management and profitable
        trading.
      </Typography>
      <br />
      <Typography>
        Stay connected to the market with our web mobile wallet. Featuring
        advanced order types and analytical tools for experienced traders, as
        well as a simple buy & sell interface for those just getting started.
      </Typography>
      <br />
      <Typography>
        We provide premium access to crypto trading for both individuals and
        institutions through high liquidity, reliable order execution and
        constant uptime.
      </Typography>
    </Container>
  );
};

export default About;
