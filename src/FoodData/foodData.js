import gyro from '../img/gyro.jpeg';
import pizza from '../img/pizza.png';
import fries from '../img/fries.jpeg';
import chickenPizza from '../img/chicken-pizza.jpeg';
import chickenFries from '../img/chicken-fingers.jpeg';
import veggiePizza from '../img/healthy-pizza.jpeg';
import Pepper from '../img/pizza2.jpeg';
import sandwhich from '../img/sandwich.jpeg';


export function formatPrice(price){

 return price.toLocaleString('en-US',{style:'currency',currency:'USD'});


}

 const foodItems = [
    {name:'Pizza',
     img:pizza,
     section:'Pizza',
     price:2.99},
    {name:"Gyro",
     img:gyro,
     section:'Sandwich',
     price:6.99},
    {name:'Fries',
    img:fries,
    section:'Sides',
    price:1.55},
    {name:'Chicken Pizza',
    img:chickenPizza,
    section:'Pizza',
    price:3.99},
    {name:'Chicken fries',
    img:chickenFries,
    section:'Sides',
    price:2.00},
    {name:'Veggie Pizza',
    img:veggiePizza,
    section:'Pizza',
    price:'3.99'}
    ,
    {name:'Sandwich',
    img:sandwhich,
    section:'Sandwich',
    price:4.50
   },
    {name:'Pepperoni Pizza',
    img:Pepper,
    section:'Pizza',
    price:3.99}
];

export const foods = foodItems.reduce((res, food) => {
    if (!res[food.section]) {
      res[food.section] = [];
    }
    res[food.section].push(food);
    console.log(res,'res')
    return res;
  }, {});
  
