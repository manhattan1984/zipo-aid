import { Button, Grid, MenuItem, TextField, Typography } from "@mui/material";
import { Paper, Container, Box } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { lists } from "../../constants";
import { sendEmail } from "../../backend/herotofu";
import { useAuth } from "../../context/AuthContext";
import Bitcoin from "../../public/qr-codes/bitcoin.jpeg";
import BitcoinCash from "../../public/qr-codes/bitcoincash.jpeg";
import Ethereum from "../../public/qr-codes/ethereum.jpeg";
import Litecoin from "../../public/qr-codes/litecoin.jpeg";
import Solana from "../../public/qr-codes/solana.jpeg";
import Xrp from "../../public/qr-codes/xrp.jpeg";
import Ada from "../../public/qr-codes/ada.jpeg";
import USDT from "../../public/qr-codes/USDT.jpeg";

import { useTranslation } from "react-i18next";
import { sendEmailToUser } from "../../utilities/emailSender";
import Loading from "../../components/Loading";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../backend/firebase";
import { logEvent } from "firebase/analytics";

const wallets = [
  {
    name: "Bitcoin",
    address: "bc1q2wv5g8pndyxk6t4uaeqnmth9gf8uns2a4wwwmd",
    code: Bitcoin,
  },
  {
    name: "Ethereum",
    address: "0x2DCD8d38c0De3e9841D86BC15Cc90A1D4FdC8D99",
    code: Ethereum,
  },
  {
    name: "XRP",
    address: "rwAL3ZNtMN3PjYHgLYgwvJs67KqAVjBsqB",
    code: Xrp,
  },
  {
    name: "Litecoin",
    address: "ltc1q77axw5qhhn0lala6u36c78vypw5ssxvymzyg6z",
    code: Litecoin,
  },
  {
    name: "Bitcoin Cash",
    address: "qpm67pwa8egfug3s0uh03n0uje972xfjdyvn0766pc",
    code: BitcoinCash,
  },
  {
    name: "Solana",
    address: "eYNPJUg82A2XaasHs6T9goCoeGq3DVCBV6oz5pxYaq2",
    code: Solana,
  },
  {
    name: "Cardano",
    address:
      "addr1qxvu85hd52qh9cgknvcvfuxp4nhj7zr4qcsh7zl28ndat23kalfjzl6vsd783s948wyn5su2ug0t020vwadvudq026tqzcvqk5",
    code: Ada,
  },
  {
    name: "USDT (BEP20)",
    address: "0x2DCD8d38c0De3e9841D86BC15Cc90A1D4FdC8D99",
    code: USDT,
  },
];
const ShowPayment = ({ name, amount }) => {
  console.log("name", name);
  const wallet = wallets.find((wallet) => wallet.name === name);

  console.log(wallet);

  const { t } = useTranslation();
  return (
    <>
      {wallet ? (
        <>
          {" "}
          <Image src={wallet?.code} />
          <Typography variant="body2">
            {t("transfer", {
              amount,
              name: wallet.name,
              address: wallet.address,
            })}
          </Typography>{" "}
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

const Invest = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { title } = router.query;
  const [plan, setPlan] = useState();
  const amountRef = useRef(0);
  const [crypto, setCrypto] = useState("");
  const [showOrder, setShowOrder] = useState(false);
  const { currentUser, addInvestment } = useAuth();

  const clearFields = () => {
    amountRef.current.value = null;
    setCrypto(null);
  };

  useEffect(() => {
    console.log(title);

    const referralQuery = query(
      collection(db, "investmentPlans"),
      where("title", "==", title)
    );

    getDocs(referralQuery).then((docs) => {
      docs.docs.forEach((doc) => setPlan(doc.data()));
    });
  }, []);
  return (
    <Container maxWidth="xs">
      {plan ? (
        <Paper
          sx={{
            mt: 4,
            p: 2,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6">{t("investment_plans")}</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label={t("plan")}
                fullWidth
                value={plan.title}
                disabled
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                select
                label={t("crypto")}
                onChange={(e) => {
                  console.log("crypto", e.target.value);
                  setCrypto(e.target.value);
                }}
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
              <TextField fullWidth label={t("amount")} inputRef={amountRef} />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label={t("interest")}
                fullWidth
                value={plan.percent}
                disabled
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                onClick={() => {
                  if (crypto && amountRef.current.value) {
                    setShowOrder(!showOrder);
                    addInvestment(plan.title);
                    sendEmailToUser(
                      currentUser.email,
                      t("deposit_subject"),
                      t("deposit_message", {
                        amount: `${amountRef.current.value}`,
                        crypto: `${crypto}`,
                      })
                    );
                  }
                  // clearFields();
                }}
              >
                {t("submit")}
              </Button>

              {showOrder ? (
                <ShowPayment amount={amountRef.current.value} name={crypto} />
              ) : null}
            </Grid>
          </Grid>
        </Paper>
      ) : (
        <Loading />
      )}
    </Container>
  );
};

export default Invest;
