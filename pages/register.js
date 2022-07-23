import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";
import SignUpAppbar from "../components/SignUpAppbar";
import { SignUpTextField, SignUpButton } from "../styles/styles";

const Register = () => {
  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const { signUp } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signUp(emailRef.current.value, passwordRef.current.value);
      router.push("/profile");
    } catch (error) {
      setError("Failed to create an account");
      console.log(error);
    }
    setLoading(false);
  }
  return (
    <>
      <SignUpAppbar
        text={"Sign In"}
        onClick={() => {
          router.push("/signin");
        }}
      />

      <Container maxWidth="sm" justifyContent="center">
        <Box textAlign="center" m>
          <Typography variant="h4">Welcome To Zipo-Aid</Typography>
          <Typography variant="subtitle1">
            To Begin, Create Your Account
          </Typography>
        </Box>

        <Box display="flex" justifyContent="space-between">
          <SignUpTextField
            variant="standard"
            fullWidth
            label="Enter your email"
            inputRef={emailRef}
            sx={{ marginRight: 2 }}
          />

          <SignUpTextField
            variant="standard"
            fullWidth
            label="Enter Username"
            inputRef={usernameRef}
          />
        </Box>

        <SignUpTextField
          variant="standard"
          fullWidth
          label="Enter Password"
          inputRef={passwordRef}
        />

        <SignUpTextField
          variant="standard"
          fullWidth
          label="Confirm Password"
          inputRef={confirmPasswordRef}
        />

        <Box m={4}>
          <Typography m variant="caption" textAlign="center" color="GrayText">
            By clicking the 'Register account' button you agree to our Privacy
            Policy and Terms of Service.{" "}
          </Typography>
        </Box>

        <SignUpButton
          fullWidth
          disabled={loading}
          onClick={handleSubmit}
          variant="contained"
        >
          Register Account
        </SignUpButton>
      </Container>
    </>
  );
};

export default Register;
