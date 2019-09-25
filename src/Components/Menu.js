import React from 'react';
import styles from 'styled-components';
import {foods} from '../FoodData/foodData.js';
import {Food, FoodGrid,FoodLabel} from '../Styles/StylesFoodGrid';


const MenuStyles = styles.div `

margin:0px 400px 50px 20px;
height:400px;

`;



const Menu = () => (


  <>
  <MenuStyles>
    {Object.entries(foods).map(([
      section,foods
    ]) =>(
      <>
      <h1>{section}</h1>
      <FoodGrid>
        {foods.map (food => (
          <Food img={food.img}>
            <FoodLabel>{food.name}</FoodLabel>
          </Food>
        ))}
  
  
  </FoodGrid>
  </>

    ))

    }
  </MenuStyles>
  </>
)



export default Menu