# Ecommerce - Cars

A small project where the focus was on structuring redux flow. It's a create-react-app project.

## Built With

- [Materila-ui](https://material-ui.com/) - React components for faster and easier web development. Build your own design system, or start with Material Design.
- [react-redux](https://react-redux.js.org/) - Official React bindings for Redux
- [redux-toolkit](https://redux-toolkit.js.org/) - The official, opinionated, batteries-included toolset for efficient Redux development

## Code snippets

store.js

```
import { configureStore } from '@reduxjs/toolkit';
import basketReducer from '../features/basketSlice';

export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});

```

basketSlice.js

```
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addItemToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeItemFromBasket: (state, action) => {
      let copyOfBasket = [...state.items];
      const indexOfItemToRemove = copyOfBasket.findIndex(
        (item) => item.id === action.payload.id
      );
      if (indexOfItemToRemove !== -1) {
        copyOfBasket.splice(indexOfItemToRemove, 1);
        state.items = copyOfBasket;
      } else {
        alert('The item you want to remove does not exist in the basket');
      }
    },
  },
});

export const { addItemToBasket, removeItemFromBasket } = basketSlice.actions;
export const selectItems = (state) => state.basket.items;
export const selectItemsCount = (state) => state.basket.items.length;
export const selectTotalPrice = (state) => {
  const arrPrices = state.basket.items?.map((item) => parseInt(item.price));
  return arrPrices?.reduce((acc, item) => acc + item, 0);
};

export default basketSlice.reducer;
```

index.js

```


import { store } from './app/store';
import { Provider } from 'react-redux';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
```

How to get data from store with "selectore"

```
const cartItems = useSelector(selectItems);
```

How to dispatch an action

```
const dispatch = useDispatch();


const addItem = () => {
    const product = {
      image,
      brand,
      id,
      price,
    };
    dispatch(addItemToBasket(product));
  };
```
