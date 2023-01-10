import {
  Box,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";
import SignUpAppbar from "./SignUpAppbar";
import { SignUpTextField, SignUpButton } from "../styles/styles";
import { useSnackbar } from "notistack";
import { sendEmail } from "../backend/herotofu";
import { useTranslation } from "react-i18next";
import countries from "./countries";
import { sendEmailToUser } from "../utilities/emailSender";

const Registration = () => {
  const { t } = useTranslation();
  const emailRef = useRef();
  const userNameRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const referralRef = useRef("");
  const { signUp } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);
  const router = useRouter();
  const { referral } = router.query;
  const { enqueueSnackbar } = useSnackbar();

  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  const handleChangeCountry = (event) => {
    setCountry(event.target.value);
  };

  const handleChangeRegion = (event) => {
    setRegion(event.target.value);
  };

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      enqueueSnackbar(t("no_match_password"));
    }

    if (
      !(
        userNameRef.current.value ||
        emailRef.current.value ||
        firstNameRef.current.value ||
        lastNameRef.current.value
      )
    ) {
      enqueueSnackbar(t("complete_form"));
    }

    try {
      setError("");
      setLoading(true);
      const correct = await signUp(
        emailRef.current.value,
        passwordRef.current.value,
        firstNameRef.current.value,
        lastNameRef.current.value,
        userNameRef.current.value,
        referralRef.current.value
      );
      correct
        ? router.push("/profile") &&
          sendEmailToUser(
            emailRef.current.value,
            t("registration_subject"),
            t("registration_message", {
              email: emailRef.current.value,
              password: passwordRef.current.value,
            })
          )
        : enqueueSnackbar(t("fill_form"));
    } catch (error) {
      setError("Failed to create an account");
      console.log(error);
    }
    setLoading(false);
  }

  //   Affect
  useEffect(() => {
    console.log(referral);
    referralRef ? (referralRef.current.value = referral || "") : "";
  });
  // const REGISTER_FORM_ENDPOINT =
  //   "https://public.herotofu.com/v1/64f91510-0cdb-11ed-9bdb-53c785fa3343";

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
          <Typography variant="h4">{t("welcome")}</Typography>
          <Typography variant="subtitle1">{t("begin")}</Typography>
        </Box>

        <Box display="flex" justifyContent="space-between">
          <SignUpTextField
            variant="standard"
            fullWidth
            type="email"
            label={t("email")}
            inputRef={emailRef}
          />
        </Box>
        <SignUpTextField
          variant="standard"
          fullWidth
          label={t("username")}
          inputRef={userNameRef}
        />

        <Box display="flex" justifyContent="space-between">
          <SignUpTextField
            sx={{
              mr: 1,
            }}
            variant="standard"
            fullWidth
            label={t("f_name")}
            inputRef={firstNameRef}
          />

          <SignUpTextField
            variant="standard"
            fullWidth
            label={t("l_name")}
            inputRef={lastNameRef}
          />
        </Box>

        <SignUpTextField
          variant="standard"
          fullWidth
          label={t("password")}
          type="password"
          inputRef={passwordRef}
        />

        <SignUpTextField
          variant="standard"
          fullWidth
          label={t("c_password")}
          type="password"
          inputRef={confirmPasswordRef}
        />

        <Box mt={4}>
          <FormControl sx={{ mr: 2 }}>
            <InputLabel>{t("country")}</InputLabel>
            <Select
              sx={{ width: "300px" }}
              value={country}
              variant="standard"
              onChange={handleChangeCountry}
            >
              {countries.map((country) => (
                <MenuItem
                  value={country.countryName}
                  key={country.countryShortCode}
                >
                  {country.countryName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ mt: 2 }}>
            <InputLabel>{t("region")}</InputLabel>
            <Select
              variant="standard"
              value={region}
              onChange={handleChangeRegion}
              disabled={!country}
              sx={{ width: "300px" }}
            >
              {country
                ? countries
                    .find(({ countryName }) => countryName === country)
                    .regions.map((region) => (
                      <MenuItem value={region.name} key={region.shortCode}>
                        {region.name}
                      </MenuItem>
                    ))
                : []}
            </Select>
          </FormControl>
        </Box>

        <SignUpTextField
          variant="standard"
          fullWidth
          label={t("referred_by")}
          inputRef={referralRef || ""}
        />

        <Box m={4}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={() => {
                    setChecked(!checked);
                    console.log(checked);
                  }}
                />
              }
              label={t("register_caption")}
            />
          </FormGroup>
        </Box>

        <SignUpButton
          fullWidth
          disabled={loading || !checked}
          onClick={handleSubmit}
          variant="contained"
        >
          {t("register")}
        </SignUpButton>
      </Container>
    </>
  );
};

export default Registration;
