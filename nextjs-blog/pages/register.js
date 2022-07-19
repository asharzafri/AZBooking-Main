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

export default function Register() {
  const classes = useStyles();

  //    const handlePasswordChange = event => {
  //         this.setState({
  //           password: event.target.value,
  //         });
  //       };
  //     const  handleConfirmPassword = event => {
  //         if (event.handleConfirmPassword !== event.handlePasswordChange) {
  //           message.error('error');
  //         }
  //       };
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
    <Layout tittle="Register">
      <form className={classes.form}>
        <Typography component="h1" variant="h1">
          {" "}
          Login
        </Typography>

        <List>
          <ListItem>
            <Input
              variant="outlined"
              fullWidth
              clearable
              id="name"
              label="Name"
              inputProps={{ type: "name" }}
              placeholder="Enter Name"
            />
          </ListItem>
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
            <Input.Password
              clearable
              fullWidth
              type="password"
              label="Password"
              placeholder="Confirm your password"
            />
          </ListItem>
          <ListItem>
            <Button variant="contained" type="submit" fullWidth color="primary">
              Sign Up
            </Button>
          </ListItem>
          <ListItem>
            <NextLink href="/login" passHref>
              <Link>Back to login</Link>
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
