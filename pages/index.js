import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Divider,
} from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import MyAppBar from "../components/MyAppBar";
import styles from "../styles/Home.module.css";
import Ease from "../public/ease.webp";
import Bank from "../public/bank.webp";
import Secure from "../public/secure.webp";
import Coins from "../public/coins.avif";
import Signals from "../public/signals.avif";
import { useRouter } from "next/router";
import InvestmentPlans from "../components/InvestmentPlans";
import MarketWatch from "../public/marketwatch.svg";
import Reuters from "../public/reuters.svg";
import TheGuardian from "../public/theguardian.svg";
import Bloomberg from "../public/bloomberg.svg";

export default function Home() {
  const router = useRouter();
  return (
    <>
      {/* <Container> */}
      <Box className={styles.hero}>
        <Grid container>
          <Grid item xs={12} md={6} color="white" m={2}>
            <Typography variant="h5">Buy & trade on the</Typography>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                color: "primary.main",
              }}
            >
              original crypto exchange.
            </Typography>

            <Typography variant="body">
              Zipo Aid Investment Trader provides reliable, consistent and
              profitable financial assistance to our clients around the world.
              Investments in our trading platforms are securely secured and
              managed only by our experienced traders to ensure better risk
              management and profitable trading.
            </Typography>

            <Button
              sx={{ display: "block" }}
              onClick={() => {
                router.push("/register");
              }}
            >
              Get Started
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            {/* <Box className={styles.container}>
              <img src="/phone.png" className={styles.phone} />
              <video playsInline className={styles.video}>
                <source src="/zipo.mp4" type="video/mp4" />
              </video>
            </Box> */}
          </Grid>
        </Grid>
      </Box>

      <Box
        textAlign="center"
        my={3}
        display={{ md: "flex" }}
        justifyContent="center"
      >
        <Box mb={3}>
          <Image src={Ease} />
          <Typography my={2} variant="h6" color="primary.main">
            Ease of Trading
          </Typography>
          <Typography mb>Intuitive Interface</Typography>
          <Typography mb>Instant Deposit Options</Typography>
          <Typography mb>Withdraw funds to any other wallet</Typography>
        </Box>

        <Box mb={3}>
          <Image src={Secure} />
          <Typography my={2} variant="h6" color="primary.main">
            Institutional-Grade Security
          </Typography>
          <Typography mb>98% of assets stored safely offline</Typography>
          <Typography mb>Highly encrypted personal data</Typography>
          <Typography mb>Whitelisting and transaction confirmation</Typography>
        </Box>

        <Box mb={3}>
          <Image src={Bank} />
          <Typography my={2} variant="h6" color="primary.main">
            Proven Reliability
          </Typography>
          <Typography mb>Exchanging bitcoin since 2018</Typography>
          <Typography mb>24/7 dedicated support</Typography>
          <Typography mb>Industry-Leading Uptime</Typography>
        </Box>
      </Box>

      <InvestmentPlans>
        <Typography variant="h6">ZIPO AID INVESTMENT PLANS</Typography>
      </InvestmentPlans>

      <Container>
        <Box display={{ md: "flex" }} my={4}>
          {/* <Image src={Coins} /> */}
          <Box textAlign="left">
            <Typography variant="h4">
              Unlimited access with our web mobile wallet.
            </Typography>
            <Typography variant="h6" my={2}>
              ADVANCED TOOLS PACKED IN AN INTUITIVE INTERFACE
            </Typography>
            <Typography color="GrayText" mb={3}>
              Stay connected to the market with our web mobile wallet. Featuring
              advanced order types and analytical tools for experienced traders,
              as well as a simple buy & sell interface for those just getting
              started.
            </Typography>

            <Button
              onClick={() => {
                router.push("/register");
              }}
            >
              Register Account
            </Button>
          </Box>
        </Box>
      </Container>

      <Box mx={2} my={2}>
        <Typography variant="h6" color="GrayText">
          As Seen On
        </Typography>
        <Box
          display="flex"
          justifyContent="space-around"
          sx={{ flexWrap: "wrap" }}
        >
          <Image src={Reuters} />
          <Image src={MarketWatch} />
          <Image src={Bloomberg} />
          <Image src={TheGuardian} />
        </Box>
      </Box>

      <Box display={{ md: "flex" }} sx={{ background: "#2a2d2f" }}>
        {/* <Image src={Signals} /> */}

        <Container>
          <Box color="white">
            <Typography variant="h4" color="primary.main" my={3} pt>
              Advanced trading tools.
            </Typography>

            <Typography variant="h6" my={3}>
              PROFESSIONAL ACCESS, NON-STOP AVAILABILITY
            </Typography>

            <Typography my={3}>
              We provide premium access to crypto trading for both individuals
              and institutions through high liquidity, reliable order execution
              and constant uptime.
            </Typography>

            <Typography variant="h6" my={3}>
              A RANGE OF POWERFUL APIS
            </Typography>
            <Typography my={3}>
              Set up your own trading interface or deploy your algorithmic
              strategy with our high-performance FIX and HTTP APIs. Connect to
              our WebSocket for real-time data streaming.{" "}
            </Typography>

            <Typography variant="h6" my={3}>
              CONSTANT SUPPORT
            </Typography>

            <Typography my={3}>
              Premium 24/7 support available to all customers worldwide by phone
              or email. Dedicated account managers for partners.
            </Typography>

            <Box display="flex" my={3} pb={3}>
              <Button>FAQ</Button>
              <Button
                onClick={() => {
                  router.push("/register");
                }}
              >
                Get Started
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* </Container> */}
    </>
  );
}
