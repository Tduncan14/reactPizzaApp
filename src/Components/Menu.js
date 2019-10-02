import React from 'react';
import styles from 'styled-components';
import {foods} from '../FoodData/foodData.js';
import {Food, FoodGrid,FoodLabel} from '../Styles/StylesFoodGrid';
import {formatPrice} from '../FoodData/foodData';

const MenuStyles = styles.div `

margin:0px 400px 50px 20px;
height:400px;

`;



const Menu = ({setOpenFood}) => (


  <>
 <MenuStyles>
      {Object.entries(foods).map(([section, foods]) => (
        <>
          <h1> {section} </h1>
          <FoodGrid>
            {foods.map(food => (
              <Food
                img={food.img}
                onClick={() => {
                  setOpenFood(food);
                }}
              >
                <FoodLabel>
               <div> {food.name}</div>
               <div>{formatPrice(food.price)}</div>

                </FoodLabel>
              </Food>
            ))}
          </FoodGrid>
        </>
      ))}
  </MenuStyles>
  );

  </>
)



export default Menu