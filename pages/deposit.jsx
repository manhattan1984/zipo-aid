import {
  Container,
  Box,
  Paper,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import React, { useRef, useState } from "react";

const Deposit = () => {
  const crypto = useRef();
  const amount = useRef();
  const [showOrder, setShowOrder] = useState(false);

  const wallets = [
    { name: "Bitcoin", address: "xxxb" },
    { name: "Ethereum", address: "xxxe" },
    { name: "Litecoin", address: "xxxl" },
  ];
  return (
    <>
      <Typography variant="h4">Deposit</Typography>

      <Paper>
        <Box m pb={10} pt={2}>
          <Typography gutterBottom variant="h6">
            Select Crypto And Enter Amount
          </Typography>

          <Box m my={2}>
            <TextField
              select
              label="CryptoCurrencies"
              inputRef={crypto}
              variant="standard"
              label="Cryptocurrency"
              fullWidth
            >
              {wallets.map(({ name }, index) => (
                <MenuItem key={index} value={name}>
                  {name}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              inputRef={amount}
              variant="standard"
              label="Enter Amount"
              type="number"
              fullWidth
            />
          </Box>

          <Button
            onClick={() => {
              setShowOrder(!showOrder);
              console.log(`Transfer ${amount.current.value} ${
                crypto.current.value
              } to this
             address
             ${
               wallets.find(({ name }) => name === crypto.current.value).address
             }`);
            }}
          >
            Confirm
          </Button>

          {showOrder ? (
            <Typography m my={4}>
              Transfer {amount.current.value} {crypto.current.value} to this
              address{" "}
              {
                wallets.find(({ name }) => name === crypto.current.value)
                  .address
              }
            </Typography>
          ) : null}
        </Box>
      </Paper>
    </>
  );
};

export default Deposit;
