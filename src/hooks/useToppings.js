import {useState} from 'react';

export function useToppings(defaultTopping){

const[toppings,setToppings] = useState[defaultTopping || getDefaultToppings()];


function checkToppings(index){
   const newToppings = [...toppings];
   newToppings[index].checked = !newToppings.checked
   setToppings(newToppings);
}

 return{
     checkToppings,
     setToppings
 }

}

const toppingsList = [
    'Extra Cheese',
    'Pepperoni',
    'Sausage',
    'Onions',
    'Peppers',
    'Pineapples',
    'Spinach',
    'Mushrooms',
    'Olives'
];


function getDefaultToppings(){

    return toppingsList.map((topping)=>(

        {name:topping,
          checked:false}

    ))
    
}




