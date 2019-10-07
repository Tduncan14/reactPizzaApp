import React from 'react';
import styled from 'styled-components';


const ToppingGrid = styled.div`
 display:grid;
 grid-template-columns:repeat(3,1fr);
`;

const ToppingCheckBox = styled.input`
margin-left:10px;
cursor:pointer;
`;


const CheckboxLabel = styled.label`
 cursor:pointer;
 margin-left:10px;
`


export function Toppings ({toppings,checkToppings}){


return(
    <ToppingGrid>
       {toppings.map((topping,i) =>(<CheckboxLabel>
         < ToppingCheckBox 
            type="checkbox"
            checked={topping.checked}
            onClick={() => {
              checkToppings(i);
            }}
          />
          {topping.name}
       </CheckboxLabel>))}
    </ToppingGrid>
)

}