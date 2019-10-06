import React from 'react';
import { useOpenFood } from '../hooks/useOpenFood';


export function choices({}){

    return(
        <>
        <h3>Choose one</h3>
        {useOpenFood.choices.map(
            choice => (
                <>
                 <input
                  type="radio"
                  id={choice}
                  name="choice"
                  value={choice}
                  checked={choiceRadio.onChange}
                  />

                  <label for={choice}>{choice}</label>
                </>
                
            )
        )}
        </>
    )
}