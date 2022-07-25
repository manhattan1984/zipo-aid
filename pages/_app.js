import "../styles/globals.css";
import { Container } from "@mui/material";
import { AuthProvider } from "../context/AuthContext";
import Footer from "../components/Footer";
import MyAppBar from "../components/MyAppBar";
import { ThemeProvider } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { myTheme } from "../styles/styles";
import { SnackbarProvider } from "notistack";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={myTheme}>
      <CssBaseline />
      <SnackbarProvider maxSnack={2}>
        <AuthProvider>
          <MyAppBar />
          <Component {...pageProps} />
          <Footer />
        </AuthProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default MyApp;
