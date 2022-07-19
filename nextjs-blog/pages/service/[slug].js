import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import NextLink from "next/link";
import Image from "next/image";
import {
  Button,
  Card,
  Grid,
  Link,
  List,
  ListItem,
  Typography,
} from "@material-ui/core";
import Layout from "../../components/layout";
import data from "../../utils/data";
import useStyles from "../../utils/styles";
import { Spacer } from "@nextui-org/react";
import axios from "axios";
import { Store } from "../../utils/Store";
import DataContext from "../../store/data-store";

export default function ProductScreen() {
  const ctx = useContext(DataContext);
  const { dispatch } = useContext(Store);
  const [loadedproducts, setLoadedproducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/get-data", { mode: "cors" })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const products = [];
        for (const key in data) {
          const product = {
            _id: key,
            ...data[key],
          };
          products.push(product);
        }
        setLoadedproducts(products);
        //console.log(loadedproducts)
      });
  }, []);

  // const { dispatch} = useContext(Store);
  const classes = useStyles();
  const router = useRouter();
  const { slug } = router.query;
  const product = loadedproducts.find((a) => a.slug === slug);

  if (!product) {
    return (
      <Layout>
        <div>
          <h3>Service not found please click below to go back</h3>
        </div>
        <div className={classes.section}>
          <NextLink href="/" passHref>
            <Link>
              <h1>Back to Main</h1>
            </Link>
          </NextLink>
        </div>
        <Spacer y={20} />
      </Layout>
    );
  }

  const checkoutHandler = () => {
    router.push("/booking");
  };

  return (
    <Layout tittle={product.name} description={product.description}>
      <div className={classes.section}>
        <NextLink href="/" passHref>
          <Link>
            <h1>Back to Main</h1>
          </Link>
        </NextLink>
      </div>
      <Spacer y={2} />
      <Grid container spacing={1}>
        <Grid item md={6} xs={12}>
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            layout="responsive"
          ></Image>
        </Grid>
        <Grid item md={3} xs={12}>
          <List>
            <ListItem>
              <Typography component="h1" variant="h1">
                {" "}
                {product.name}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>Category: {product.category}</Typography>
            </ListItem>
            <ListItem>
              <Typography>Rating: {product.rating}</Typography>
            </ListItem>
            <ListItem>
              <Typography>Description: {product.description}</Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid item md={3} xs={12}>
          <Card>
            <List>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Price:</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>${product.price}</Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Service:</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>
                      {product.stock > 0 ? "Available" : "Unavailable"}
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={ctx.addCartHandler}
                >
                  Add to Favourite
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={checkoutHandler}
                >
                  Book an appointment
                </Button>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
      <Spacer y={3} />
    </Layout>
  );
}
