import React from 'react';
import styled from 'styled-components';


 const OrderStyled = styled.div `
 position:fixed;
 right:0px;
 top:50px;
 width:340px;
 background-color:white;
 height:calc(100% - 50px);
 box-shadow: 0px 4px 5px gray;
`;


const Order = () =>(

   <>
  <OrderStyled/>
  </>


)


export default Order;