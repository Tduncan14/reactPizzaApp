import React from 'react';
import styled from 'styled-components';
import {DialogContent,DialogFooter,ConfirmButton} from "../Components/FoodDialog";

 const OrderStyled = styled.div `
 position:fixed;
 padding-top:15px !important;
 right:0px;
 top:50px;
 width:340px;
 background-color:white;
 height:calc(100% - 50px);
 box-shadow: 0px 4px 5px gray;
display:flex;
flex-direction:column;
`;

const OrderContent = styled(DialogContent)`
 padding:20px;
 height:100%;
`

const OrderFooter = styled.div `

`

const Order = ({orders}) =>(

   <>
  <OrderStyled>
    { orders.length = 0 ? (<OrderContent>
      Your order is empty
    </OrderContent>):(<OrderContent>{orders.length}</OrderContent>)}
    <DialogFooter>
      <ConfirmButton>Checkout</ConfirmButton>
    </DialogFooter>
 
  
  </OrderStyled>
  </>


)


export default Order;