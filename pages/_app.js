import "../styles/globals.css";
import { Container } from "@mui/material";
import { AuthProvider } from "../context/AuthContext";
import LandingAppBar from "../components/LandingAppBar";
import Footer from "../components/Footer";
import MyAppBar from "../components/MyAppBar";
import { ThemeProvider } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { myTheme } from "../styles/styles";

export const PAGES = [
  { name: "Pro Trading", link: "protrading" },
  { name: "Profile", link: "profile" },
  { name: "Dashboard", link: "dashboard" },
  { name: "Deposit", link: "deposit" },
  { name: "Withdrawal", link: "withdrawal" },
];

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={myTheme}>
      <CssBaseline />
      <AuthProvider>
        <MyAppBar links={PAGES} />
        <Component {...pageProps} />
        <Footer />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default MyApp;
