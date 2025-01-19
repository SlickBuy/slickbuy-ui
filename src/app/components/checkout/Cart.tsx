import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';

type CartItem = {
    quant: number;
    id: number;
    productName: string;
    description: string;
    price: number;
};

export default function Review() {
    const [cart, setCart] = useState<CartItem[]>([]); // Specify the type for cart as CartItem[]

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart') || '') || [];
    setCart(savedCart);
  }, []);

  const calculateTotalPrice = () => {
    return cart.reduce((total, product) => {
      return total + product.price * product.quant;
    }, 0);
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Преглед на поръчка
      </Typography>
      <List disablePadding>
        {!!cart.length && cart.map((product) => (
          <ListItem key={product.id} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.productName} secondary={product.description} />
            <Typography variant="body2" sx={{ mr: 3 }}>{product.price * product.quant} лв.</Typography>
            <Typography variant="body2">{product.quant} бр.</Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Обща сума:" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {calculateTotalPrice()} лв.
          </Typography>
        </ListItem>
      </List>
    </React.Fragment>
  );
}
