import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Menu from './Components/Menu'
const GlobalStyle = createGlobalStyle `
 * {
   margin:0;
 }

body{
  font-family:'Open Sans', sans-serif;

}

h1,h2,h3{
  font-family: 'Righteous', cursive;
}`;


function App() {
  return (
<>
<GlobalStyle />
<Navbar />
<Banner />
<Menu/>
<div>
 
</div>
</>
  );
}

export default App;
