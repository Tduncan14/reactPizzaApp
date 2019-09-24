import React from 'react';
import {StyleNavbar}  from '../Styles/StyleNavbar.js';
import {pizzaRed} from '../Styles/colors';
import {Title} from '../Styles/title';
import styled from 'styled-components';


const Logo = styled(Title)`
color:white;
font-size:30px;
text-shadow: 1px 1px 4px #380502;
`


 const Navbar = () =>(
    <>
    <StyleNavbar>
       <Logo>
          Pizza 🍕🍟🥤
       </Logo>
     </StyleNavbar>
    </>


)

export default Navbar;