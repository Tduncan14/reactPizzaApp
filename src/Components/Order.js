import React from 'react';
import styled from 'styled-components';
import {DialogContent,DialogFooter,ConfirmButton} from "../Components/FoodDialog";
import { useOpenFood } from '../hooks/useOpenFood';
import {formatPrice} from '../FoodData/foodData';


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
  const OrderContainer  = styled.div `
padding:10px 0;
border-bottom:1px solid gray;

`

  const OrderItem = styled.div `
  padding:10px 0px;
  display:grid;
  grid-template-columns:20px 150px 20px 60px;
  justify-content:space-between;
  `;

const Order = ({orders}) =>{


  

  return (
  <>
  <OrderStyled>
    { orders.length == 0 ? (<OrderContent>
      Your order is empty
    </OrderContent>):(<OrderContent>
      {
        " "
      }
      <OrderContainer>Your Order:  {orders.length}</OrderContainer>
      {orders.map(order => (
        <OrderContainer><OrderItem>
        <div>1</div>
        <div> {order.name}</div>
        <div></div>
        <div>{formatPrice(order.price)}</div>
</OrderItem></OrderContainer>
      ))}
    </OrderContent>)}
    <DialogFooter>
      <ConfirmButton>Checkout</ConfirmButton>
    </DialogFooter>
 
  
  </OrderStyled>
  </>
)

      }


export default Order;