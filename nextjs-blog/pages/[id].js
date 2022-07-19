import { useState, useEffect } from "react";
import nc from 'next-connect';

const handler = nc();

handler.get(async (req, res) =>{
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
        const product = [];
        for (const key in data) {
        const product = {
            _id: key,
            ...data[key]
          };
          product.push(product);
        }
        setLoadedproducts(product);
       //console.log(loadedproducts)
      });
  }, []);

  const product = await product.findById(re.query._id);
  res.send(product);
});

export default handler;