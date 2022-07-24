import "../styles/globals.css";
import { Container } from "@mui/material";
import { AuthProvider } from "../context/AuthContext";
import LandingAppBar from "../components/LandingAppBar";
import Footer from "../components/Footer";
import MyAppBar from "../components/MyAppBar";

export const PAGES = [
  { name: "Pro Trading", link: "protrading" },
  { name: "Profile", link: "profile" },
  { name: "Deposit", link: "deposit" },
  { name: "Withdrawal", link: "withdrawal" },
];

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <MyAppBar links={PAGES} />
      <Container>
        <Component {...pageProps} />
      </Container>
      <Footer />
    </AuthProvider>
  );
}

export default MyApp;
