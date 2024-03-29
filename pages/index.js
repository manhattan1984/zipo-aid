import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Divider,
  Avatar
} from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import MyAppBar from "../components/MyAppBar";
import styles from "../styles/Home.module.css";
import Ease from "../public/ease.webp";
import Bank from "../public/bank.webp";
import Secure from "../public/secure.webp";
import { useRouter } from "next/router";
import InvestmentPlans from "../components/InvestmentPlans";
import MarketWatch from "../public/marketwatch.svg";
import Reuters from "../public/reuters.svg";
import TheGuardian from "../public/theguardian.svg";
import Bloomberg from "../public/bloomberg.svg";
import { useTranslation } from "react-i18next";
import { useSnackbar } from "notistack"
import { useEffect, useState } from "react";
import { Alert } from "@mui/material";

export default function Home() {
  const router = useRouter();
  const { t } = useTranslation();

  const [showAlert, setShowAlert] = useState(false)

  const reviews = [
    { name: "Lincoln", body: t("review_1"), image: "https://images.unsplash.com/photo-1552642986-ccb41e7059e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" },
    { name: "Marcus", body: t("review_2"), image: "https://images.unsplash.com/photo-1585807515950-bc46d934c28b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" },
    { name: "Genevieve", body: t("review_3"), image: "https://images.unsplash.com/photo-1588887563897-7809995fe9b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80" }
  ]

  const ReviewItem = ({ image, name, body }) => {
    return (
      <Grid item textAlign="center" xs={12} md={4}>
        <Box justifyContent="center" display="flex">
          <Avatar sx={{width: 86, height: 86}} src={image}  />
        </Box>
        <Typography variant="h5" my={2}>{name}</Typography>
        <Typography variant="body1">{body}</Typography>

        <Divider sx={{my: 2}} />
      </Grid>
    )
  }


  useEffect(() => {
    const interval = setInterval(() => { setShowAlert(!showAlert) }, 10000)

    return () => clearInterval(interval)


  })

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


  const getAlertText = () => {
    const names = [
      "David", "Susan", "Luke", "Ivanovich",
      "Deniz", "Isra", "Emre", "Ekaterina", "Inessa", "Алла",
      "Антоніна", "Francisco", "Santiago", "Afonso", "Isabella",
      "Luca", "Rodrigo",
"Naterade",
"Dave",
"George",
"Micheal",
"Farah",
"Jason",
"Thomas",
"Gary",
"Feldman",
"Francis",
"Herbert",
"George",
"Ruden",
"Herbert"
    ]

    const actions = [
      "just deposited", "just withdrew", "just invested", "just recieved a bonus of"
    ]

    const amounts = [
      1000, 2000, 10000
    ]

    const countries = ["Russia", "USA", "England", "Spain", "Ukraine", "Portugal", "Turkey" ]

    const name = names[getRandomInt(names.length)]

    const action = actions[getRandomInt(actions.length)]

    const country = countries[getRandomInt(countries.length)]

    const amount = getRandomInt(100000)

    return `${name} from ${country} ${action} $${amount}` 
  }

  return (
    <>
      {/* <Container> */}
      <Box className={styles.hero}>
        {showAlert ? <Alert sx={{
          position: "fixed",
          width: "100%",
          zIndex: "tooltip"
        }}>
          {getAlertText()}
        </Alert> : null}

        <div className="bg-neutral-890 text-white flex flex-col gap-2 py-8 px-2">
        <div className="flex justify-between">
          <p className="text-xl">Trusted Site</p>
        </div>
        <div className="">
          <p className="text-3xl">Earn your visitors' trust</p>
          <p className="text-gray-300">
            Address the security and trust concerns that cost you sales and
            convert more customers at every stage of the buyer's journey with
            TrustedSite's earned certification program.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <button className="p-2 w-full bg-green-600">Get Certified</button>
          <button className="p-2 w-full bg-neutral-700">watch the video</button>
        </div>
      </div>
        <Grid container>
          <Grid item xs={12} md={6} color="white" m={2}>
            <Typography variant="h5">{t("hero_1")}</Typography>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                color: "primary.main",
              }}
            >
              {t("hero_2")}
            </Typography>

            <Typography variant="body">{t("hero_body")}</Typography>

            <Button
              sx={{ display: "block" }}
              onClick={() => {
                router.push("/register");
              }}
            >
              Get Started
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            {/* <Box className={styles.container}>
              <img src="/phone.png" className={styles.phone} />
              <video playsInline className={styles.video}>
                <source src="/zipo.mp4" type="video/mp4" />
              </video>
            </Box> */}
          </Grid>
        </Grid>
      </Box>

      

      <Box
        textAlign="center"
        my={3}
        display={{ md: "flex" }}
        justifyContent="center"
      >
        <Box mb={3}>
          <Image src={Ease} />
          <Typography my={2} variant="h6" color="primary.main">
            {t("ease")}
          </Typography>
          <Typography mb>{t("ease_1")}</Typography>
          <Typography mb>{t("ease_2")}</Typography>
          <Typography mb>{t("ease_3")}</Typography>
        </Box>

        <Box mb={3}>
          <Image src={Secure} />
          <Typography my={2} variant="h6" color="primary.main">
            {t("security")}
          </Typography>
          <Typography mb>{t("security_1")}</Typography>
          <Typography mb>{t("security_2")}</Typography>
          <Typography mb>{t("security_3")}</Typography>
        </Box>

        <Box mb={3}>
          <Image src={Bank} />
          <Typography my={2} variant="h6" color="primary.main">
            {t("reliable")}
          </Typography>
          <Typography mb>{t("reliable_1")}</Typography>
          <Typography mb>{t("reliable_2")}</Typography>
          <Typography mb>{t("reliable_3")}</Typography>
        </Box>
      </Box>

      <InvestmentPlans>
        <Typography variant="h6">{t("z_a_invest")}</Typography>
      </InvestmentPlans>

      <Container>
        <Box display={{ md: "flex" }} my={4}>
          {/* <Image src={Coins} /> */}
          <Box textAlign="left">
            <Typography variant="h4">{t("unlimited")}</Typography>
            <Typography variant="h6" my={2}>
              {t("advanced")}{" "}
            </Typography>
            <Typography color="GrayText" mb={3}>
              {t("z_a_body")}
            </Typography>

            <Button
              onClick={() => {
                router.push("/register");
              }}
            >
              {t("register")}
            </Button>
          </Box>
        </Box>
      </Container>

      <Box mx={2} my={2}>
        <Typography variant="h6" color="GrayText">
          {t("seen")}
        </Typography>
        <Box
          display="flex"
          justifyContent="space-around"
          sx={{ flexWrap: "wrap" }}
        >
          <Image src={Reuters} />
          <Image src={MarketWatch} />
          <Image src={Bloomberg} />
          <Image src={TheGuardian} />
        </Box>
      </Box>

      {/* Reviews */}

      <Grid container spacing={2}>
        {reviews.map(({ name, body, image }) => (
        <ReviewItem name={name} body={body} image={image} key={name} />
  ))}
      </Grid>

      <Box display={{ md: "flex" }} sx={{ background: "#2a2d2f" }}>
        {/* <Image src={Signals} /> */}

        <Container>
          <Box color="white">
            <Typography variant="h4" color="primary.main" my={3} pt>
              {t("tools")}
            </Typography>

            <Typography variant="h6" my={3}>
              {t("professional")}
            </Typography>

            <Typography my={3}>{t("advanced_body")}</Typography>

            <Typography variant="h6" my={3}>
              {t("apis")}
            </Typography>
            <Typography my={3}>{t("apis_body")}</Typography>

            <Typography variant="h6" my={3}>
              {t("support")}
            </Typography>

            <Typography my={3}>{t("support_body")}</Typography>

            <Box display="flex" my={3} pb={3}>
              <Button onClick={() => {
                router.push("/faqs")
              }}>{t("faqs")}</Button>
              <Button
                onClick={() => {
                  router.push("/register");
                }}
              >
                {t("get_started")}
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* </Container> */}
    </>
  );
}
