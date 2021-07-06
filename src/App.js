import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectItemsCount } from './features/basketSlice';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { Badge } from '@material-ui/core';

import './App.css';
import ItemCard from './components/ItemCard';
import Cart from './components/Cart';

import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const amountItemsInBasket = useSelector(selectItemsCount);
  return (
    <div className="App">
      <header>
        <Box display="flex" justifyContent="center" alignItems="center">
          <h1>Ecommerce</h1>
          <Badge
            onClick={() => setIsCartOpen((isCartOpen) => !isCartOpen)}
            badgeContent={amountItemsInBasket ? amountItemsInBasket : '0'}
            color="secondary"
          >
            <ShoppingCartOutlinedIcon />
          </Badge>
        </Box>
      </header>
      <Container maxWidth="xs">
        {isCartOpen && (
          <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
        )}
      </Container>
      <Box display="flex" flexWrap="wrap" justifyContent="center">
        <ItemCard
          price="599000"
          id="111"
          image="https://images.unsplash.com/photo-1520050206274-a1ae44613e6d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          brand="Audi"
        />
        <ItemCard
          price="699000"
          id="222"
          image="https://images.unsplash.com/photo-1549925862-990ac5b34e35?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          brand="Mercedes Benz"
        />
        <ItemCard
          price="479000"
          id="333"
          image="https://images.unsplash.com/photo-1614288532696-203f89dc0db4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80"
          brand="BMW"
        />
      </Box>
    </div>
  );
}

export default App;
