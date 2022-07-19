import React, { useContext } from "react";
import DataContext from "../store/data-store";
import Layout from "../components/layout";
import Image from "next/image";
import {
  Button,
  Grid,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import { Store } from "../utils/Store";
import NextLink from "next/link";

export default function CartScreen() {
  const ctx = useContext(DataContext);
  const { state } = useContext(Store);
  const {
    favourite: { favouriteItems },
  } = state;

  return (
    <Layout tittle="Favourite Page">
      <Typography component="h1" variant="h1">
      Favourite Page
      </Typography>
      {favouriteItems.length === 0 ? (
        <div>
          Favourite is empty. <NextLink href="/">Back to main page</NextLink>
        </div>
      ) : (
        <Grid container spacing={1}>
          <Grid item md={9}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableCell>Image</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">action</TableCell>
                </TableHead>
                <TableBody>
                  {favouriteItems.map((item) => (
                    <TableRow key={item._id}>
                      <TableCell>
                        <NextLink href={`/product/${item.slug}`} passHref>
                          <Link>
                            <Image
                              src={product.image}
                              alt={product.name}
                              width={50}
                            ></Image>
                          </Link>
                        </NextLink>
                      </TableCell>
                      <TableCell>
                        <NextLink href={`/product/${item.slug}`} passHref>
                          <Link>
                            <Select>time</Select>
                          </Link>
                        </NextLink>
                      </TableCell>
                      <TableCell align="right">${product.price}</TableCell>
                      <TableCell align="right">
                        <Button variant="contained" color="secondary">
                          x
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid>Favourite action</Grid>
        </Grid>
      )}
    </Layout>
  );
}
