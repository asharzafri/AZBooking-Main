import React from "react";
//import 'date-fns';
import { useRouter } from "next/router";
import Layout from "../components/layout";
import { Text } from "@nextui-org/react";
import NextLink from "next/link";
import {
  Grid,
  Button,
  Link,
  List,
  ListItem,
  TextField,
  Typography,
} from "@material-ui/core";
import { Spacer } from "@nextui-org/react";

export default function conformation() {
  return (
    <Layout tittle="Conformation">
    <Spacer y={4} />
      <Typography component="h1" variant="h1">
        Conformation Page
      </Typography>
      <Text h2>Thank you! Your appointment has been booked.</Text>

      <Spacer y={1} />

      <div>
        <NextLink href="/">Back to main page</NextLink>
      </div>
      <Spacer y={24} />
    </Layout>
  );
}
