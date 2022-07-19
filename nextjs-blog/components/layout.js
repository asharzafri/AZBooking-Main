import Head from "next/head";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Link,
  createMuiTheme,
  ThemeProvider,
  CssBaseline,
  Switch,
  Badge,
  CardActionArea,
} from "@material-ui/core";
import NextLink from "next/link";
import Footer from "./Footer";
import useStyles from "../utils/styles";
import { Spacer } from "@nextui-org/react";
import { useContext } from "react";
import { Store } from "../utils/Store";
import Cookies from "js-cookie";
import handler from "../pages/[id]";

export default function Layout({ title, description, children, }) {
  const { state, dispatch } = useContext(Store);
  const { darkMode, favourite } = state;
  const theme = createMuiTheme({
    typography: {
      h1: {
        fontSize: "1.6rem",
        fontWeight: 400,
        margin: "1rem 0",
        color: "#919382",
      },
      h2: {
        fontSize: "1.4rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
    },
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: "#f5c001",
      },
      secondary: {
        main: "#208090",
      },
    },
  });
  const classes = useStyles();
  const darkModeChangeHandler = () => {
    dispatch({ type: darkMode ? "DARK_MODE_OFF" : "DARK_MODE_ON" });
    const newDarkMode = !darkMode;
    Cookies.set("darkMode", newDarkMode ? "ON" : "OFF");
  };
  return (
    <div>
      <Head>
        <title> {title ? `${title} - AZ Bookings` : "AZ Bookings"}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <NextLink href="/" passHref>
              <Link>
                <Typography className={classes.brand}>AZ Bookings</Typography>
              </Link>
            </NextLink>
            <div className={classes.grow}></div>
            <div>
              <Switch
                checked={darkMode}
                onChange={darkModeChangeHandler}
              ></Switch>
              <NextLink href="/favourite" passHref>
                <Link>
                  {favourite.favouriteItems.length > 0 ? (
                    <Badge
                      color="secondary"
                      badgeContent={favourite.favouriteItems.length}
                    >
                      Favourite
                    </Badge>
                  ) : (
                    "Favourite"
                  )}
                </Link>
              </NextLink>

              <NextLink href="/login" passHref>
                <Link>Login</Link>
              </NextLink>
            </div>
          </Toolbar>
        </AppBar>
        <Spacer y={3} />
        <Container className={classes.main}>{children}</Container>

        <Spacer y={3} />
        <footer>
          <Footer />
        </footer>
      </ThemeProvider>
    </div>
  );
}
