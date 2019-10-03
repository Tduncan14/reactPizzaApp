import React,{useState} from 'react';
import { createGlobalStyle } from 'styled-components';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Menu from './Components/Menu'
import {GlobalStyle} from './Styles/StyleGlobal';
import {FoodDialog} from './Components/FoodDialog';
import Order from './Components/Order';
import {useOpenFood} from './hooks/useOpenFood';
import {useOrder} from './hooks/useOrder';
import {useTitle} from './hooks/useTitle';
function App() {

   const openFood = useOpenFood();

   const orders = useOrder();

   useTitle({...openFood, ...orders})
console.log(openFood);

  return (
<>
<GlobalStyle />
<Navbar />
<FoodDialog {...openFood} {...orders}/>
<Banner/>
<Order {...orders} {...openFood}/>
<Menu {...openFood}/>
<div>

</div>
</>
  );
}

export default App;
