import React from 'react'
import styled from 'styled-components';


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
left: calc(50% - 250px)`;



const DialogBanner = styled.div`
min-height:200px;
margin-bottom:20px;
background:green;
background-image:${({img}) => `url(${img});`}
`;


export function FoodDialog({openFood}){

 console.log(openFood,'this is openefood')


  return (
    openFood ? (
    <>
       <DialogShadow></DialogShadow>
       <Dialog>
           <DialogBanner img={openFood.img}/>
       </Dialog>
   </>
    ):(null)
  
  )

}