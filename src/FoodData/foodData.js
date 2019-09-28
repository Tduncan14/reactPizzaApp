import gyro from '../img/gyro.jpeg';
import pizza from '../img/pizza.png';
import fries from '../img/fries.jpeg';
import chickenPizza from '../img/chicken-pizza.jpeg';
import chickenFries from '../img/chicken-fingers.jpeg';
import veggiePizza from '../img/healthy-pizza.jpeg';
import Pepper from '../img/pizza2.jpeg';
import sandwhich from '../img/sandwich.jpeg';
 const foodItems = [
    {name:'Pizza',
     img:pizza,
     section:'Pizza'},
    {name:"Gyro",
     img:gyro,
     section:'Sandwich'},
    {name:'Fries',
    img:fries,
    section:'Sides'},
    {name:'Chicken Pizza',
    img:chickenPizza,
    section:'Pizza'},
    {name:'Chicken fries',
    img:chickenFries,
    section:'Sides'},
    {name:'Veggie Pizza',
    img:veggiePizza,
    section:'Pizza'}
    ,
    {name:'Sandwich',
    img:sandwhich,
    section:'Sandwich'
   },
    {name:'Pepperoni Pizza',
    img:Pepper,
    section:'Pizza'}
];

export const foods = foodItems.reduce((res, food) => {
    if (!res[food.section]) {
      res[food.section] = [];
    }
    res[food.section].push(food);
    console.log(res,'res')
    return res;
  }, {});
  
