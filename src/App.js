import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Menu from './Components/Menu'
import {GlobalStyle} from './Styles/StyleGlobal';

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
