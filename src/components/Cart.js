import React from 'react';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Badge, Box, CardMedia, Divider } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {
  selectItemsCount,
  selectTotalPrice,
  selectItems,
} from '../features/basketSlice';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
  media: {
    height: 'auto',
    width: 100,
    objectFit: 'cover',
  },
  title: {
    fontSize: 14,
  },
  fontWeight: {
    fontWeight: 600,
  },
  pos: {
    marginBottom: 12,
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
});

export default function Cart({ setIsCartOpen }) {
  const amountItemsInBasket = useSelector(selectItemsCount);
  const totalPrice = useSelector(selectTotalPrice);
  const itemsIncart = useSelector(selectItems);
  const classes = useStyles();

  let groupSameCars = itemsIncart?.reduce((r, a) => {
    r[a.brand] = [...(r[a.brand] || []), a];
    return r;
  }, []);

  const arrGroupedcars = Object.entries(groupSameCars);

  const cartDetails = arrGroupedcars?.map((item, index) => {
    return (
      <Card key={index} className={(classes.root, classes.pos)}>
        <Box display="flex">
          <CardMedia className={classes.media} image={item[1][0].image} />
          <CardContent align="left">
            <Typography className={(classes.title, classes.fontWeight)}>
              Car: {item[0]}
            </Typography>
            <Typography className={(classes.title, classes.fontWeight)}>
              Quantity: {item[1].length}
            </Typography>
            <Typography className={(classes.title, classes.fontWeight)}>
              Price: ${item[1][0].price}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    );
  });

  return (
    <Container>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Box display="flex" justifyContent="flex-end" alignItems="center">
            <Badge
              onClick={() => setIsCartOpen(false)}
              badgeContent={amountItemsInBasket ? amountItemsInBasket : '0'}
              color="secondary"
            >
              <ShoppingCartOutlinedIcon />
            </Badge>
          </Box>
          <Divider />
          <Box>{cartDetails}</Box>
          <Divider />
          <Box display="flex" className={classes.spaceBetween}>
            <Typography color="textPrimary">Total</Typography>
            <Typography color="primary">${totalPrice} </Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}
