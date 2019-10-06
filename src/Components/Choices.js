import React from 'react';
import { useOpenFood } from '../hooks/useOpenFood';
import styled from 'styled-components';

const cursorPointer = `cursor:pointer`;


const RadioInput = styled.input`
  ${cursorPointer}


`;

const Label = styled.label`
  ${cursorPointer}
`;

export function Choices({openFood,choiceRadio}){

    return(
        <>
        <h3>Choose one</h3>
        {openFood.choices.map(
            choice => (
                <>
                 <RadioInput
                  type="radio"
                  id={choice}
                  name="choice"
                  value={choice}
                  checked={choiceRadio.value === choice}
                  onChange={choiceRadio.onChange}
                  />

                  <Label for={choice}>{choice}</Label>
                </>
                
            )
        )}
        </>
    )
}