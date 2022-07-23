import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  Grid,
  IconButton,
  Toolbar,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import React, { useState } from "react";
// import Menu, { LINKS } from "./Menu";
import { useRouter } from "next/router";
import Image from "next/image";
import Logo from "../public/zipo-aid.svg";
import ProfileMenu from "./ProfileMenu";

function setActive(router, link) {
  return router.pathname == link ? { borderBottom: 1, borderRadius: 0 } : "";
}

function MenuDrawer({ children, open, toggleMenu }) {
  return (
    <React.Fragment>
      <Drawer anchor="right" open={open} onClose={toggleMenu}>
        {children}
      </Drawer>
    </React.Fragment>
  );
}

const MyAppBar = ({ links }) => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <AppBar position="sticky" sx={{ bgcolor: "white" }}>
        <Toolbar>
          <Grid container>
            <Grid item xs={6} md={4}>
              <Link href="/" passHref>
                <Image src={Logo} height={50} width={150} />
              </Link>
            </Grid>
            {/* Mobile */}
            <Grid
              item
              xs={6}
              display={{ xs: "flex", md: "none" }}
              justifyContent="flex-end"
            >
              <IconButton onClick={toggleMenu}>
                <MenuIcon color="primary" />
              </IconButton>
            </Grid>
            {/* Larger */}
            <Grid item md={8} display={{ xs: "none", md: "flex" }}>
              <Grid container justifyContent="flex-end">
                {links.map(({ name, link }) => (
                  <Link href={link} key={name} passHref>
                    <Button
                      sx={{
                        ...setActive(router, link),
                      }}
                    >
                      {name}
                    </Button>
                  </Link>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <MenuDrawer open={menuOpen} toggleMenu={toggleMenu}>
        <Container sx={{ width: "100vw", zIndex: "tooltip" }}>
          <Grid container>
            <Grid container justifyContent="space-between">
              <Grid item>
                <Link href="/" passHref>
                  <Image src={Logo} height={50} width={150} />
                </Link>
              </Grid>

              <Grid item>
                <IconButton onClick={toggleMenu}>
                  <CloseIcon />
                </IconButton>
              </Grid>
            </Grid>

            <Grid
              container
              direction="column"
              justifyContent="space-around"
              alignItems="flex-start"
              my={4}
              spacing={2}
            >
              {links.map(({ name, link }, index) => (
                <Grid item key={index}>
                  <Link href={link} passHref>
                    <MuiLink
                      sx={{
                        ...setActive(router, link),
                        textDecoration: "none",
                      }}
                      onClick={() => {
                        toggleMenu();
                      }}
                    >
                      <Typography variant="h6">{name}</Typography>
                    </MuiLink>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Container>
      </MenuDrawer>
    </>
  );
};

export default MyAppBar;
