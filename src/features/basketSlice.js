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
