import React from 'react';
import styled from 'styled-components';
import {DialogContent,DialogFooter,ConfirmButton} from "../Components/FoodDialog";
import { useOpenFood } from '../hooks/useOpenFood';
import {formatPrice} from '../FoodData/foodData';
import {getPrice} from '../Components/FoodDialog';

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

const cursorPointer ={
  "cursor":"pointer"
};

const OrderFooter = styled.div `

`
const OrderContainer = styled.div`
  padding: 10px 0px;
  border-bottom: 1px solid grey;
  ${({ editable }) =>
    editable
      ? `
    &:hover {
      cursor: pointer;
      background-color: #e7e7e7;
    }
  `
      : `
    pointer-events: none; 
  `}
`;

  const OrderItem = styled.div `
  padding:10px 0px;
  display:grid;
  grid-template-columns:20px 150px 20px 60px;
  justify-content:space-between;
  `;


const DetailItem =styled.div `
color:gray;
font-size:10px;`

const Order = ({orders,setOrders,setOpenFood}) =>{


  const subTotal = orders.reduce((total,order) =>{
     return total +getPrice(order);

  },0)
  

  const tax = subTotal * 0.07;


  const total = tax + subTotal;


  const deleteItem = index =>{

     const newOrders = [...orders];

     newOrders.splice(index,1)
     setOrders(newOrders);

  }

  return (
  <>
  <OrderStyled>
    { orders.length == 0 ? (<OrderContent>
      Your order is empty
    </OrderContent>):(<OrderContent>
      {
        " "
      }
      <OrderContainer>Your Order:</OrderContainer>
      {orders.map((order,i) => (
        <OrderContainer
         editable><OrderItem
        onClick={() => {
          setOpenFood({...order,i})
        }}>
        <div>{order.quantity}</div>
        <div> {order.name}</div>
        <div style={cursorPointer} onClick={(e)=>{
          e.stopPropagation();
          deleteItem(i)}}>   🗑</div>
        <div>{formatPrice(getPrice(order))}</div>
        <DetailItem>
          {order.toppings
           .filter(t => t.checked)
           .map(topping => topping.name)
           .join(", ")}
        </DetailItem>
        {order.choice && <DetailItem>{order.choice}</DetailItem>}
</OrderItem>
</OrderContainer>
      ))}
      <OrderContainer>
        <OrderItem>
        <div/>
        <div>Sub-total:</div>
        <div>{formatPrice(subTotal)}</div>
        </OrderItem>
  
        <OrderItem>
        <div/>
        <div>State Taxes:</div>
        <div>{formatPrice(tax)}</div>
        </OrderItem>

        <OrderItem>
        <div/>
        <div>Total price:</div>
        <div>{formatPrice(total)}</div>
        </OrderItem>
      </OrderContainer>
    </OrderContent>)}
    <DialogFooter>
      <ConfirmButton>Checkout</ConfirmButton>
    </DialogFooter>
 
  
  </OrderStyled>
  </>
)

    }


export default Order;