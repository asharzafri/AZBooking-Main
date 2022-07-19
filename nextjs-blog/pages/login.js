import {
  Button,
  Link,
  List,
  ListItem,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import Layout from "../components/layout";
import useStyles from "../utils/styles";
import NextLink from "next/link";
import { Spacer, useInput, Input } from "@nextui-org/react";

export default function Login() {
  const classes = useStyles();
  const loginHandler = () => {
    router.push("/booking");
  };
  const { value, reset, bindings } = useInput("");

  const validateEmail = (value) => {
    return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
  };

  const helper = React.useMemo(() => {
    if (!value)
      return {
        text: "",
        color: "",
      };
    const isValid = validateEmail(value);
    return {
      text: isValid ? "Correct email" : "Enter a valid email",
      color: isValid ? "success" : "error",
    };
  }, [value]);
  return (
    <Layout tittle="Login">
      <form className={classes.form}>
        <Typography component="h1" variant="h1">
          {" "}
          Login
        </Typography>

        <List>
          <ListItem>
            <Input
              {...bindings}
              fullWidth
              variant="outlined"
              clearable
              shadow={false}
              onClearClick={reset}
              status={helper.color}
              color={helper.color}
              helperColor={helper.color}
              helperText={helper.text}
              type="email"
              label="Email"
              placeholder="Enter email"
            />
          </ListItem>
          <ListItem>
            <Input.Password
              clearable
              fullWidth
              type="password"
              label="Password"
              placeholder="Enter your password"
            />
          </ListItem>
          <ListItem>
            <Button
              variant="contained"
              type="submit"
              fullWidth
              color="primary"
              onClick={loginHandler}
            >
              Login
            </Button>
          </ListItem>
          <ListItem>
            Don't have an account? &nbsp; {""}{" "}
            <NextLink href="/register" passHref>
              <Link>Register</Link>
            </NextLink>
          </ListItem>

          <ListItem>
            <NextLink href="/" passHref>
              <Link> Back to main</Link>
            </NextLink>
          </ListItem>
        </List>
      </form>
      <Spacer y={20} />
    </Layout>
  );
}
