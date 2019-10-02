import React from 'react'
import styled from 'styled-components';
import {FoodLabel} from '../Styles/StylesFoodGrid'
import {pizzaRed} from '../Styles/colors';
import {Title} from '../Styles/title';
import {useOrder} from '../hooks/useOrder';
import {formatPrice} from '../FoodData/foodData'
import { format } from 'url';
const DialogShadow = styled.div`

position:fixed;
height:100%;
width:100%;
top:0px;
background-color:black;
opacity:0.7;
z-index:4;
`
const Dialog = styled.div`
width:425px;
background-color:white;
margin-top:10px;
position:fixed;
top:75px;
height:500px;
z-index:5;
max-height:calc(100% - 100px);
left: calc(50% - 250px);
display:flex;
flex-direction:column`;




const DialogBanner = styled.div`
min-height:200px;
margin-bottom:20px;
background-image:${({img}) => `url(${img});`}
background-size:cover;
background-position:center;
`;

const DialogBannerName =styled(FoodLabel) `
font-family ='Righteous', cursive;
top:100px;
font-size:30px;
padding:5px 40px;
`
export const DialogContent = styled.div `
overflow:auto;
min-height:100px;`


export const DialogFooter = styled.div `
box-shadow:  0px  7px 4px -2px gray;
height:60px;
display:flex;
justify-content:center;`;


 export const ConfirmButton = styled(Title)`
 margin:10px;
 color:white;
 height:20px;
 border-radius:5px;
 padding:10px;
 text-align:center;
 width:200px;
 cursor:pointer;
 background-color:${pizzaRed};
`;

export function FoodDialog({openFood,setOpenFood,setOrders,orders}){

function close () {

  setOpenFood();
}
 console.log(openFood,'this is openefood')

 if(!openFood){
   return null
 }

 const order = {
  ...orders
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

           </DialogContent>

           <DialogFooter>
             <ConfirmButton onClick={addToOrder}> Add to Order:{formatPrice(openFood.price)}</ConfirmButton>
           </DialogFooter>
       
       </Dialog>
   </>
    ):(null)
  
  )

}