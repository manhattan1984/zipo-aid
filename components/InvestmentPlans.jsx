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
import lists from "../constants/lists";
import { useAuth } from "../context/AuthContext";
//   import { useAuth } from "../context/AuthContext";

const InvestmentPlans = ({ children }) => {
  const InvestmentItem = ({ title, percent, time, min, max }) => {
    //   const { addInvestment } = useAuth();
    const router = useRouter();
    const { currentUser } = useAuth();

    const handleInvestButton = () => {
      // addInvestment(title);

      if (!currentUser) {
        return router.push("/register");
      }
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
            <Typography variant="body2">Capital Returns</Typography>
            <Typography variant="body2">24/7 Support</Typography>

            <Box>
              <Typography variant="body1">Min: {min}</Typography>
              <Typography variant="body1">Max: {max}</Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Button onClick={handleInvestButton} color="secondary">
              Invest Now
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  };
  return (
    <Container align="center">
      {children}
      <Grid container spacing={2} my={1}>
        {lists.investmentPlans.map(
          ({ title, percent, time, min, max }, index) => (
            <InvestmentItem
              title={title}
              percent={percent}
              time={time}
              min={min}
              max={max}
              key={index}
            />
          )
        )}
      </Grid>
    </Container>
  );
};

export default InvestmentPlans;
