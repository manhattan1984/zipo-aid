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
    { name: "Bitcoin", address: "bc1q2wv5g8pndyxk6t4uaeqnmth9gf8uns2a4wwwmd" },
    { name: "Ethereum", address: "0x2DCD8d38c0De3e9841D86BC15Cc90A1D4FdC8D99" },
    {
      name: "XRP",
      address: "rwAL3ZNtMN3PjYHgLYgwvJs67KqAVjBsqB",
    },
    {
      name: "Litecoin",
      address: "ltc1q77axw5qhhn0lala6u36c78vypw5ssxvymzyg6z",
    },
    {
      name: "Bitcoin Cash",
      address: "qpm67pwa8egfug3s0uh03n0uje972xfjdyvn0766pc",
    },
    {
      name: "Solana",
      address: "eYNPJUg82A2XaasHs6T9goCoeGq3DVCBV6oz5pxYaq2",
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
