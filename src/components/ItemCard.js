import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import {
  addItemToBasket,
  removeItemFromBasket,
  selectItems,
} from '../features/basketSlice';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: '10px',
  },
  media: {
    height: 140,
    width: '100%',
    objectFit: 'cover',
  },
});

const ItemCard = ({ image, brand, id, price }) => {
  const cartItems = useSelector(selectItems);
  console.log(
    '🚀 ~ file: ItemCard.js ~ line 30 ~ ItemCard ~ cartItems',
    cartItems
  );
  const dispatch = useDispatch();
  const classes = useStyles();

  const addItem = () => {
    const product = {
      image,
      brand,
      id,
      price,
    };
    dispatch(addItemToBasket(product));
  };
  const removeItem = () => {
    dispatch(removeItemFromBasket({ id }));
  };
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {brand}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            Price: ${price}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          onClick={addItem}
          size="small"
          variant="contained"
          color="primary"
        >
          Add to basket
        </Button>
        <Button onClick={removeItem} color="secondary" size="small">
          Remove item from basket
        </Button>
      </CardActions>
    </Card>
  );
};

export default ItemCard;
