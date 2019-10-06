import React from 'react'
import styled from 'styled-components';
import {FoodLabel} from '../Styles/StylesFoodGrid'
import {pizzaRed} from '../Styles/colors';
import {Title} from '../Styles/title';
import {useOrder} from '../hooks/useOrder';
import {formatPrice} from '../FoodData/foodData'
import { format } from 'url';
import {QuanityInput} from './QuanityInput.js';
import{useQuanity} from '../hooks/useQuanity';
import {Toppings} from './Toppings';
import{useToppings} from '../hooks/useToppings';
import{useChoice} from '../hooks/useChoice';
import{Choices} from './Choices';


const Dialog = styled.div`
  width: 500px;
  background-color: white;
  position: fixed;
  top: 75px;
  z-index: 5;
  max-height: calc(100% - 100px);
  left: calc(50% - 250px);
  display: flex;
  flex-direction: column;
`;

export const DialogContent = styled.div`
  overflow: auto;
  min-height: 100px;
  padding: 20px 40px;
  padding-bottom: 80px;
`;

export const DialogFooter = styled.div`
  box-shadow: 0px -2px 10px 0px grey;
  height: 60px;
  display: flex;
  justify-content: center;
`;

export const ConfirmButton = styled(Title)`
  margin: 10px;
  color: white;
  height: 20px;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  width: 200px;
  cursor: pointer;
  background-color: ${pizzaRed};
  ${({ disabled }) =>
    disabled &&
    `
    opactity: .5; 
    background-color: grey; 
    pointer-events: none; 
  `}
`;

const DialogShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  background-color: black;
  opacity: 0.7;
  z-index: 4;
`;

const DialogBanner = styled.div`
  min-height: 200px;
  margin-bottom: 20px;
  ${({ img }) => (img ?
    `background-image: url(${img});` 
    : `min-height: 75px;`)}
  background-position: center;
  background-size: cover;
`;

const DialogBannerName = styled(FoodLabel)`
  font-size: 30px;
  padding: 5px 40px;
  top: ${({ img }) => (img ? `100px` : `20px`)};
`;

const pricePerTopping = 0.5;

export function getPrice(order){

 return( order.quantity *
    (order.price +
      order.toppings.filter(t => t.checked).length * pricePerTopping)
 )

}

export function FoodDialogContainer({openFood,setOpenFood,setOrders,orders}){

  const quantity = useQuanity(openFood && openFood.quantity);
  const toppings = useToppings(openFood.toppings);
  const choiceRadio = useChoice(openFood.choice);
 function hasToppings (food){

   return food.section === 'Pizza';


 }


function close () {

  setOpenFood();
}
 console.log(openFood,'this is openefood')

 if(!openFood){
   return null
 }

 const order = {
  ...openFood,
  quantity:quantity.value,
  toppings:toppings.toppings,
  choice:choiceRadio.value
  
 }

const addToOrder = () => {
  setOrders([...orders, order]);
  close();

 }


  return (
    openFood ? (
    <>
       <DialogShadow onClick={close}/>
       <Dialog>
           <DialogBanner img={openFood.img}>
           < DialogBannerName>{openFood.name}</DialogBannerName>
           </DialogBanner>

           <DialogContent>
             <QuanityInput quantity ={quantity}/>
         
           
           
           {hasToppings(openFood) &&<>
           <h3 >Do you want Toppings?</h3>
           <Toppings  {...toppings}/>
           </>
           }
           {openFood.choices &&<Choices openFood={openFood} choiceRadio = {choiceRadio}/>}
             </DialogContent>

           <DialogFooter>
             <ConfirmButton  disabled={openFood.choices && !choiceRadio.value}    onClick={addToOrder}> Add to Order:{formatPrice(getPrice(order))}</ConfirmButton>
           </DialogFooter>
       
       </Dialog>
   </>
    ):(null)
  
  )

}


export function FoodDialog(props){

  if(!props.openFood) return null;
  
return <FoodDialogContainer {...props}>

  </FoodDialogContainer>
 



}