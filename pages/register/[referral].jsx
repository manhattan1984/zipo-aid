import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../../context/AuthContext";
import SignUpAppbar from "../../components/SignUpAppbar";
import { SignUpTextField, SignUpButton } from "../../styles/styles";
import { useSnackbar } from "notistack";
import { sendEmail } from "../../backend/herotofu";

const Register = () => {
  const emailRef = useRef();
  const userNameRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const referralRef = useRef();
  const { signUp } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { referral } = router.query;
  const { enqueueSnackbar } = useSnackbar();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      enqueueSnackbar("Passwords do not match");
    }

    if (
      !(
        userNameRef.current.value ||
        emailRef.current.value ||
        firstNameRef.current.value ||
        lastNameRef.current.value
      )
    ) {
      enqueueSnackbar("Please Complete the form");
    }

    try {
      setError("");
      setLoading(true);
      const correct = await signUp(
        emailRef.current.value,
        passwordRef.current.value,
        firstNameRef.current.value,
        lastNameRef.current.value,
        userNameRef.current.value
      );
      correct
        ? router.push("/profile") &&
          sendEmail({ email: emailRef.current.value }, REGISTER_FORM_ENDPOINT)
        : enqueueSnackbar("Please Fill the Form correctly");
    } catch (error) {
      setError("Failed to create an account");
      console.log(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    referralRef.current.value = referral;
  });
  const REGISTER_FORM_ENDPOINT =
    "https://public.herotofu.com/v1/64f91510-0cdb-11ed-9bdb-53c785fa3343";

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
            type="email"
            label="Enter your email"
            inputRef={emailRef}
          />
        </Box>
        <SignUpTextField
          variant="standard"
          fullWidth
          label="Enter your username"
          inputRef={userNameRef}
        />

        <Box display="flex" justifyContent="space-between">
          <SignUpTextField
            sx={{
              mr: 1,
            }}
            variant="standard"
            fullWidth
            label="First Name"
            inputRef={firstNameRef}
          />

          <SignUpTextField
            variant="standard"
            fullWidth
            label="Last Name"
            inputRef={lastNameRef}
          />
        </Box>

        <SignUpTextField
          variant="standard"
          fullWidth
          label="Enter Password"
          type="password"
          inputRef={passwordRef}
        />

        <SignUpTextField
          variant="standard"
          fullWidth
          label="Confirm Password"
          type="password"
          inputRef={confirmPasswordRef}
        />

        <SignUpTextField
          variant="standard"
          fullWidth
          label="Referred By"
          inputRef={referralRef}
        />

        <Box m={4}>
          <Typography m variant="caption" textAlign="center" color="GrayText">
            By clicking the &apos;Register account&lsquo; button you agree to
            our Privacy Policy and Terms of Service.
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
