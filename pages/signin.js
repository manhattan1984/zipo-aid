import { Container, Box, Button, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import SignUpAppbar from "../components/SignUpAppbar";
import { SignUpButton, SignUpTextField } from "../styles/styles";

const signin = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { logIn } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await logIn(emailRef.current.value, passwordRef.current.value);
      router.push("/profile");
    } catch (error) {
      setError("Failed to sign in");
      console.log(error);
    }
    setLoading(false);
  }
  return (
    <>
      <SignUpAppbar
        text="Register"
        onClick={() => {
          router.push("/register");
        }}
      />
      <Container maxWidth="sm">
        <Box textAlign="center" m>
          <Typography variant="h4">Log In</Typography>
          <Box display="flex" justifyContent="center">
            <Typography variant="subtitle1" mr>
              Don't have an account?
            </Typography>
            <Typography variant="subtitle1">Register now for free</Typography>
          </Box>
        </Box>
        <SignUpTextField variant="standard" label="Email" inputRef={emailRef} />
        <SignUpTextField
          variant="standard"
          type="password"
          label="Password"
          inputRef={passwordRef}
        />
        <Box display="flex" justifyContent="flex-end" width="100%" mt={2}>
          <Button size="small">Forgot Password?</Button>
        </Box>

        <Box textAlign="center">
          <Typography
            my={2}
            textAlign="center"
            variant="caption"
            color="GrayText"
          >
            This site is protected by hCaptcha and its Privacy Policy and Terms
            of Service apply.{" "}
          </Typography>
        </Box>

        <SignUpButton
          fullWidth
          disabled={loading}
          variant="contained"
          onClick={handleSubmit}
        >
          Sign In
        </SignUpButton>
        <SignUpButton
          fullWidth
          onClick={() => {
            router.push("/register");
          }}
        >
          Register
        </SignUpButton>
      </Container>
    </>
  );
};

export default signin;
