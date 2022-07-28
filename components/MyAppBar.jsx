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
  Divider,
  List,
  ListItem,
  ListItemButton,
  SvgIcon,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import React, { useState } from "react";
// import Menu, { LINKS } from "./Menu";
import { useRouter } from "next/router";
import Image from "next/image";
import Logo from "../public/zipo-aid.png";
import { useAuth } from "../context/AuthContext";
import { styled } from "@mui/system";
import {
  AttachMoney,
  Group,
  History,
  Home,
  Person,
  ShowChart,
} from "@mui/icons-material";

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

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const DrawerMenu = ({ toggleMenu, links }) => {
  const router = useRouter();
  return (
    <>
      <DrawerHeader>
        <Typography color="primary" variant="h3">
          Zipo Aid
        </Typography>
        <IconButton color="primary" onClick={toggleMenu}>
          <CloseIcon />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {links.map(({ name, link, icon }) => (
          <ListItem key={name} disablePadding>
            <ListItemButton
              onClick={() => {
                router.push(link);
                toggleMenu()
              }}
            >
              <ListItemIcon>
                <SvgIcon color="secondary" component={icon} />
              </ListItemIcon>
              <ListItemText primary={name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export const authPages = [
  { name: "Dashboard", link: "/dashboard", section: "main", icon: Home },
  // Transactions
  {
    name: "Invest Now",
    link: "/investnow",
    section: "transactions",
    icon: AttachMoney,
  },
  {
    name: "Investment History",
    link: "/investments",
    section: "transactions",
    icon: History,
  },
  {
    name: "Withdraw Fund",
    link: "/withdrawal",
    section: "transactions",
    icon: AttachMoney,
  },
  {
    name: "Pro Trading",
    link: "/protrading",
    section: "transactions",
    icon: ShowChart,
  },
  // Others
  { name: "Profile", link: "/profile", section: "Others", icon: Person },
  { name: "Referrals", link: "/referrals", section: "Others", icon: Group },
];

const pages = [
  { name: "Sign In", link: "signin", section: "" },
  { name: "Register", link: "register", section: "" },
];

const MyAppBar = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const { currentUser } = useAuth();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  let links;

  currentUser ? (links = authPages) : (links = pages);

  return (
    <>
      <AppBar position="sticky" sx={{ bgcolor: "white" }}>
        <Toolbar>
          <Grid container>
            <Grid item xs={6} md={4}>
              <Link href="/" passHref>
                {/* <Box>
                  <Image src={Logo} layout="responsive" height={300} />
                </Box> */}
                <Typography color="primary.main" variant="h4">
                  Zipo Aid
                </Typography>
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
                  <Link href={link} key={name}>
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
        <DrawerMenu toggleMenu={toggleMenu} links={links} />
      </MenuDrawer>
    </>
  );
};

export default MyAppBar;
