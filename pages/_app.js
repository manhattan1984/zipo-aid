import "../styles/globals.css";
import { Container } from "@mui/material";
import { AuthProvider } from "../context/AuthContext";
import LandingAppBar from "../components/LandingAppBar";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
