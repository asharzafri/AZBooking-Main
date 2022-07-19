import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  CardActions,
} from "@material-ui/core";
import NextLink from "next/link";
import Layout from "../components/layout";
import { useState, useEffect } from "react";
//import data from "../utils/data";

export default function Home() {
  const [loadedproducts, setLoadedproducts] = useState([]);
  
  useEffect(() => {
    fetch(
      'http://localhost:8000/get-data',
      { mode: 'cors' }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const products = [];
        for (const key in data) {
        const product = {
            _id: key,
            ...data[key]
          };
          products.push(product);
        }
        setLoadedproducts(products);
       //console.log(loadedproducts)
      });
  }, []);

  return (
    <Layout>
      <div>
        <h1>Haircuts</h1>

        <Grid container spacing={3}>
          {/* {data.products.map((product) => ( */}
          {loadedproducts.map((product)=>(

            <Grid item md={4} key={product.name}>
              <Card>
                <NextLink href={`/service/${product.slug}`} passHref>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={product.image}
                      title={product.name}
                    ></CardMedia>
                    <CardContent>
                      <Typography>
                        <h1>{product.name}</h1>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </NextLink>
                <CardActions>
                  <Typography>Price: ${product.price}</Typography>
                  <Button size="medium" variant="outlined" color="primary">
                    Add To Favourite
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  );
}
