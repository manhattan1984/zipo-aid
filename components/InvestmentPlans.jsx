import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { useTranslation } from "react-i18next";
import lists from "../constants/lists";
import { useAuth } from "../context/AuthContext";
import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import { db } from "../backend/firebase";
import Loading from "./Loading";

//   import { useAuth } from "../context/AuthContext";

const InvestmentPlans = ({ children }) => {
  const InvestmentItem = ({ id, title, percent, time, min, max }) => {
    //   const { addInvestment } = useAuth();
    const router = useRouter();
    const { currentUser } = useAuth();

    const { t } = useTranslation();

    const handleInvestButton = () => {
      // addInvestment(title);

      if (!currentUser) {
        return router.push("/register");
      }

      console.log("id", id);
      router.push({ pathname: "/investnow/[title]", query: { title } });
    };

    return (
      <Grid item xs={12} md={6} lg={4}>
        <Card>
          <CardContent>
            <Typography variant="h4" color="secondary">
              {title}
            </Typography>
            <Typography variant="h5">{percent}%</Typography>
            <Typography variant="body1">{time}</Typography>
            <Typography variant="body2">{t("cap_ret")}</Typography>
            <Typography variant="body2">{t("247")}</Typography>

            <Box>
              <Typography variant="body1">
                {t("min")} {min}
              </Typography>
              <Typography variant="body1">
                {t("max")} {max}
              </Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Button onClick={handleInvestButton} color="secondary">
              {t("invest_now")}
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  };

  const [plans, setPlans] = useState([]);

  useEffect(() => {
    console.log("hello");
    getDocs(collection(db, "investmentPlans"))
      .then((snapshot) => {
        const investmentPlans = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setPlans(investmentPlans);
        console.log("plans", plans);
      })
      .catch((e) => console.log(e));

    console.log(plans);
  }, []);

  return plans ? (
    <Container align="center">
      {children}
      <Grid container spacing={2} my={1}>
        {plans.map(({ id, title, percent, time, min, max }, index) => (
          <InvestmentItem
            id={id}
            title={title}
            percent={percent}
            time={time}
            min={min}
            max={max}
            key={index}
          />
        ))}
      </Grid>
    </Container>
  ) : (
    <Loading />
  );
};

export default InvestmentPlans;
