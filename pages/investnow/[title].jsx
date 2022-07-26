import { Button, Grid, MenuItem, TextField, Typography } from "@mui/material";
import { Paper, Container, Box } from "@mui/material";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { lists } from "../../constants";
import { sendEmail } from "../../backend/herotofu";
import { useAuth } from "../../context/AuthContext";

const DEPOSIT_FORM_ENDPOINT =
  "https://public.herotofu.com/v1/940e2700-0cdb-11ed-9bdb-53c785fa3343";

const Invest = () => {
  const wallets = [
    { name: "Bitcoin", address: "bc1qg2c9rmuy4uyzvlpevnel0k9mlvnnr0gs0z8wud" },
    { name: "Ethereum", address: "0xE4Dc81990cD63e00322F52897aF08AA13767C381" },
    {
      name: "Bitcoin Cash",
      address: "qqwj2n7j272tsjpg8f4z343rvpr33f2m6yf5qjauqe",
    },
  ];
  const router = useRouter();
  const { title } = router.query;
  const plan = lists.investmentPlans.find((plan) => plan.title === title);
  const amountRef = useRef();
  const cryptoRef = useRef();
  const [showOrder, setShowOrder] = useState(false);
  const { currentUser } = useAuth();

  const clearFields = () => {
    amountRef.current.value = null;
    cryptoRef.current.value = null;
  };
  return (
    <Container maxWidth="xs">
      <Paper
        sx={{
          mt: 4,
          p: 2,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6">Investment Plan</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Plan" fullWidth value={plan.title} disabled />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Amount" inputRef={amountRef} />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Interest"
              fullWidth
              value={plan.percent}
              disabled
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              select
              label="Cryptocurrency"
              inputRef={cryptoRef}
              fullWidth
            >
              {wallets.map(({ name }, index) => (
                <MenuItem key={index} value={name}>
                  {name}
                </MenuItem>
              ))}
            </TextField>{" "}
          </Grid>
          <Grid item xs={12}>
            <Button
              onClick={() => {
                setShowOrder(!showOrder);
                sendEmail(
                  {
                    plan: plan.title,
                    crypto: cryptoRef.current.value,
                    amount: amountRef.current.value,
                    user: currentUser.email,
                  },
                  DEPOSIT_FORM_ENDPOINT
                );
                clearFields();
              }}
            >
              Submit
            </Button>

            {showOrder ? (
              <Typography m my={4} variant="body2">
                Transfer {amountRef.current.value} {cryptoRef.current.value} to
                this address{" "}
                {wallets.find((wallet) => {
                  wallet.address === cryptoRef.current.value;
                })}
              </Typography>
            ) : null}
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Invest;
