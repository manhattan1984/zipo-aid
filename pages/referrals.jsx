import { Box, Container, Link, Paper, Typography } from "@mui/material";
import { doc, getDoc } from "firebase/firestore";
import React, { useEffect } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { db } from "../backend/firebase";
import { useAuth } from "../context/AuthContext";

const Referrals = () => {
  const { t } = useTranslation();
  const { getUsername, username, currentUser } = useAuth();
  const [referrals, setReferrals] = useState([]);
  useEffect(() => {
    if (currentUser) {
      getUsername();
      getReferrals();
    }
  }, []);

  const getReferrals = async () => {
    const docRef = doc(db, "users", currentUser.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const refs = docSnap.data().referrals;

      setReferrals(refs);
      // console.log(refs);

      // refs.map(async (ref) => {
      //   console.log("refs", ref);

      //   const user = await getUser(ref);

      //   const referral = referrals.find(
      //     (referral) => referral.uid === user.uid
      //   );

      //   if (!referral) {
      //     setReferrals([...referrals, user]);
      //   }
      // });
    }
  };

  const getUser = async (user) => {
    const docRef = doc(db, "users", user);
    try {
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const { username, totalDeposit, uid } = docSnap.data();
        const user = { username, totalDeposit, uid };
        // console.log(user);
        return user;
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <Paper
        sx={{
          mt: 3,
        }}
      >
        <Box p pb={3}>
          <Typography gutterBottom variant="h4">
            {t("referral_link")}
          </Typography>
          <Link variant="caption">
            https://www.zipoaidinvestments/register/{username}
          </Link>
        </Box>
        <Box mx my>
          <Typography>Total Referrals: {referrals?.length || 0}</Typography>
        </Box>
        <Box mx sx={{ width: "50%" }}>
          <Typography variant="h5" my>
            Referrals
          </Typography>
          <Box my={2} display="flex" justifyContent="space-between">
            <Typography>No.</Typography>
            <Typography>Username</Typography>
            <Typography>Amount</Typography>
          </Box>
          {referrals?.map((ref, index) => (
            <Box key={index} display="flex" justifyContent="space-between">
              <Typography>{index + 1}</Typography>
              <Typography>{ref}</Typography>
              <Typography>$1000</Typography>
            </Box>
          ))}
        </Box>
      </Paper>
    </Container>
  );
};

export default Referrals;
