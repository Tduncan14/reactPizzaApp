import React,{useState} from 'react';
import { createGlobalStyle } from 'styled-components';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Menu from './Components/Menu'
import {GlobalStyle} from './Styles/StyleGlobal';
import {FoodDialog} from './Components/FoodDialog';
import Order from './Components/Order';
function App() {

   const [openFood,setOpenFood] = useState();
   const [img,setimg] = useState();
console.log(openFood);

  return (
<>
<GlobalStyle />
<Navbar />
<FoodDialog openFood = {openFood}  setOpenFood={setOpenFood}/>
<Banner/>
<Order/>
<Menu setOpenFood={setOpenFood}/>
<div>

</div>
</>
  );
}

export default App;
