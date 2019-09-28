import React,{useState} from 'react';
import { createGlobalStyle } from 'styled-components';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Menu from './Components/Menu'
import {GlobalStyle} from './Styles/StyleGlobal';
import {FoodDialog} from './Components/FoodDialog';
function App() {

   const [openFood,setOpenFood] = useState();
   const [img,setimg] = useState();
console.log(openFood);

  return (
<>
<GlobalStyle />
<Navbar />
<FoodDialog openFood = {openFood}  img = {img}/>
<Banner/>
<Menu setOpenFood={setOpenFood} setimg ={setimg}/>
<div>
 
</div>
</>
  );
}

export default App;
