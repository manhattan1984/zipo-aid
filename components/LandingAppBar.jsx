import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import Logo from "../public/zipo-aid.svg";
import Image from "next/image";
const LandingAppBar = ({ pages }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <AppBar position="static" color="transparent">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Grid container>
              <Grid item xs={6} md={3}>
                <Image src={Logo} width={150} height={50} />
              </Grid>
              <Grid
                item
                xs={6}
                display={{ xs: "flex", md: "none" }}
                justifyContent="flex-end"
              >
                <IconButton size="large" onClick={toggleMenu}>
                  <MenuIcon />
                </IconButton>
              </Grid>
              <Grid
                item
                md={9}
                display={{ xs: "none", md: "flex" }}
                justifyContent="flex-end"
              >
                {pages.map(({ page, link }) => (
                  <Button to={link} key={page} color="secondary">
                    {page}
                  </Button>
                ))}
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>

      {menuOpen ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
          justifyContent="center"
          alignItems="center"
        >
          {pages.map(({ page, link }) => (
            <Button
              color="secondary"
              to={link}
              key={page}
              sx={{ width: "100%" }}
              onClick={toggleMenu}
            >
              {page}
            </Button>
          ))}
        </Box>
      ) : null}
    </>
  );
};

export default LandingAppBar;
